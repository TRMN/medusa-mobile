/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        //document.addEventListener('deviceready', this.onDeviceReady, false);
        document.addEventListener('deviceready', function () {
            if (navigator.notification) { // Override default HTML alert with native dialog
                window.alert = function (message) {
                    navigator.notification.alert(
                        message,    // message
                        null,       // callback
                        "MEDUSA Mobile", // title
                        'OK'        // buttonName
                    );
                };

                window.confirm = function (message) {
                    navigator.notification.confirm(
                        message,
                        onConfirm,
                        'MEDUSA Mobile',
                        ['Yes', 'No']
                    )
                }

            }

            function onConfirm(buttonIndex) {
                if (buttonIndex == 1) {
                    $.jStorage.set('baseURL', $('#server-url').val().toLowerCase());
                    router.navigate('home');
                    router.updatePageLinks();
                } else {
                    return false;
                }
            }

            SpinnerPlugin.activityStart('Please Wait');

            var router = new Navigo();
            var logoTpl = Handlebars.templates.logo();

            router.on({
                'about': function () {
                    var AppVersion = '0.0.1';
                    var navTpl = Handlebars.templates.nav({aboutIsActive: true});
                    var aboutTpl = Handlebars.templates.about({version: AppVersion});
                    updateScreen(navTpl + logoTpl + aboutTpl);
                },
                'setup': function () {
                    var medusaURL = $.jStorage.get('baseURL', 'https://medusa.trmn.org');
                    var navTpl = Handlebars.templates.nav({setupIsActive: true});
                    var config = {url: medusaURL};

                    if (medusaURL == 'https://medusa.trmn.org') {
                        config.url = null;
                    }

                    var setupTpl = Handlebars.templates.setup(config);
                    updateScreen(navTpl + logoTpl + setupTpl);
                },
                'profile': function () {
                    // Check if there's been an update
                    console.log("Check if there is newer information");
                    getLastUpdate();
                },
                'logout': function () {
                    $.jStorage.deleteKey('userInfo');
                    router.navigate('home');
                },
                '*': function () {

                    var navTpl = Handlebars.templates.nav({homeIsActive: true});
                    var userInfo = $.jStorage.get('userInfo', false);
                    if (userInfo) {
                        router.navigate('profile');
                        return false;
                    } else {
                        var usernmame = $.jStorage.get('username', '');
                        var bodyTpl = Handlebars.templates.login({'username': usernmame});

                        updateScreen(navTpl + logoTpl + bodyTpl);
                        bindLogin();

                        $('#login-form').validator();
                        console.log('Validator turned on');
                        $('#login-form').validator('update');
                        console.log('Validator updated');
                    }
                }
            }).resolve();

            function updateScreen(content) {
                $('body').html(content);
                router.updatePageLinks();
                SpinnerPlugin.activityStop();
            }

            function getOauthConfig() {
                var baseUrl = $.jStorage.get('baseURL', 'https://medusa.trmn.org');
                var access_token = $.jStorage.get('access_token', false);
                var refresh_token = $.jStorage.get('refresh_token', false);

                return {
                    'baseUrl': baseUrl,
                    'access_token': access_token,
                    'refresh_token': refresh_token,
                    client_id: 'medusamobile'
                };
            }

            function getTisTig() {
                var oauth_confg = getOauthConfig();

                $.support.cors = true;

                var currentTime = new Date();
                var n = currentTime.getTime();

                var time = $.ajax({
                    url: oauth_confg.baseUrl + '/oauth/tistig?access_token=' + oauth_confg.access_token + "&client_id=" + oauth_confg.client_id,
                    type: "GET",
                    crossDomain: true,
                    cache: false,
                    headers: {"cache-control": "no-cache"},
                    async: true
                });
                time.done(function (data) {
                    var userInfo = $.jStorage.get('userInfo', false);

                    userInfo.tig = data.tig;
                    userInfo.tis = data.tis;

                    $.jStorage.set('userInfo', userInfo);
                    showProfile();
                });

                time.fail(function () {
                    var userInfo = $.jStorage.get('userInfo', false);
                    userInfo.tig = "Unknown";
                    userInfo.tis = "Unknown";

                    $.jStorage.set('userInfo', userInfo);
                    showProfile();
                });
            }

            function showProfile() {
                var navTpl = Handlebars.templates.nav({profileIsActive: true});
                var userInfo = $.jStorage.get('userInfo', false);
                var photoTpl = '';
                var baseUrl = $.jStorage.get('baseURL', 'https://medusa.trmn.org');

                if (userInfo.filePhoto) {
                    var path = baseUrl + userInfo.filePhoto;
                    photoTpl = Handlebars.templates.photo({imgSrc: path});
                }
                userInfo.assignment = getAssignments();
                var memberinfoTpl = Handlebars.templates.memberinfo({
                    userinfo: userInfo,
                    baseurl: baseUrl
                });
                var bodyTpl = photoTpl + memberinfoTpl;

                updateScreen(navTpl + bodyTpl);
            }

            function getUserInfo() {
                var oauth_confg = getOauthConfig();

                $.support.cors = true;

                var currentTime = new Date();
                var n = currentTime.getTime();

                var profile = $.ajax({
                    url: oauth_confg.baseUrl + '/oauth/user?access_token=' + oauth_confg.access_token + "&client_id=" + oauth_confg.client_id,
                    type: "GET",
                    crossDomain: true,
                    cache: false,
                    headers: {"cache-control": "no-cache"},
                    async: true
                });
                profile.done(function (data) {
                    $.jStorage.set('userInfo', data);
                    console.log('User info retrieved and saved');
                    getIdCard();
                    getTisTig();
                });
                profile.fail(function () {
                    alert("I'm sorry, but I was unable to retrieve your information.  Please try again later.");
                    console.log('Unable to retrieve user info');
                    router.navigate('login');
                });

            }

            function getIdCard() {
                var oauth_confg = getOauthConfig();

                var idcard = new FileTransfer();
                var uri = encodeURI(oauth_confg.baseUrl + '/oauth/idcard?access_token=' + oauth_confg.access_token + "&client_id=" + oauth_confg.client_id + '&nocache=' + n)
                console.log('Starting download of ' + uri);

                idcard.download(
                    uri,
                    'cdvfile://localhost/persistent/medusa/idcard.png',
                    function (entry) {
                        console.log('Download complete: ' + entry.toURL());
                        $.jStorage.set('idCardUri', entry.toURL());
                    },
                    function (error) {
                        console.log("download error source " + error.source);
                        console.log("download error target " + error.target);
                        console.log("upload error code" + error.code);
                    },
                    false
                );
            }

            function getLastUpdate() {
                var oauth_confg = getOauthConfig();

                $.support.cors = true;

                var currentTime = new Date();
                var n = currentTime.getTime();

                var updatecheck = $.ajax({
                    url: oauth_confg.baseUrl + '/oauth/lastupdate?access_token=' + oauth_confg.access_token + "&client_id=" + oauth_confg.client_id + '&nocache=' + n,
                    type: "GET",
                    crossDomain: true,
                    cache: false,
                    headers: {"cache-control": "no-cache"},
                    async: true
                });
                updatecheck.done(function (data) {
                    console.log('Got last update timestamp: ' + JSON.stringify(data));
                    $.jStorage.deleteKey('refreshRetry'); // Last update timestamp received, clear the flag
                    $.jStorage.set('serverLastUpdated', data.lastUpdate);
                    var userInfo = $.jStorage.get('userInfo', false);

                    if (data.lastUpdate) {
                        // We got a timestamp, compare them
                        if (data.lastUpdate > userInfo.lastUpdate) {
                            console.log('Fetching updated user info');
                            // Newer info available on Medusa, grab it
                            getUserInfo();
                        } else {
                            getTisTig();
                        }
                    } else {
                        alert('We were unable to check if your information is up to date.  Some information shown may be out of date and some functions may not work or may not be available');
                        showProfile();
                    }
                });
                updatecheck.fail(function (jqXHR, textStatus) {
                    console.log("Error getting last update timestamp, attempting to refresh token");
                    if (!$.jStorage.get('refreshRetry', false)) {
                        // First attempt, try to use the refresh token
                        refreshToken();
                    }
                });
            }

            function refreshToken() {
                var oauth_config = getOauthConfig();

                $.support.cors = true;

                var currentTime = new Date();
                var n = currentTime.getTime();

                var token = $.ajax({
                    url: oauth_config.baseUrl + '/oauth/token?nocache=' + n,
                    type: "POST",
                    crossDomain: true,
                    cache: false,
                    headers: {"cache-control": "no-cache"},
                    data: 'grant_type=refresh_token&client_id=' + oauth_config.client_id + '&refresh_token=' + oauth_config.refresh_token,
                    async: true
                });
                token.done(function (data) {
                    $.jStorage.set('access_token', data.access_token);
                    console.log('Access token saved');
                    $.jStorage.set('refresh_token', data.refresh_token);
                    console.log('Refresh token saved');
                    console.log('Refresh token gotten, set the flag and try again');
                    $.jStorage.set('refreshRetry', true); // Make sure we don't end up in a loop
                    getLastUpdate();
                });
                token.fail(function () {
                    // Unable to get a refresh token, remove user info and return to login screen
                    $.jStorage.deleteKey('userInfo');
                    router.navigate('login');
                });

            }

            function getAssignments() {
                var userInfo = $.jStorage.get('userInfo', false);

                if (userInfo) {
                    var assignments = {};

                    $.each(userInfo.assignment, function (i, assignment) {
                        if (assignment.primary) {
                            assignments.primary = assignment;
                        } else if (assignment.secondary) {
                            assignments.secondary = assignment;
                        } else if (assignment.additional) {
                            assignments.additional = assignment;
                        } else if (assignments.extra) {
                            assignments.extra = assignment;
                        }
                    });

                    return assignments;

                }
            }

            $(document).on('click', '#save-setup', function () {
                var serverURL = $('#server-url').val().toLowerCase();
                confirm('Are you sure you want to change the MEDUSA Server URL to ' + serverURL + '?');
            });

            function bindLogin() {
                $('#login-form').validator().on('submit', function (e) {
                    console.log(e.isDefaultPrevented());
                    if (e.isDefaultPrevented()) {
                        return false;
                    } else {
                        e.preventDefault();
                        SpinnerPlugin.activityStart('Please Wait');

                        var oauth_config = getOauthConfig();
                        var username = $('#email-address').val();
                        var password = $('#password').val();

                        $.jStorage.set('username', username);

                        $.support.cors = true;

                        var currentTime = new Date();
                        var n = currentTime.getTime();

                        var login = $.ajax({
                            url: oauth_config.baseUrl + '/oauth/token?nocache=' + n,
                            type: "POST",
                            crossDomain: true,
                            cache: false,
                            headers: {"cache-control": "no-cache"},
                            data: 'grant_type=password&username=' + username + '&password=' + password + '&client_id=' + oauth_config.client_id,
                            async: true
                        });

                        login.done(function (data) {
                            $.jStorage.set('access_token', data.access_token);
                            console.log('Access token saved');
                            $.jStorage.set('refresh_token', data.refresh_token);
                            console.log('Refresh token saved');
                            getUserInfo();
                        });

                        login.fail(function (jqXHR, textStatus) {
                            alert("Login failed, please try again. MSG: ".textStatus);
                            router.navigate('login');
                        });
                    }
                });
            }
        });
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function () {
        app.receivedEvent('deviceready');

    },
    // Update DOM on a Received Event
    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();

