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
        window.addEventListener("orientationchange", function () {

            window.setTimeout(changeIdCardSize, 500); // iOS has a delay in reporting

            function changeIdCardSize() {
                var width = screen.width;
                var height = screen.height;
                var orientation = (typeof screen.orientation.type === 'undefined') ? screen.orientation : screen.orientation.type;

                console.log("Screen orientation is: " + orientation);

                switch (orientation) {
                    case 'landscape':
                    case 'landscape-primary':
                    case 'landscape-secondary':
                        if (device.platform == 'iOS') {
                            // iOS quirk
                            var width = screen.height;
                            var height = screen.width;
                        }
                        if (height > 640) {
                            height = 640;
                        }
                        console.log('Changing height to ' + (height - 30));
                        $('#idcard').css({'height': height - 30, 'width': 'auto', 'border': '1px solid black'});
                        break;
                    case 'portrait':
                    case 'portrait-primary':
                    case 'portrait-secondary':
                        if (width > 1010) {
                            width = 1010;
                        }
                        console.log('Changing width to ' + width);
                        $('#idcard').css({'height': 'auto', 'width': width, 'border': '1px solid black'});
                        break;
                }
            }

        });

        document.addEventListener('deviceready', function () {

            function spinner(msg) {
                SpinnerPlugin.activityStart(msg);
                console.log(msg);
            }

            Handlebars.registerHelper('ifvalue', function (conditional, options) {
                if (options.hash.value === conditional) {
                    return options.fn(this)
                } else {
                    return options.inverse(this);
                }
            });

            var oauth = {
                baseUrl: $.jStorage.get('baseURL', 'https://medusa.trmn.org'),
                access_token: $.jStorage.get('access_token', false),
                refresh_token: $.jStorage.get('refresh_token', false),
                client_id: 'medusamobile',

                reloadTokens: function () {
                    oauth.access_token = $.jStorage.get('access_token', false);
                    oauth.refresh_token = $.jStorage.get('refresh_token', false);
                },
                reloadConfig: function () {
                    oauth.baseUrl = $.jStorage.get('baseURL', 'https://medusa.trmn.org');
                    oauth.reloadTokens();
                },
                cache_buster: function () {
                    var currentTime = new Date();
                    return currentTime.getTime();
                },
                tryRefresh: function (msg, fn, alertMsg) {
                    alertMsg = (typeof alertMsg === 'undefined') ? false : alertMsg;

                    if ($.jStorage.get('refreshRetry', false) === false) {
                        console.log("Error getting " + msg + ", attempting to refresh token");
                        // First attempt, try to use the refresh token.  Let's tell that function where to return to
                        $.jStorage.set('refreshRetry', fn);
                        console.log('refreshRetry set to ' + $.jStorage.get('refreshRetry', false));
                        oauth.refreshToken();
                    } else {
                        if (alertMsg) {
                            alert(alertMsg);
                        }
                        showLogin();
                    }
                },
                getTisTig: function () {
                    spinner('Getting Time In Service / Time In Grade');

                    $.support.cors = true;

                    var time = $.ajax({
                        url: oauth.baseUrl + '/oauth/tistig?' + buildQueryParams(),
                        type: "GET",
                        crossDomain: true,
                        cache: false,
                        headers: buildHeaders(oauth.access_token),
                        async: true
                    });
                    time.done(function (data) {
                        var userInfo = $.jStorage.get('userInfo', false);

                        userInfo.tig = data.tig;
                        userInfo.tis = data.tis;

                        $.jStorage.set('userInfo', userInfo);
                        oauth.reloadConfig();
                        oauth.getScheduledEvents();
                    });

                    time.fail(function () {
                        var userInfo = $.jStorage.get('userInfo', false);
                        userInfo.tig = "Unknown";
                        userInfo.tis = "Unknown";

                        $.jStorage.set('userInfo', userInfo);
                        oauth.reloadConfig();
                        oauth.getScheduledEvents();
                    });
                },
                getUserInfo: function () {
                    spinner('Requesting User Info');
                    $.support.cors = true;

                    var profile = $.ajax({
                        url: oauth.baseUrl + '/oauth/user?' + buildQueryParams(),
                        type: "GET",
                        crossDomain: true,
                        cache: false,
                        headers: buildHeaders(oauth.access_token),
                        async: true
                    });
                    profile.done(function (data) {
                        $.jStorage.set('userInfo', data);
                        oauth.reloadConfig();
                        console.log('User info retrieved and saved');
                        console.log('User Info from server: ' + JSON.stringify(data));
                        oauth.getIdCard();
                        oauth.getTisTig();
                    });
                    profile.fail(function () {
                        oauth.tryRefresh('user information', 'getUserInfo', "I'm sorry, but I was unable to retrieve your information.  Please try again later.");
                    });
                },
                getScheduledEvents: function () {
                    spinner('Checking for scheduled events');
                    $.support.cors = true;
                    console.log('End point URL: ' + oauth.baseUrl + '/oauth/events?' + buildQueryParams() + '&tz=' + encodeURIComponent(jstz.determine().name()));
                    var events = $.ajax({
                        url: oauth.baseUrl + '/oauth/events?' + buildQueryParams() + '&tz=' + encodeURIComponent(jstz.determine().name()),
                        type: "GET",
                        crossDomain: true,
                        cache: false,
                        headers: buildHeaders(oauth.access_token),
                        async: true
                    });

                    events.done(function (data) {
                        $.jStorage.set('events', data.events);
                        console.log('Events retrieved.  Values: ' + JSON.stringify(data));
                        showProfile();
                    });

                    events.fail(function () {
                        $.jStorage.set('events', {});
                        showProfile();
                    });
                },
                getIdCard: function () {
                    spinner('Downloading ID Card');

                    window.requestFileSystem(window.PERSISTENT, 1 * 1024 * 1204, function (fs) {
                        console.log('File system open: ' + fs.name);

                        fs.root.getFile('idcard.png', {create: true, exclusive: false}, function (fileEntry) {
                            var uri = oauth.baseUrl + '/oauth/idcard?' + buildQueryParams();
                            console.log('Starting download of ' + uri);

                            var idcard = new FileTransfer();
                            console.log('FileTransfer Object instantiated');
                            var fileURL = fileEntry.toURL();

                            idcard.download(
                                uri,
                                fileURL,
                                function (entry) {
                                    console.log('Download complete: ' + entry.toURL());
                                    $.jStorage.set('idCardUri', entry.toURL());
                                    oauth.reloadConfig();
                                },
                                function (error) {
                                    console.log("download error source " + error.source);
                                    console.log("download error target " + error.target);
                                    console.log("upload error code" + error.code);
                                },
                                false,
                                {headers: buildHeaders(oauth.access_token)}
                            );

                        }, function () {
                            alert('There was an error attempting to save the file');
                            router.navigate('profile');
                        });

                    }, function () {
                        alert('There was an error attempting to save the file');
                        router.navigate('profile');
                    });

                },
                getLastUpdate: function () {
                    spinner('Checking for updates');

                    $.support.cors = true;

                    var updatecheck = $.ajax({
                        url: oauth.baseUrl + '/oauth/lastupdate?' + buildQueryParams(),
                        type: "GET",
                        crossDomain: true,
                        cache: false,
                        headers: buildHeaders(oauth.access_token),
                        async: true
                    });
                    updatecheck.done(function (data) {
                        console.log('Got last update timestamp: ' + JSON.stringify(data));
                        $.jStorage.deleteKey('refreshRetry'); // Last update timestamp received, clear the flag
                        $.jStorage.set('serverLastUpdated', data.lastUpdate);
                        oauth.reloadConfig();
                        var userInfo = $.jStorage.get('userInfo', false);

                        //oauth.getIdCard();

                        if (data.lastUpdate) {
                            // We got a timestamp, compare them
                            if (data.lastUpdate > userInfo.lastUpdate) {
                                console.log('Fetching updated user info');
                                // Newer info available on Medusa, grab it
                                oauth.getUserInfo();
                            } else {
                                oauth.getTisTig();
                            }
                        } else {
                            alert('We were unable to check if your information is up to date.  Some information shown may be out of date and some functions may not work or may not be available');
                            showProfile();
                        }
                    });
                    updatecheck.fail(function (jqXHR, textStatus) {
                        console.log('Update check failed');
                        oauth.tryRefresh('last update timestamp', 'getLastUpdate', false);
                        // showLogin();
                    });
                },
                refreshToken: function () {
                    spinner('Refreshing authentication');

                    $.support.cors = true;

                    var token = $.ajax({
                        url: oauth.baseUrl + '/oauth/token?nocache=' + oauth.cache_buster(),
                        type: "POST",
                        crossDomain: true,
                        cache: false,
                        headers: {"cache-control": "no-cache"},
                        data: 'grant_type=refresh_token&client_id=' + oauth.client_id + '&refresh_token=' + oauth.refresh_token,
                        async: true
                    });
                    token.done(function (data) {
                        $.jStorage.set('access_token', data.access_token);
                        console.log('Access token saved');
                        $.jStorage.set('refresh_token', data.refresh_token);
                        console.log("Refresh token saved.  Let's try again");
                        oauth.reloadConfig();
                        // Make sure we don't end up in a loop
                        returnFn = $.jStorage.get('refreshRetry', false);
                        $.jStorage.deleteKey('refreshRetry');
                        if (returnFn) {
                            console.log('refreshRetry: ' + returnFn);
                            oauth[returnFn]();
                        } else {
                            // Don't know who sent them here, so go back to the login page
                            showLogin();
                        }

                    });
                    token.fail(function () {
                        // Unable to get a refresh token, remove user info and return to login screen
                        showLogin();
                    });
                }
            };

            var api = {
                params: {},
                getCountryList: function (fn) {
                    api.params = {
                        spinnerMsg: 'Getting Countries',
                        apiUrl: '/api/country',
                        storageKey: 'countries',
                        successLogMsg: 'Country list saved',
                        failMsg: "I'm sorry, but I was unable to retrieve the list of countries.  Please try again later.",
                        failLogMsg: "Unable to get country list",
                        nextFunction: fn
                    };
                    api.makeApiCall();
                },
                getBranches: function () {
                    api.params = {
                        spinnerMsg: 'Getting Branches',
                        apiUrl: '/api/branch',
                        storageKey: 'branches',
                        successLogMsg: 'Branch list saved',
                        failMsg: "I'm sorry, but I was unable to retrieve the list of branches.  Please try again later.",
                        failLogMsg: "Unable to get branch list",
                        nextFunction: "getChapters"
                    };
                    api.makeApiCall();
                },
                getChapters: function () {
                    api.params = {
                        spinnerMsg: 'Getting Chapters',
                        apiUrl: '/api/chapter',
                        storageKey: 'chapters',
                        successLogMsg: 'Chapter list saved',
                        failMsg: "I'm sorry, but I was unable to retrieve the list of chapters.  Please try again later.",
                        failLogMsg: "Unable to get chapter list",
                        nextFunction: "showSignupForm"
                    };
                    api.makeApiCall();
                },
                checkEmail: function (email_address) {
                    api.params = {
                        spinnerMsg: 'Checking if your email address is in use',
                        apiUrl: '/api/checkemail/' + email_address,
                        storageKey: 'checkemail',
                        successLogMsg: 'Results saved',
                        failMsg: "I'm sorry, but I was unable to check if your email address is in use.  Please try again later.",
                        failLogMsg: "Unable to check if email address in use",
                        nextFunction: false
                    };
                    api.makeApiCall();
                },
                signupReady: function () {
                    $.jStorage.set('signupReady', true);
                    api.showSignupForm();
                },
                makeApiCall: function (params) {
                    spinner(api.params.spinnerMsg);
                    $.support.cors = true;

                    var apiCall = $.ajax({
                        url: oauth.baseUrl + api.params.apiUrl,
                        type: "GET",
                        crossDomain: true,
                        cache: false,
                        headers: {"cache-control": "no-cache"},
                        async: true
                    });
                    apiCall.done(function (data) {
                        $.jStorage.set(api.params.storageKey, data);
                        console.log(api.params.successLogMsg);
                        if (api.params.nextFunction) {
                            api[api.params.nextFunction]();
                        }
                    });
                    apiCall.fail(function () {
                        SpinnerPlugin.activityStop();
                        alert(api.params.failMsg);
                        router.navigate('home');
                    });
                },
                showEditForm: function () {
                    var countries = $.jStorage.get('countries', false);
                    var userInfo = $.jStorage.get('userInfo', false);

                    if (countries && userInfo) {
                        var logoTpl = medusa.templates.logo({imgClass: 'trmn-seal'});
                        var navTpl = medusa.templates.nav({editIsActive: true, loggedIn: checkIfLoggedIn()});
                        var signupTpl = medusa.templates.signup({
                            'countries': countries,
                            'formId': 'editUser',
                            'userInfo': userInfo
                        });
                        updateScreen(navTpl + logoTpl + signupTpl);

                        var $select = $('.selectpicker').selectize();
                        var countries = $select[1].selectize;
                        countries.setValue(userInfo.country, true);

                        $('#editUser').multipage({
                            enhanceNavigation: false,
                            submitLabel: "Save",
                            validationFunction: function (page) {
                                var nf = $('fieldset.active div :required').length;
                                var vf = $('fieldset.active div.has-success').length;
                                console.log('Edit: nf = ' + nf + " vf = " + vf + " page = " + page);

                                return vf >= nf;
                            }
                        });

                        $('#editUser').submit(function (e) {
                            if (e.isDefaultPrevented()) {
                                return false;
                            } else {
                                e.preventDefault();
                                spinner('Updating profile');
                                var url = oauth.baseUrl + '/oauth/updateuser?' + buildQueryParams();

                                console.log('Posting profile update to ' + url);
                                var updateProfile = $.ajax({
                                    url: url,
                                    type: "POST",
                                    crossDomain: true,
                                    cache: false,
                                    headers: buildHeaders(oauth.access_token),
                                    async: true,
                                    data: $('#editUser').serialize()
                                });

                                updateProfile.done(function () {
                                    console.log('Profile updated');
                                    oauth.getUserInfo(); // refresh userinfo
                                });

                                updateProfile.fail(function () {
                                    SpinnerPlugin.activityStop();
                                    console.log('Profile update failed');
                                    alert('There was a problem updating your profile.  Please try again later.');
                                    router.navigate('home');
                                });
                            }
                        });

                        $('#editUser').validator();
                    }

                },
                showSignupForm: function () {
                    spinner('Please wait...');

                    var countries = $.jStorage.get('countries', false);
                    var branches = $.jStorage.get('branches', false);
                    var chapters = $.extend({"": "Select a Chapter"}, $.jStorage.get('chapters'));

                    if (countries && branches && chapters) {
                        var logoTpl = medusa.templates.logo({imgClass: 'trmn-seal'});
                        var navTpl = medusa.templates.nav({signupIsActive: true, loggedIn: checkIfLoggedIn()});
                        var signupTpl = medusa.templates.signup({
                            'countries': countries,
                            'branches': branches,
                            'chapters': chapters,
                            'formId': 'signup'
                        });
                        updateScreen(navTpl + logoTpl + signupTpl);
                        $('.selectpicker').selectize();

                        $('#signup').multipage({
                            enhanceNavigation: false,
                            submitLabel: "Signup!",
                            validationFunction: function (page) {
                                var nf = $('fieldset.active div :required').length;
                                var vf = $('fieldset.active div.has-success').length;
                                console.log('Signup: nf = ' + nf + " vf = " + vf + " page = " + page);

                                if (page === 1) {

                                    spinner('Please wait while I check to see if your email address is available.')

                                    $.jStorage.deleteKey('checkemail');

                                    $.support.cors = true;

                                    var url = oauth.baseUrl + '/api/checkemail/' + $('#email_address').val();
                                    console.log('Attempting to connect to ' + url);

                                    var apiCall = $.ajax({
                                        url: url,
                                        type: "GET",
                                        crossDomain: true,
                                        cache: false,
                                        headers: buildHeaders(oauth.access_token),
                                        async: true
                                    });

                                    apiCall.done(function (data) {
                                        console.log('Email check complete: ' + JSON.stringify(data));

                                        SpinnerPlugin.activityStop();

                                        if (data.available && vf >= nf) {
                                            $('#signup').gotopage(2);
                                        } else {
                                            alert("Your email address is currently in use.  Please use a different email address");
                                        }
                                    });

                                    apiCall.fail(function () {
                                        SpinnerPlugin.activityStop();
                                        alert("I was unable to check your email address.  Please try again later");
                                        return false;
                                    });
                                } else {
                                    return vf >= nf;
                                }
                            }
                        });

                        $('#signup').submit(function (e) {
                            spinner('Sending membership application');

                            var newUser = $.ajax({
                                url: oauth.baseUrl + '/apply',
                                type: "POST",
                                crossDomain: true,
                                cache: false,
                                headers: {"cache-control": "no-cache"},
                                async: true,
                                data: $('#signup').serialize() + "&mobile=1"
                            });

                            newUser.done(function () {
                                router.navigate('thankyou');
                            });

                            newUser.fail(function () {
                                SpinnerPlugin.activityStop();
                                alert('There was a problem submitting your membership application.  Please try again later.');
                                router.navigate('home');
                            });
                        });

                        $('#signup').validator();

                    } else {
                        alert('There was a problem with the signup form, please try again later.');
                        router.navigate('home');
                    }

                }
            };

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

                window.scanConfirm = function (message) {
                    navigator.notification.confirm(
                        message,
                        onScanConfirm,
                        'MEDUSA Mobile',
                        ['Yes', 'No']
                    )
                }

            }

            function onConfirm(buttonIndex) {
                if (buttonIndex == 1) {
                    $.jStorage.set('baseURL', $('#server-url').val().toLowerCase());
                    oauth.reloadConfig();
                    router.navigate('home');
                    router.updatePageLinks();
                } else {
                    return false;
                }
            }

            function onScanConfirm(buttonIndex) {
                if (buttonIndex == 1) {
                    scan();
                } else {
                    $.jStorage.deleteKey('event_id');
                    router.updatePageLinks();
                    router.navigate('home');
                }
            }

            function scan() {
                var event_id = $.jStorage.get('event_id', null);

                if (!event_id) {
                    alert('Invalid Event ID, unable to check members in');
                    router.updatePageLinks();
                    router.navigate('home');
                }

                cordova.plugins.barcodeScanner.scan(
                    function (result) {

                        var checkin = $.ajax({
                            url: oauth.baseUrl + '/oauth/checkin?' + buildQueryParams() + '&tz=' + encodeURIComponent(jstz.determine().name()) + '&event=' + event_id + '&member=' + result.text,
                            type: "GET",
                            crossDomain: true,
                            cache: false,
                            headers: buildHeaders(oauth.access_token),
                            async: true
                        });

                        checkin.done(function (data) {
                            if (data.success) {
                                var msg = data.success;
                            } else {
                                var msg = data.error;
                            }

                            scanConfirm(msg + "\n\nScan another member?");
                        });

                        checkin.fail(function (error) {
                            scanConfirm(error + "\n\nScan another member?");
                        });
                    },
                    function (error) {
                        alert("Scanning failed: " + error);
                    },
                    {
                        "preferFrontCamera": false, // iOS and Android
                        "showFlipCameraButton": false, // iOS and Android
                        "prompt": "Place the members barcode inside the scan area", // supported on Android only
                        "formats": "QR_CODE" // default: all but PDF_417 and RSS_EXPANDED
                    }
                );
            }

            spinner('Please Wait');

            var root = null;
            var useHash = true;
            var hash = '#';
            var router = new Navigo(root, useHash, hash);
            var logoTpl = medusa.templates.logo({imgClass: 'project-medusa'});

            function checkIfLoggedIn() {
                var userInfo = $.jStorage.get('userInfo', false);
                var access_token = $.jStorage.get('access_token', false);

                if (userInfo && access_token) {
                    return true;
                } else {
                    return false;
                }
            }

            router.on({
                'about': function () {
                    console.log('About clicked');
                    cordova.getAppVersion.getVersionNumber().then(function (version) {
                        var AppVersion = version;
                        var navTpl = medusa.templates.nav({
                            aboutIsActive: true,
                            loggedIn: checkIfLoggedIn(),
                            events: $.jStorage.get('events', [])
                        });
                        var aboutTpl = medusa.templates.about({version: AppVersion});
                        updateScreen(navTpl + logoTpl + aboutTpl);
                    });
                },
                'testers': function () {
                    console.log('Testers clicked');
                    var navTpl = medusa.templates.nav({
                        aboutIsActive: true,
                        loggedIn: checkIfLoggedIn(),
                        events: $.jStorage.get('events', [])
                    });
                    var testersTpl = medusa.templates.testers();
                    updateScreen(navTpl + testersTpl);
                },
                'setup': function () {
                    console.log('Setup clicked');
                    var medusaURL = $.jStorage.get('baseURL', 'https://medusa.trmn.org');
                    var navTpl = medusa.templates.nav({
                        setupIsActive: true,
                        loggedIn: checkIfLoggedIn(),
                        events: $.jStorage.get('events', [])
                    });
                    var config = {url: medusaURL};

                    if (medusaURL == 'https://medusa.trmn.org') {
                        config.url = null;
                    }

                    var setupTpl = medusa.templates.setup(config);
                    updateScreen(navTpl + logoTpl + setupTpl);
                },
                'scan': function () {
                    scan();
                },
                'profile': function () {
                    // Check if there's been an update
                    console.log("Check if there is newer information");

                    oauth.getLastUpdate();
                },
                'checkin/:event_id': function (params) {
                    $.jStorage.set('event_id', params.event_id);
                    scan();
                },
                'logout': function () {
                    console.log('Logout clicked');
                    $.jStorage.deleteKey('userInfo');
                    $.jStorage.deleteKey('idCardUri');
                    console.log('Deleting tokens in logout function');
                    $.jStorage.deleteKey('access_token');
                    $.jStorage.deleteKey('refresh_token');
                    $.jStorage.deleteKey('countries');

                    window.requestFileSystem(window.PERSISTENT, 1 * 1024 * 1204, function (fs) {
                        console.log('File system open: ' + fs.name);

                        fs.root.getFile('idcard.png', {create: false, exclusive: false}, function (fileEntry) {
                            fileEntry.remove(function () {
                                console.log('ID card deleted');
                            }, function (error) {
                                console.log('Error deleting ID Card: ' + error.code);
                            });
                        });
                    });

                    router.navigate('home');
                },
                'refresh': function () {
                    console.log('Refresh clicked');
                    oauth.getUserInfo();
                },
                'debug': function () {
                    console.log('Debug clicked');
                    var navTpl = medusa.templates.nav({
                        debugIsActive: true,
                        loggedIn: checkIfLoggedIn(),
                        events: $.jStorage.get('events', [])
                    });
                    var debugInfo = {
                        systemInfo: {
                            baseUrl: oauth.baseUrl,
                            idCardUri: $.jStorage.get('idCardUri', false),
                            access_token: oauth.access_token,
                            refresh_token: oauth.refresh_token,
                            client_id: oauth.client_id,
                            savedUserName: $.jStorage.get('username', false)
                        },
                        userInfo: $.jStorage.get('userInfo', false),
                        events: JSON.stringify($.jStorage.get('events', []))
                    };

                    var debugTpl = medusa.templates.debug({debugInfo: debugInfo});
                    updateScreen(navTpl + logoTpl + debugTpl);
                },
                'signup': function () {
                    api.getCountryList('getBranches');
                },
                'edit': function () {
                    api.getCountryList('showEditForm');
                },
                'thankyou': function () {
                    var logoTpl = medusa.templates.logo({imgClass: 'trmn-seal'});
                    var navTpl = medusa.templates.nav({
                        signupIsActive: true,
                        loggedIn: checkIfLoggedIn(),
                        events: $.jStorage.get('events', [])
                    });
                    var tyTpl = medusa.templates.thankyou();
                    updateScreen(navTpl + logoTpl + tyTpl);
                },
                'idcard': function () {
                    var idCardUri = $.jStorage.get('idCardUri', false);

                    if (!idCardUri) {
                        // No ID Card saved, fetch it
                        oauth.getIdCard();

                        idCardUri = $.jStorage.get('idCardUri', false);

                        if (!idCardUri) {
                            // If we still don't have a local URI for the idcard, something's wrong
                            alert('Unable to show ID card at this time.');
                            router.navigate('profile');
                        }
                    }
                    var idCardTpl = medusa.templates.idcard({imgSrc: idCardUri});
                    alert('Tap the ID Card to return to your profile');
                    updateScreen(idCardTpl);
                },
                '*': function () {

                    var navTpl = medusa.templates.nav({homeIsActive: true, loggedIn: checkIfLoggedIn()});
                    if (checkIfLoggedIn()) {
                        router.navigate('profile');
                        return false;
                    } else {
                        var usernmame = $.jStorage.get('username', '');
                        var bodyTpl = medusa.templates.login({'username': usernmame});

                        updateScreen(navTpl + logoTpl + bodyTpl);

                        $('#login-form').validator();
                        console.log('Validator turned on');
                        $('#login-form').validator('update');
                        console.log('Validator updated');

                        bindLogin();
                    }
                }
            }).resolve();

            function updateScreen(content) {
                $('body').html(content);
                router.updatePageLinks();
                SpinnerPlugin.activityStop();
            }

            function showSignUp() {
                var countries = $.jStorage.get('countries', false);
                var logoTpl = medusa.templates.logo({imgClass: 'trmn-seal'});
                var navTpl = medusa.templates.nav({
                    signupIsActive: true,
                    loggedIn: checkIfLoggedIn(),
                    events: $.jStorage.get('events', [])
                });
                var signupTpl = medusa.templates.signup({'countries': countries});
                updateScreen(navTpl + logoTpl + signupTpl);
            }

            function showLogin() {
                $.jStorage.deleteKey('userInfo');
                console.log('Deleting tokens in showLogin()');
                $.jStorage.deleteKey('access_token');
                $.jStorage.deleteKey('refresh_token');
                router.navigate('login');
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

            function showProfile() {
                var navTpl = medusa.templates.nav({
                    profileIsActive: true,
                    loggedIn: checkIfLoggedIn(),
                    events: $.jStorage.get('events', [])
                });
                var userInfo = $.jStorage.get('userInfo', false);
                console.log('User Info from storage: ' + JSON.stringify(userInfo));
                var photoTpl = '';
                var baseUrl = $.jStorage.get('baseURL', 'https://medusa.trmn.org');

                if (userInfo.filePhoto) {
                    var path = baseUrl + userInfo.filePhoto;
                    photoTpl = medusa.templates.photo({imgSrc: path});
                }
                userInfo.assignment = getAssignments();
                var memberinfoTpl = medusa.templates.memberinfo({
                    userinfo: userInfo,
                    baseurl: baseUrl
                });
                var bodyTpl = photoTpl + memberinfoTpl;

                updateScreen(navTpl + bodyTpl);
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
                        spinner('Authenticating');
                        console.log('Deleting tokens after login button clicked');
                        $.jStorage.deleteKey('access_token');
                        $.jStorage.deleteKey('refresh_token');

                        var username = $('#email-address').val();
                        var password = $('#password').val();

                        $.jStorage.set('username', username);
                        oauth.reloadConfig();

                        $.support.cors = true;

                        var currentTime = new Date();
                        var n = currentTime.getTime();

                        var login = $.ajax({
                            url: oauth.baseUrl + '/oauth/token?nocache=' + n,
                            type: "POST",
                            crossDomain: true,
                            cache: false,
                            headers: {"cache-control": "no-cache"},
                            data: 'grant_type=password&username=' + username + '&password=' + password + '&client_id=' + oauth.client_id,
                            async: true
                        });

                        login.done(function (data) {
                            SpinnerPlugin.activityStop();
                            $.jStorage.set('access_token', data.access_token);
                            console.log('Access token saved');
                            $.jStorage.set('refresh_token', data.refresh_token);
                            console.log('Refresh token saved');
                            oauth.reloadConfig();
                            oauth.reloadTokens();
                            oauth.getUserInfo();
                        });

                        login.fail(function (jqXHR, textStatus) {
                            SpinnerPlugin.activityStop();
                            alert("Login failed, please try again.");
                            router.navigate('login');
                        });
                    }
                });
            }

            function buildHeaders(token) {
                // Build the appropriate headers depending on which version of MEDUSA is being used
                // {"cache-control": "no-cache", "Authorization": "Bearer " + oauth.access_token},

                var headers = {"cache-control": "no-cache"};

                if (token.length > 100) {
                    console.log('Adding Authorization header');
                    var headers = {"cache-control": "no-cache", "Authorization": "Bearer " + token};
                }

                return headers;

            }

            function buildQueryParams() {
                // Build the oauth query params depending on what version of MEDUSA is being used
                // oauth.access_token + "&client_id=" + oauth.client_id + '&nocache=' + oauth.cache_buster()

                var params = "client_id=" + oauth.client_id + '&nocache=' + oauth.cache_buster();

                if (oauth.access_token.length < 100) {
                    console.log('Adding access_token to query params');
                    params = "access_token=" + oauth.access_token + "&" + params;
                }

                return params;

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

