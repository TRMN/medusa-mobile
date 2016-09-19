this["medusa"] = this["medusa"] || {};
this["medusa"]["templates"] = this["medusa"]["templates"] || {};
this["medusa"]["templates"]["about"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-xs-12\">\n            <h1 class=\"medusa-yellow text-center\">MEDUSA Mobile</h1>\n            <h1 class=\"medusa-yellow text-center\">Version "
    + container.escapeExpression(((helper = (helper = helpers.version || (depth0 != null ? depth0.version : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"version","hash":{},"data":data}) : helper)))
    + "</h1>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xs-12\">\n            <p>MEDUSA Mobile is copyright &copy; 2016 The Royal Manticoran Navy: The Official Honor Harrington Fan Association, Inc. Some Rights Reserved. Honor Harrington and all related materials are &copy; David Weber.</p>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xs-12\">\n            <h2 class=\"text-center medusa-yellow\">MEDUSA Mobile Development Team</h2>\n            <address>Admiral of the Green Sir Robert W. Bulkeley, Jr, KSK,SC, CGM, DSO<br />\n            Fourth Space Lord</address>\n            <p>Surgeon Commodore Sir David Weiner, KSK, GCE<br/>\n            Deputy Fourth Space Lord</p>\n            <p>Captain (JG) Erik Plossl<br />\n            Director of Software Development</p>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xs-12\">\n            <h2 class=\"text-center medusa-yellow\">Special thanks to:</h2>\n            <p>Brian Corchiolo (<a href=\"http://www.bpccreative.com\" target=\"_system\">www.bpccreative.com</a>) and Dougal Campbell (<a href=\"http://dougal.us\" target=\"_system\">dougal.us</a>) for their help hamering this code into shape.</p>\n            <p>A very special thanks to John M. Wargo (<a href=\"http://www.johnwargobooks.com\" target=\"_system\">www.johnwargobooks.com</a>) for his excellent books (<em>Apache Cordova 4 Programming</em> and <em>Apache Cordova API Cookbook</em>) as well as his willingness to answer stupid questions from a new mobile developer.</p>\n        </div>\n    </div>\n</div>";
},"useData":true});
this["medusa"]["templates"]["debug"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "        <div class=\"row\">\n            <div class=\"col-xs-12 text-center medusa-yellow\">\n                "
    + alias2(alias1(blockParams[0][1], depth0))
    + ":\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-xs-12 text-center\">\n                "
    + alias2(alias1(blockParams[0][0], depth0))
    + "\n            </div>\n        </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-xs-12\">\n            <h1 class=\"medusa-yellow text-center\">MEDUSA Mobile Debug Info</h1>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xs-12\">\n            <h3 class=\"medusa-yellow text-center\">System Information</h3>\n        </div>\n    </div>\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.debugInfo : depth0)) != null ? stack1.systemInfo : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 2, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "\n    <div class=\"row\">\n        <div class=\"col-xs-12\">\n            <h3 class=\"medusa-yellow text-center\">User Information</h3>\n        </div>\n    </div>\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.debugInfo : depth0)) != null ? stack1.userInfo : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 2, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "</div>";
},"useData":true,"useBlockParams":true});
this["medusa"]["templates"]["idcard"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"navbar navbar-default navbar-fixed-top\">\n    <a href=\"profile\" data-navigo><img id=\"idcard\" src=\""
    + container.escapeExpression(((helper = (helper = helpers.imgSrc || (depth0 != null ? depth0.imgSrc : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"imgSrc","hash":{},"data":data}) : helper)))
    + "\"></a>\n</div>";
},"useData":true});
this["medusa"]["templates"]["login"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"container-fluid\">\n    <form data-toggle=\"validator\" role=\"form\" id=\"login-form\">\n        <div class=\"form-group has-feedback\">\n            <div class=\"input-group\">\n                <span class=\"input-group-addon fi-at-sign\" id=\"email-addon\"></span>\n                <input type=\"email\" class=\"form-control\" placeholder=\"Email address\" aria-describedby=\"email-addon\"\n                       id=\"email-address\" data-error=\"Invalid email address\" value=\""
    + container.escapeExpression(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"username","hash":{},"data":data}) : helper)))
    + "\" required>\n                <span class=\"glyphicon form-control-feedback\" aria-hidden=\"true\"></span>\n            </div>\n        </div>\n\n        <br/>\n        <div class=\"form-group has-feedback\">\n            <div class=\"input-group\">\n                <span class=\"input-group-addon fi-lock\" id=\"password-addon\"></span>\n                <input type=\"password\" class=\"form-control\" placeholder=\"Password\" aria-describedby=\"password-addon\"\n                       id=\"password\" data-error=\"Please enter your password\" required>\n                <span class=\"glyphicon form-control-feedback\" aria-hidden=\"true\"></span>\n            </div>\n        </div>\n        <br/>\n\n        <button type=\"submit\" class=\"btn btn-default center-block\" id=\"signin-button\"><span class=\"fi-unlock\"></span>\n            Sign in\n        </button>\n        <br /><br />\n        <h4 class=\"text-center\"><em>Not a member yet?  Register <a href=\"signup\" data-navigo>Here!</a></em></h4>\n    </form>\n</div>\n";
},"useData":true});
this["medusa"]["templates"]["logo"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-xs-12\">\n            <img class=\"img-responsive center-block "
    + container.escapeExpression(((helper = (helper = helpers.imgClass || (depth0 != null ? depth0.imgClass : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"imgClass","hash":{},"data":data}) : helper)))
    + "\">\n        </div>\n    </div>\n</div>\n<br/>";
},"useData":true});
this["medusa"]["templates"]["memberinfo"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                        <h4 class=\"medusa-yellow text-center\">Additional Assignments</h4>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.userinfo : depth0)) != null ? stack1.assignment : stack1),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.unless.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.primary : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "                                <div class=\"row\">\n                                    <div class=\"col-xs-12 text-center\">\n                                        <span>"
    + alias2(alias1((depth0 != null ? depth0.chapter_name : depth0), depth0))
    + ", "
    + alias2(alias1((depth0 != null ? depth0.billet : depth0), depth0))
    + "</span>\n                                    </div>\n                                </div>\n";
},"5":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.userinfo : depth0)) != null ? stack1.peerages : stack1),{"name":"each","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "                            <div class=\"row\">\n                                <div class=\"col-xs-12\">\n"
    + ((stack1 = (helpers.ifvalue || (depth0 && depth0.ifvalue) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.code : depth0),{"name":"ifvalue","hash":{"value":"K"},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.program(9, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-xs-12 text-center\">\n                                    "
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.fullTitle : depth0), depth0))
    + "\n                                </div>\n                            </div>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "                                        <img id=\""
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.path : depth0), depth0))
    + "\"\n                                         class=\"center-block img-responsive\">\n";
},"9":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "                                        <img src=\""
    + alias2(alias1((depths[1] != null ? depths[1].baseurl : depths[1]), depth0))
    + alias2(alias1((depth0 != null ? depth0.path : depth0), depth0))
    + "\"\n                                         class=\"center-block img-responsive filePhoto\">\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "                        <div class=\"row\">\n                            <div class=\"col-xs-12\">\n                                None\n                            </div>\n                        </div>\n";
},"13":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1;

  return "                        <div class=\"panel-group\" id=\"cwAccordian\">\n                            <div class=\"panel panel-default\">\n\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.userinfo : depth0)) != null ? stack1.exams : stack1),{"name":"each","hash":{},"fn":container.program(14, data, 2, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "                            </div>\n                        </div>\n";
},"14":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {};

  return "                                    <div class=\"panel-heading\" role=\"tab\" id=\""
    + alias2(alias1(blockParams[0][1], depth0))
    + "Heading\">\n                                        <h4 class=\"panel-title small\">\n                                            <a role=\"button\" data-toggle=\"collapse\" data-parent=\"#cwAccordian\"\n                                               href=\"#"
    + alias2(alias1(blockParams[0][1], depth0))
    + "\"\n                                               aria-expanded=\"true\" aria-controls=\""
    + alias2(alias1(blockParams[0][1], depth0))
    + "\">\n                                                "
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? stack1.label : stack1), depth0))
    + " "
    + ((stack1 = helpers["if"].call(alias3,((stack1 = blockParams[0][0]) != null ? stack1["new"] : stack1),{"name":"if","hash":{},"fn":container.program(15, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "\n                                            </a>\n                                        </h4>\n                                    </div>\n\n                                    <div id=\""
    + alias2(alias1(blockParams[0][1], depth0))
    + "\" class=\"panel-collapse collapse\" role=\"tabpanel\"\n                                         aria-labelledby=\""
    + alias2(alias1(blockParams[0][1], depth0))
    + "Heading\">\n                                        <div class=\"panel-body\">\n"
    + ((stack1 = helpers.each.call(alias3,((stack1 = blockParams[0][0]) != null ? stack1.examlist : stack1),{"name":"each","hash":{},"fn":container.program(17, data, 2, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "                                        </div>\n                                    </div>\n\n";
},"15":function(container,depth0,helpers,partials,data) {
    return "<span\n                                                    class=\"fi-burst-new size-30\"></span>";
},"17":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "                                                <div class=\"row\">\n                                                    <div class=\"col-xs-12 text-center\">\n                                                        "
    + alias2(alias1(blockParams[0][1], depth0))
    + "\n                                                    </div>\n                                                </div>\n                                                <div class=\"row\">\n                                                    <div class=\"col-xs-12 text-center\">\n                                                        "
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? stack1.name : stack1), depth0))
    + "\n                                                    </div>\n                                                </div>\n                                                <div class=\"row\">\n                                                    <div class=\"col-xs-12 text-center\">\n                                                        "
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? stack1.score : stack1), depth0))
    + " "
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? stack1.date : stack1), depth0))
    + "\n                                                    </div>\n                                                </div>\n                                                <div class=\"row\">\n                                                    <div class=\"col-xs-12\">\n                                                        <hr>\n                                                    </div>\n                                                </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {};

  return "<div class=\"container-fluid\" id=\"profile\">\n    <div class=\"row\">\n        <div class=\"col-xs-12 text-center\">\n            <h4 class=\"medusa-yellow\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.userinfo : depth0)) != null ? stack1.greeting : stack1), depth0))
    + "</h4>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xs-12 text-center\">\n            <span>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.userinfo : depth0)) != null ? stack1.member_id : stack1), depth0))
    + "</span>\n        </div>\n    </div>\n\n    <div id=\"accordian\" class=\"panel-group\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\" role=\"tab\" id=\"headingAssignments\">\n                <h4 class=\"panel-title\"><a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordian\"\n                                           href=\"#assignments\" aria-expanded=\"true\" aria-controls=\"#assignments\">Assignments</a>\n                </h4>\n            </div>\n            <div id=\"assignments\" class=\"panel-collapse collapse in\" role=\"tabpanel\" aria-labelledby=\"headingAssignments\">\n                <div class=\"panel-body\">\n\n                    <div class=\"row\">\n                        <div class=\"col-xs-12\">\n                            <img class=\"img-responsive center-block filePhoto\" id=\"branch"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.userinfo : depth0)) != null ? stack1.branch : stack1), depth0))
    + "\">\n                        </div>\n                    </div>\n\n                    <h4 class=\"medusa-yellow text-center\">Primary Assignment</h4>\n                    <div class=\"row\">\n                        <div class=\"col-xs-12 text-center\">\n                            <span>"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.userinfo : depth0)) != null ? stack1.assignment : stack1)) != null ? stack1.primary : stack1)) != null ? stack1.billet : stack1), depth0))
    + "</span>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-xs-12 text-center\">\n                            <span>"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.userinfo : depth0)) != null ? stack1.assignment : stack1)) != null ? stack1.primary : stack1)) != null ? stack1.chapter_name : stack1), depth0))
    + "</span>\n                        </div>\n                    </div>\n\n"
    + ((stack1 = helpers["if"].call(alias3,((stack1 = ((stack1 = (depth0 != null ? depth0.userinfo : depth0)) != null ? stack1.assignment : stack1)) != null ? stack1.secondary : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "                </div>\n            </div>\n\n            <div class=\"panel-heading\" role=\"tab\" id=\"headingPeerages\">\n                <h4 class=\"panel-title\"><a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordian\"\n                                           href=\"#peerages\" aria-expanded=\"true\" aria-controls=\"#peerages\">Peerages &\n                    Knighthoods</a>\n                </h4>\n            </div>\n            <div id=\"peerages\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingAssignments\">\n                <div class=\"panel-body\">\n"
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.userinfo : depth0)) != null ? stack1.peerages : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.program(11, data, 0, blockParams, depths),"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "                </div>\n            </div>\n\n            <div class=\"panel-heading\" role=\"tab\" id=\"headingCoursework\">\n                <h4 class=\"panel-title\"><a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordian\"\n                                           href=\"#coursework\" aria-expanded=\"true\"\n                                           aria-controls=\"#coursework\">Coursework</a>\n                </h4>\n            </div>\n\n            <div id=\"coursework\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingCoursework\">\n                <div class=\"panel-body\">\n                    <!-- Start of course work -->\n"
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.userinfo : depth0)) != null ? stack1.exams : stack1),{"name":"if","hash":{},"fn":container.program(13, data, 0, blockParams, depths),"inverse":container.program(11, data, 0, blockParams, depths),"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "                    <!-- end of coursework -->\n                </div>\n            </div>\n\n            <div class=\"panel-heading\" role=\"tab\" id=\"headingTisTig\">\n                <h4 class=\"panel-title\"><a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordian\"\n                                           href=\"#tistig\" aria-expanded=\"true\" aria-controls=\"#tistig\">Time In\n                    Service / Time in Grade</a>\n                </h4>\n            </div>\n            <div id=\"tistig\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingTisTig\">\n                <div class=\"panel-body\">\n                    <br/>\n                    <div class=\"row\">\n                        <div class=\"col-xs-6 text-left\">\n                            <span><strong>Time In Grade:</strong></span>\n                        </div>\n                        <div class=\"col-xs-6 text-left\">\n                            <span id=\"tig\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.userinfo : depth0)) != null ? stack1.tig : stack1), depth0))
    + "</span>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-xs-6 text-left\">\n                            <span><strong>Time In Service:</strong></span>\n                        </div>\n                        <div class=\"col-xs-6 text-left\">\n                            <span id=\"tis\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.userinfo : depth0)) != null ? stack1.tis : stack1), depth0))
    + "</span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
},"useData":true,"useDepths":true,"useBlockParams":true});
this["medusa"]["templates"]["nav"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " class=\"active\"";
},"3":function(container,depth0,helpers,partials,data) {
    return "Home";
},"5":function(container,depth0,helpers,partials,data) {
    return "Login";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                    <li"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.idCardIsActive : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "><a href=\"idcard\" data-navigo>ID Card</a></li>\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "<li><a href=\"refresh\" data-navigo>Reload User Info</a></li>";
},"11":function(container,depth0,helpers,partials,data) {
    return "<li><a href=\"logout\" data-navigo>Logout</a></li>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<nav role=\"navigation\" class=\"navbar navbar-default navbar-fixed-top navbar-inverse\">\n    <div class=\"container\">\n        <!-- Brand and toggle get grouped for better mobile display -->\n        <div class=\"navbar-header\">\n            <button type=\"button\" data-target=\"#navbarCollapse\" data-toggle=\"collapse\" class=\"navbar-toggle\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n        </div>\n        <!-- Collection of nav links and other content for toggling -->\n        <div id=\"navbarCollapse\" class=\"collapse navbar-collapse\">\n            <ul class=\"nav navbar-nav\">\n                <li"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.homeIsActive : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.profileIsActive : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "><a\n                        href=\"home\" data-navigo>"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.profileIsActive : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "</a></li>\n                <li"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.signupIsActive : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "><a href=\"signup\" data-navigo>New Member Signup</a></li>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.loggedIn : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                <li class=\"dropdown\">\n                    <a id=\"help\" href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\"\n                       aria-expanded=\"false\"><span class=\"fi-arrow-down\"></span> Help</a>\n                    <ul class=\"dropdown-menu\">\n                        <li"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.aboutIsActive : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "><a href=\"about\" data-navigo>About</a></li>\n                        <li"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.setupIsActive : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "><a href=\"setup\" data-navigo>Setup</a></li>\n                        "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.loggedIn : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n                        <li"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.debugIsActive : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "><a href=\"debug\" data-navigo>Show Debug info</a>\n                        </li>\n                    </ul>\n                </li>\n                "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.loggedIn : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n            </ul>\n        </div>\n    </div>\n</nav>";
},"useData":true});
this["medusa"]["templates"]["photo"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-xs-12\">\n            <img src=\""
    + container.escapeExpression(((helper = (helper = helpers.imgSrc || (depth0 != null ? depth0.imgSrc : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"imgSrc","hash":{},"data":data}) : helper)))
    + "\" class=\"center-block img-responsive img-circle filePhoto\">\n        </div>\n    </div>\n</div>";
},"useData":true});
this["medusa"]["templates"]["setup"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"container-fluid\">\n    <h1 class=\"medusa-yellow text-center\">MEDUSA Server URL</h1>\n    <p><strong><span class=\"alert-warning\">WARNING!</span> Do not change this entry unless you know what you are doing or have\n    been instructed to do so by a member of the MEDUSA Mobile Development Team.  Changing the URL of the MEDUSA server\n    to an incorrect value will prevent MEDUSA Mobile from working!</strong></p>\n\n    <div class=\"input-group\">\n        <span class=\"input-group-addon fi-home\" id=\"server-addon\"></span>\n        <input type=\"text\" class=\"form-control\" placeholder=\"https://medusa.trmn.org\" aria-describedby=\"server-addon\" id=\"server-url\" value=\""
    + container.escapeExpression(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"url","hash":{},"data":data}) : helper)))
    + "\">\n    </div>\n    <br />\n    <button type=\"submit\" id=\"save-setup\" class=\"btn btn-default center-block\"><span class=\"fi-save\"></span> Save</button>\n</div>";
},"useData":true});
this["medusa"]["templates"]["signup"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "                            <option value=\""
    + alias2(alias1(blockParams[0][1], depth0))
    + "\">"
    + alias2(alias1(blockParams[0][0], depth0))
    + "</option>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<h2>Membership Application</h2>\n<div class=\"container-fluid\">\n    <form id=\"signup\" data-toggle=\"validator\" class=\"form-horizontal\">\n        <fieldset>\n            <legend>Basic Information</legend>\n            <div class=\"form-group has-feedback\">\n                <div class=\"input-group\">\n                    <span class=\"input-group-addon fi-torso\" id=\"firstname-addon\"></span>\n                    <input type=\"text\" class=\"form-control required\" placeholder=\"First Name\"\n                           aria-describedby=\"firstname-addon\"\n                           name=\"first_name\" data-error=\"First Name is required\" required data-minLength=\"2\">\n                    <span class=\"glyphicon form-control-feedback\" aria-hidden=\"true\"></span>\n                </div>\n                <div class=\"help-block with-errors\"></div>\n            </div>\n            <div class=\"form-group has-feedback\">\n                <div class=\"input-group\">\n                    <span class=\"input-group-addon fi-torso\" id=\"middlename-addon\"></span>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Middle Name\"\n                           aria-describedby=\"middlename-addon\"\n                           name=\"middle_name\">\n                    <span class=\"glyphicon form-control-feedback\" aria-hidden=\"true\"></span>\n                </div>\n            </div>\n            <div class=\"form-group has-feedback\">\n                <div class=\"input-group\">\n                    <span class=\"input-group-addon fi-torso\" id=\"lastname-addon\"></span>\n                    <input type=\"text\" class=\"form-control required\" placeholder=\"Last Name\"\n                           aria-describedby=\"lastname-addon\"\n                           name=\"last_name\" data-error=\"Last Name is required\" required data-minLength=\"2\">\n                    <span class=\"glyphicon form-control-feedback\" aria-hidden=\"true\"></span>\n                </div>\n                <div class=\"help-block with-errors\"></div>\n            </div>\n\n            <div class=\"form-group\">\n                <div class=\"input-group vertical-align\">\n                    <label class=\"col-xs-4\">Suffix</label>\n                    <select class=\"form-control selectpicker\" name=\"suffix\" aria-describedby=\"suffix-addon\">\n                        <option value=\"\">None</option>\n                        <option>Jr</option>\n                        <option>Sr</option>\n                        <option>II</option>\n                        <option>III</option>\n                        <option>IV</option>\n                        <option>V</option>\n                    </select>\n                </div>\n            </div>\n\n            <div class=\"form-group has-feedback\">\n                <div class=\"input-group\">\n                    <span class=\"input-group-addon fi-at-sign\" id=\"email-addon\"></span>\n                    <input type=\"email\" class=\"form-control required\" placeholder=\"Email address\"\n                           aria-describedby=\"email-addon\" id=\"email_address\"\n                           name=\"email_address\" data-error=\"Invalid email address\" required>\n                    <span class=\"glyphicon form-control-feedback\" aria-hidden=\"true\"></span>\n                </div>\n                <div class=\"help-block with-errors\"></div>\n            </div>\n\n            <div class=\"form-group has-feedback\">\n                <div class=\"input-group\">\n                    <span class=\"input-group-addon fi-at-sign\" id=\"emailconform-addon\"></span>\n                    <input type=\"email\" class=\"form-control required\" placeholder=\"Re-enter email address\"\n                           aria-describedby=\"email-addon\"\n                           name=\"email_address\" data-error=\"Email address don't match\" data-match=\"#email_address\"\n                           required>\n                    <span class=\"glyphicon form-control-feedback\" aria-hidden=\"true\"></span>\n                </div>\n                <div class=\"help-block with-errors\"></div>\n            </div>\n\n            <div class=\"form-group has-feedback\">\n                <div class=\"input-group\">\n                    <span class=\"input-group-addon fi-key\" id=\"password-addon\"></span>\n                    <input type=\"password\" class=\"form-control required\" placeholder=\"Password\"\n                           aria-describedby=\"password-addon\"\n                           id=\"password\" name=\"password\" data-error=\"Please enter a password of at least 6 characters\" required data-minLength=\"6\">\n                    <span class=\"glyphicon form-control-feedback\" aria-hidden=\"true\"></span>\n                </div>\n                <div class=\"help-block with-errors\"></div>\n            </div>\n            <div class=\"form-group has-feedback\">\n                <div class=\"input-group\">\n                    <span class=\"input-group-addon fi-key\" id=\"password2-addon\"></span>\n                    <input type=\"password\" class=\"form-control required\" placeholder=\"Re-enter Password\"\n                           aria-describedby=\"password2-addon\"\n                           data-error=\"Passwords don't match\" data-match=\"#password\" required>\n                    <span class=\"glyphicon form-control-feedback\" aria-hidden=\"true\"></span>\n                </div>\n                <div class=\"help-block with-errors\"></div>\n            </div>\n            <div class=\"form-group has-feedback\">\n                <div class=\"input-group vertical-align\">\n                    <label class=\"col-xs-4\">Date of Birth</label>\n                    <input type=\"date\" class=\"form-control required\" aria-describedby=\"dob-addon\"\n                           name=\"dob\" data-error=\"Date of birth is required\" required>\n                </div>\n                <div class=\"help-block with-errors\"></div>\n            </div>\n        </fieldset>\n\n        <fieldset>\n            <legend>Address</legend>\n            <div class=\"form-group has-feedback\">\n                <div class=\"input-group\">\n                    <span class=\"input-group-addon fi-home\" id=\"address-addon\"></span>\n                    <input type=\"text\" class=\"form-control required\" placeholder=\"Street Address\"\n                           aria-describedby=\"address-addon\" name=\"address1\" data-error=\"A street address is required\"\n                           required>\n                    <span class=\"glyphicon form-control-feedback\" aria-hidden=\"true\"></span>\n                </div>\n                <div class=\"help-block with-errors\"></div>\n            </div>\n            <div class=\"form-group\">\n                <div class=\"input-group has-feedback\">\n                    <span class=\"input-group-addon fi-home\" id=\"address2-addon\"></span>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Apartment, unit, building, etc\"\n                           aria-describedby=\"address2-addon\" name=\"address2\">\n                    <span class=\"glyphicon form-control-feedback\" aria-hidden=\"true\"></span>\n                </div>\n            </div>\n            <div class=\"form-group has-feedback\">\n                <div class=\"input-group\">\n                    <span class=\"input-group-addon fi-home\" id=\"city-addon\"></span>\n                    <input type=\"text\" class=\"form-control required\" placeholder=\"City\" aria-describedby=\"city-addon\"\n                           name=\"city\" required data-error=\"City is required\">\n                    <span class=\"glyphicon form-control-feedback\" aria-hidden=\"true\"></span>\n                </div>\n                <div class=\"help-block with-errors\"></div>\n            </div>\n            <div class=\"form-group has-feedback\">\n                <div class=\"input-group\">\n                    <span class=\"input-group-addon fi-home\" id=\"state-addon\"></span>\n                    <input type=\"text\" class=\"form-control required\" placeholder=\"State or Province\"\n                           aria-describedby=\"state-addon\" name=\"state\" required\n                           data-error=\"State or Province is required\">\n                    <span class=\"glyphicon form-control-feedback\" aria-hidden=\"true\"></span>\n                </div>\n                <div class=\"help-block with-errors\"></div>\n            </div>\n            <div class=\"form-group has-feedback\">\n                <div class=\"input-group\">\n                    <span class=\"input-group-addon fi-home\" id=\"postalcode-addon\"></span>\n                    <input type=\"text\" class=\"form-control required\" placeholder=\"Zip/Postal Code\"\n                           aria-describedby=\"postalcode-addon\" name=\"postalcode\" required\n                           data-error=\"Zip/Postal Code is required\">\n                    <span class=\"glyphicon form-control-feedback\" aria-hidden=\"true\"></span>\n                </div>\n                <div class=\"help-block with-errors\"></div>\n            </div>\n            <div class=\"form-group has-feedback\">\n                <div class=\"input-group vertical-align\">\n                    <label class=\"col-xs-4\">Country</label>\n                    <select class=\"form-control required selectpicker\" name=\"country\" required\n                            data-error=\"Please choose your country\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.countries : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 2, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "                    </select>\n                </div>\n                <div class=\"help-block with-errors\"></div>\n            </div>\n        </fieldset>\n\n        <fieldset>\n            <legend>Branch and Chapter</legend>\n\n            <div class=\"form-group has-feedback\">\n                <div class=\"input-group vertical-align\">\n                    <label class=\"col-xs-4\">Branch</label>\n                    <select class=\"form-control required selectpicker\" name=\"branch\" required\n                            data-error=\"You must choose a branch\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.branches : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 2, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "                    </select>\n                </div>\n                <div class=\"help-block with-errors\"></div>\n            </div>\n\n            <div class=\"form-group has-feedback\">\n                <div class=\"input-group vertical-align\">\n                    <label class=\"col-xs-4\">Chapter</label>\n                    <select class=\"form-control required selectpicker\" name=\"chapter\" required\n                            data-error=\"You must choose a chapter\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.chapters : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 2, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "                    </select>\n                </div>\n                <div class=\"help-block with-errors\"></div>\n            </div>\n\n            <div class=\"form-group has-feedback\">\n                <div class=\"input-group vertical-align checkbox-inline\">\n                    <label>\n                        <input type=\"checkbox\" required data-error=\"You must agree to the Terms of Service\"> I have read\n                        and agree to the Terms of Service\n                    </label>\n                </div>\n                <div class=\"help-block with-errors\"></div>\n            </div>\n            <input type=\"submit\" value=\"Signup!\"/>\n        </fieldset>\n    </form>\n</div>";
},"useData":true,"useBlockParams":true});