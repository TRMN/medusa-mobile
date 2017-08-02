this["medusa"] = this["medusa"] || {};
this["medusa"]["templates"] = this["medusa"]["templates"] || {};
this["medusa"]["templates"]["about"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-xs-12\">\n            <h1 class=\"medusa-yellow text-center\">MEDUSA Mobile</h1>\n            <h1 class=\"medusa-yellow text-center\">Version "
    + container.escapeExpression(((helper = (helper = helpers.version || (depth0 != null ? depth0.version : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"version","hash":{},"data":data}) : helper)))
    + "</h1>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xs-12\">\n            <p>MEDUSA Mobile is copyright &copy; 2016 The Royal Manticoran Navy: The Official Honor Harrington Fan Association, Inc. Some Rights Reserved. Honor Harrington and all related materials are &copy; David Weber.</p>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xs-12\">\n            <h2 class=\"text-center medusa-yellow\">MEDUSA Mobile Development Team</h2>\n            <address>Admiral of the Green Sir Robert W. Bulkeley, Jr, KSK,SC, CGM, DSO<br />\n            Fourth Space Lord</address>\n            <p>Surgeon Commodore Sir David Weiner, KSK, GCE<br/>\n            Deputy Fourth Space Lord</p>\n            <p>Captain (JG) Erik Plossl<br />\n            Director of Software Development</p>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xs-12\">\n            <h2 class=\"text-center medusa-yellow\"><a href=\"testers\" data-navigo>Alpha and Beta Testers List</a></h2>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xs-12\">\n            <h2 class=\"text-center medusa-yellow\">Special thanks to:</h2>\n            <p>Brian Corchiolo (<a href=\"http://www.bpccreative.com\" target=\"_system\">www.bpccreative.com</a>) and Dougal Campbell (<a href=\"http://dougal.us\" target=\"_system\">dougal.us</a>) for their help hamering this code into shape.</p>\n            <p>A very special thanks to John M. Wargo (<a href=\"http://www.johnwargobooks.com\" target=\"_system\">www.johnwargobooks.com</a>) for his excellent books (<em>Apache Cordova 4 Programming</em> and <em>Apache Cordova API Cookbook</em>) as well as his willingness to answer stupid questions from a new mobile developer.</p>\n        </div>\n    </div>\n\n\n</div>";
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
    + "\n    <div class=\"row\">\n        <div class=\"col-xs-12\">\n            <h3 class=\"medusa-yellow text-center\">Events Information</h3>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xs-12 text-center\">\n            "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.debugInfo : depth0)) != null ? stack1.events : stack1), depth0))
    + "\n        </div>\n    </div>\n</div>";
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
    + ((stack1 = (helpers.ifvalue || (depth0 && depth0.ifvalue) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.title : depth0),{"name":"ifvalue","hash":{"value":"Knight"},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.program(9, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-xs-12 text-center\">\n                                    "
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.fullTitle : depth0), depth0))
    + "\n                                </div>\n                            </div>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "                                        <img id=\""
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.path : depth0), depth0))
    + "\"\n                                             class=\"center-block img-responsive\">\n";
},"9":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "                                        <img src=\""
    + alias2(alias1((depths[1] != null ? depths[1].baseurl : depths[1]), depth0))
    + alias2(alias1((depth0 != null ? depth0.path : depth0), depth0))
    + "\"\n                                             class=\"center-block img-responsive filePhoto\">\n";
},"11":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1;

  return "                        <div class=\"panel-group\" id=\"cwAccordian\">\n                            <div class=\"panel panel-default\">\n\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.userinfo : depth0)) != null ? stack1.exams : stack1),{"name":"each","hash":{},"fn":container.program(12, data, 2, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "                            </div>\n                        </div>\n";
},"12":function(container,depth0,helpers,partials,data,blockParams) {
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
    + ((stack1 = helpers["if"].call(alias3,((stack1 = blockParams[0][0]) != null ? stack1["new"] : stack1),{"name":"if","hash":{},"fn":container.program(13, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "\n                                            </a>\n                                        </h4>\n                                    </div>\n\n                                    <div id=\""
    + alias2(alias1(blockParams[0][1], depth0))
    + "\" class=\"panel-collapse collapse\" role=\"tabpanel\"\n                                         aria-labelledby=\""
    + alias2(alias1(blockParams[0][1], depth0))
    + "Heading\">\n                                        <div class=\"panel-body\">\n"
    + ((stack1 = helpers.each.call(alias3,((stack1 = blockParams[0][0]) != null ? stack1.examlist : stack1),{"name":"each","hash":{},"fn":container.program(15, data, 2, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "                                        </div>\n                                    </div>\n\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "<span\n                                                    class=\"fi-burst-new size-30\"></span>";
},"15":function(container,depth0,helpers,partials,data,blockParams) {
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
},"17":function(container,depth0,helpers,partials,data) {
    return "                        <div class=\"row\">\n                            <div class=\"col-xs-12\">\n                                None\n                            </div>\n                        </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {};

  return "<div class=\"container-fluid\" id=\"profile\">\n    <div class=\"row\">\n        <div class=\"col-xs-12 text-center\">\n            <h4 class=\"medusa-yellow\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.userinfo : depth0)) != null ? stack1.greeting : stack1), depth0))
    + "</h4>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xs-12 text-center\">\n            <span>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.userinfo : depth0)) != null ? stack1.member_id : stack1), depth0))
    + "</span>\n        </div>\n    </div>\n\n    <div id=\"accordian\" class=\"panel-group\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\" role=\"tab\" id=\"headingAssignments\">\n                <h4 class=\"panel-title\"><a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordian\"\n                                           href=\"#assignments\" aria-expanded=\"true\" aria-controls=\"#assignments\">Assignments</a>\n                </h4>\n            </div>\n            <div id=\"assignments\" class=\"panel-collapse collapse in\" role=\"tabpanel\"\n                 aria-labelledby=\"headingAssignments\">\n                <div class=\"panel-body\">\n\n                    <div class=\"row\">\n                        <div class=\"col-xs-12\">\n                            <img class=\"img-responsive center-block filePhoto\" id=\"branch"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.userinfo : depth0)) != null ? stack1.branch : stack1), depth0))
    + "\">\n                        </div>\n                    </div>\n\n                    <h4 class=\"medusa-yellow text-center\">Primary Assignment</h4>\n                    <div class=\"row\">\n                        <div class=\"col-xs-12 text-center\">\n                            <span>"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.userinfo : depth0)) != null ? stack1.assignment : stack1)) != null ? stack1.primary : stack1)) != null ? stack1.billet : stack1), depth0))
    + "</span>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-xs-12 text-center\">\n                            <span>"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.userinfo : depth0)) != null ? stack1.assignment : stack1)) != null ? stack1.primary : stack1)) != null ? stack1.chapter_name : stack1), depth0))
    + "</span>\n                        </div>\n                    </div>\n\n"
    + ((stack1 = helpers["if"].call(alias3,((stack1 = ((stack1 = (depth0 != null ? depth0.userinfo : depth0)) != null ? stack1.assignment : stack1)) != null ? stack1.secondary : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "                </div>\n            </div>\n\n            <div class=\"panel-heading\" role=\"tab\" id=\"headingPeerages\">\n                <h4 class=\"panel-title\"><a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordian\"\n                                           href=\"#peerages\" aria-expanded=\"true\" aria-controls=\"#peerages\">Awards,\n                    Peerages &\n                    Knighthoods</a>\n                </h4>\n            </div>\n            <div id=\"peerages\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingAssignments\">\n                <div class=\"panel-body\">\n                    "
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.userinfo : depth0)) != null ? stack1.ribbonrack : stack1), depth0)) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.userinfo : depth0)) != null ? stack1.peerages : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "                </div>\n            </div>\n\n            <div class=\"panel-heading\" role=\"tab\" id=\"headingCoursework\">\n                <h4 class=\"panel-title\"><a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordian\"\n                                           href=\"#coursework\" aria-expanded=\"true\"\n                                           aria-controls=\"#coursework\">Coursework</a>\n                </h4>\n            </div>\n\n            <div id=\"coursework\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingCoursework\">\n                <div class=\"panel-body\">\n                    <!-- Start of course work -->\n"
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.userinfo : depth0)) != null ? stack1.exams : stack1),{"name":"if","hash":{},"fn":container.program(11, data, 0, blockParams, depths),"inverse":container.program(17, data, 0, blockParams, depths),"data":data,"blockParams":blockParams})) != null ? stack1 : "")
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
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "                    <li class=\"dropdown\">\n                        <a id=\"profile\" href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\"\n                           aria-haspopup=\"true\"\n                           aria-expanded=\"false\"><span class=\"fi-arrow-down\"></span> Profile</a>\n                        <ul class=\"dropdown-menu\">\n                            <li"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.editIsActive : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "><a href=\"edit\" data-navigo>Edit</a></li>\n                            <li"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.idCardIsActive : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "><a href=\"idcard\" data-navigo>ID Card</a>\n                            </li>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.loggedIn : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                        </ul>\n                    </li>\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "                                <li><a href=\"refresh\" data-navigo>Reload User Info</a></li>\n";
},"10":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1;

  return "                    <li class=\"dropdown\">\n                        <a id=\"events\" href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" rolw=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                            <span class=\"fi-arrow-down\"></span> Check Members In</a>\n                        <ul class=\"dropdown-menu\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.events : depth0),{"name":"each","hash":{},"fn":container.program(11, data, 2, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "                        </ul>\n                    </li>\n";
},"11":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "                                <li><a href=\"checkin/"
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? stack1._id : stack1), depth0))
    + "\" data-navigo>"
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? stack1.event_name : stack1), depth0))
    + "</a></li>\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "                    <li><a href=\"logout\" data-navigo>Logout</a></li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<nav role=\"navigation\" class=\"navbar navbar-default navbar-fixed-top navbar-inverse\">\n    <div class=\"container\">\n        <!-- Brand and toggle get grouped for better mobile display -->\n        <div class=\"navbar-header\">\n            <button type=\"button\" data-target=\"#navbarCollapse\" data-toggle=\"collapse\" class=\"navbar-toggle\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n        </div>\n        <!-- Collection of nav links and other content for toggling -->\n        <div id=\"navbarCollapse\" class=\"collapse navbar-collapse\">\n            <ul class=\"nav navbar-nav\">\n                <li"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.homeIsActive : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.profileIsActive : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "><a\n                        href=\"home\" data-navigo>"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.loggedIn : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams),"inverse":container.program(5, data, 0, blockParams),"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "</a></li>\n                <li"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.signupIsActive : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "><a href=\"signup\" data-navigo>New Member Signup</a></li>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.loggedIn : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.events : depth0)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":container.program(10, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "                <li class=\"dropdown\">\n                    <a id=\"help\" href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\"\n                       aria-haspopup=\"true\"\n                       aria-expanded=\"false\"><span class=\"fi-arrow-down\"></span> Help</a>\n                    <ul class=\"dropdown-menu\">\n                        <li"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.aboutIsActive : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "><a href=\"about\" data-navigo>About</a></li>\n                        <li"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.setupIsActive : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "><a href=\"setup\" data-navigo>Setup</a></li>\n\n                        <li"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.debugIsActive : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "><a href=\"debug\" data-navigo>Show Debug info</a>\n                        </li>\n                    </ul>\n                </li>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.loggedIn : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "            </ul>\n        </div>\n    </div>\n</nav>\n";
},"useData":true,"useBlockParams":true});
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
this["medusa"]["templates"]["signup"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "    <h2>Membership Application</h2>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "    <h2>Edit Profile</h2>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "            <input type=\"hidden\" name=\"id\" value=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.userInfo : depth0)) != null ? stack1._id : stack1), depth0))
    + "\">\n";
},"7":function(container,depth0,helpers,partials,data) {
    return " selected";
},"9":function(container,depth0,helpers,partials,data) {
    return "                <div class=\"form-group has-feedback\">\n                    <div class=\"input-group\">\n                        <span class=\"input-group-addon fi-at-sign\" id=\"email-addon\"></span>\n                        <input type=\"email\" class=\"form-control required\" placeholder=\"Email address\"\n                               aria-describedby=\"email-addon\" id=\"email_address\"\n                               name=\"email_address\" data-error=\"Invalid email address\" required>\n                        <span class=\"glyphicon form-control-feedback\" aria-hidden=\"true\"></span>\n                    </div>\n                    <div class=\"help-block with-errors\"></div>\n                </div>\n\n                <div class=\"form-group has-feedback\">\n                    <div class=\"input-group\">\n                        <span class=\"input-group-addon fi-at-sign\" id=\"emailconform-addon\"></span>\n                        <input type=\"email\" class=\"form-control required\" placeholder=\"Re-enter email address\"\n                               aria-describedby=\"email-addon\"\n                               name=\"email_address_confirm\" data-error=\"Email address don't match\"\n                               data-match=\"#email_address\"\n                               required>\n                        <span class=\"glyphicon form-control-feedback\" aria-hidden=\"true\"></span>\n                    </div>\n                    <div class=\"help-block with-errors\"></div>\n                </div>\n\n                <div class=\"form-group has-feedback\">\n                    <div class=\"input-group\">\n                        <span class=\"input-group-addon fi-key\" id=\"password-addon\"></span>\n                        <input type=\"password\" class=\"form-control required\" placeholder=\"Password\"\n                               aria-describedby=\"password-addon\"\n                               id=\"password\" name=\"password\"\n                               data-error=\"Please enter a password of at least 6 characters\" required\n                               data-minLength=\"6\">\n                        <span class=\"glyphicon form-control-feedback\" aria-hidden=\"true\"></span>\n                    </div>\n                    <div class=\"help-block with-errors\"></div>\n                </div>\n                <div class=\"form-group has-feedback\">\n                    <div class=\"input-group\">\n                        <span class=\"input-group-addon fi-key\" id=\"password2-addon\"></span>\n                        <input type=\"password\" class=\"form-control required\" placeholder=\"Re-enter Password\"\n                               aria-describedby=\"password2-addon\"\n                               data-error=\"Passwords don't match\" data-match=\"#password\" required>\n                        <span class=\"glyphicon form-control-feedback\" aria-hidden=\"true\"></span>\n                    </div>\n                    <div class=\"help-block with-errors\"></div>\n                </div>\n";
},"11":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "                            <option value=\""
    + alias2(alias1(blockParams[0][1], depth0))
    + "\""
    + ((stack1 = (helpers.ifvalue || (depth0 && depth0.ifvalue) || helpers.helperMissing).call(depth0 != null ? depth0 : {},blockParams[0][1],{"name":"ifvalue","hash":{"value":((stack1 = (depth0 != null ? depth0.userInfo : depth0)) != null ? stack1.country : stack1)},"fn":container.program(12, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + ">"
    + alias2(alias1(blockParams[0][0], depth0))
    + "</option>\n";
},"12":function(container,depth0,helpers,partials,data) {
    return "\n                                    selected";
},"14":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "            <fieldset>\n                <legend>Branch and Chapter</legend>\n\n                <div class=\"form-group has-feedback\">\n                    <div class=\"input-group vertical-align\">\n                        <label class=\"col-xs-4\">Branch</label>\n                        <select class=\"form-control required selectpicker\" name=\"branch\" required\n                                data-error=\"You must choose a branch\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.branches : depth0),{"name":"each","hash":{},"fn":container.program(15, data, 2, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "                        </select>\n                    </div>\n                    <div class=\"help-block with-errors\"></div>\n                </div>\n\n                <div class=\"form-group has-feedback\">\n                    <div class=\"input-group vertical-align\">\n                        <label class=\"col-xs-4\">Chapter</label>\n                        <select class=\"form-control required selectpicker\" name=\"primary_assignment\" required\n                                data-error=\"You must choose a chapter\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.chapters : depth0),{"name":"each","hash":{},"fn":container.program(15, data, 2, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "                        </select>\n                    </div>\n                    <div class=\"help-block with-errors\"></div>\n                </div>\n\n                <div class=\"form-group has-feedback\">\n                    <div class=\"input-group vertical-align checkbox-inline\">\n                        <label class=\"checkbox-inline\">\n                            <input type=\"checkbox\" required data-error=\"You must agree to the Terms of Service\"\n                                   name=\"tos\">\n                            I have read and agree to the Terms of Service\n                        </label>\n                    </div>\n                    <div class=\"help-block with-errors\"></div>\n                </div>\n                <input type=\"submit\" value=\"Signup!\"/>\n            </fieldset>\n";
},"15":function(container,depth0,helpers,partials,data,blockParams) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "                                <option value=\""
    + alias2(alias1(blockParams[0][1], depth0))
    + "\">"
    + alias2(alias1(blockParams[0][0], depth0))
    + "</option>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4=container.lambda;

  return ((stack1 = (helpers.ifvalue || (depth0 && depth0.ifvalue) || alias2).call(alias1,(depth0 != null ? depth0.formId : depth0),{"name":"ifvalue","hash":{"value":"signup"},"fn":container.program(1, data, 0, blockParams),"inverse":container.program(3, data, 0, blockParams),"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "<div class=\"container-fluid\">\n    <form id=\""
    + alias3(((helper = (helper = helpers.formId || (depth0 != null ? depth0.formId : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"formId","hash":{},"data":data,"blockParams":blockParams}) : helper)))
    + "\" data-toggle=\"validator\" class=\"form-horizontal\">\n"
    + ((stack1 = (helpers.ifvalue || (depth0 && depth0.ifvalue) || alias2).call(alias1,(depth0 != null ? depth0.formId : depth0),{"name":"ifvalue","hash":{"value":"editUser"},"fn":container.program(5, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "        <fieldset>\n            <legend>Basic Information</legend>\n            <div class=\"form-group has-feedback\">\n                <div class=\"input-group\">\n                    <span class=\"input-group-addon fi-torso\" id=\"firstname-addon\"></span>\n                    <input type=\"text\" class=\"form-control required\" placeholder=\"First Name\"\n                           aria-describedby=\"firstname-addon\"\n                           name=\"first_name\" value=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.userInfo : depth0)) != null ? stack1.first_name : stack1), depth0))
    + "\" data-error=\"First Name is required\"\n                           required data-minLength=\"2\">\n                    <span class=\"glyphicon form-control-feedback\" aria-hidden=\"true\"></span>\n                </div>\n                <div class=\"help-block with-errors\"></div>\n            </div>\n            <div class=\"form-group has-feedback\">\n                <div class=\"input-group\">\n                    <span class=\"input-group-addon fi-torso\" id=\"middlename-addon\"></span>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Middle Name\"\n                           aria-describedby=\"middlename-addon\"\n                           name=\"middle_name\" value=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.userInfo : depth0)) != null ? stack1.middle_name : stack1), depth0))
    + "\">\n                    <span class=\"glyphicon form-control-feedback\" aria-hidden=\"true\"></span>\n                </div>\n            </div>\n            <div class=\"form-group has-feedback\">\n                <div class=\"input-group\">\n                    <span class=\"input-group-addon fi-torso\" id=\"lastname-addon\"></span>\n                    <input type=\"text\" class=\"form-control required\" placeholder=\"Last Name\"\n                           aria-describedby=\"lastname-addon\" value=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.userInfo : depth0)) != null ? stack1.last_name : stack1), depth0))
    + "\"\n                           name=\"last_name\" data-error=\"Last Name is required\" required data-minLength=\"2\">\n                    <span class=\"glyphicon form-control-feedback\" aria-hidden=\"true\"></span>\n                </div>\n                <div class=\"help-block with-errors\"></div>\n            </div>\n\n            <div class=\"form-group\">\n                <div class=\"input-group vertical-align\">\n                    <label class=\"col-xs-4\">Suffix</label>\n                    <select class=\"form-control selectpicker\" name=\"suffix\" aria-describedby=\"suffix-addon\">\n                        <option value=\"\">None</option>\n                        <option"
    + ((stack1 = (helpers.ifvalue || (depth0 && depth0.ifvalue) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.userInfo : depth0)) != null ? stack1.suffix : stack1),{"name":"ifvalue","hash":{"value":"Jr"},"fn":container.program(7, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + ">Jr</option>\n                        <option"
    + ((stack1 = (helpers.ifvalue || (depth0 && depth0.ifvalue) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.userInfo : depth0)) != null ? stack1.suffix : stack1),{"name":"ifvalue","hash":{"value":"Sr"},"fn":container.program(7, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + ">Sr</option>\n                        <option"
    + ((stack1 = (helpers.ifvalue || (depth0 && depth0.ifvalue) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.userInfo : depth0)) != null ? stack1.suffix : stack1),{"name":"ifvalue","hash":{"value":"II"},"fn":container.program(7, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + ">II</option>\n                        <option"
    + ((stack1 = (helpers.ifvalue || (depth0 && depth0.ifvalue) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.userInfo : depth0)) != null ? stack1.suffix : stack1),{"name":"ifvalue","hash":{"value":"III"},"fn":container.program(7, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + ">III</option>\n                        <option"
    + ((stack1 = (helpers.ifvalue || (depth0 && depth0.ifvalue) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.userInfo : depth0)) != null ? stack1.suffix : stack1),{"name":"ifvalue","hash":{"value":"IV"},"fn":container.program(7, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + ">IV</option>\n                        <option"
    + ((stack1 = (helpers.ifvalue || (depth0 && depth0.ifvalue) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.userInfo : depth0)) != null ? stack1.suffix : stack1),{"name":"ifvalue","hash":{"value":"V"},"fn":container.program(7, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + ">V</option>\n                    </select>\n                </div>\n            </div>\n"
    + ((stack1 = (helpers.ifvalue || (depth0 && depth0.ifvalue) || alias2).call(alias1,(depth0 != null ? depth0.formId : depth0),{"name":"ifvalue","hash":{"value":"signup"},"fn":container.program(9, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "            <div class=\"form-group has-feedback\">\n                <div class=\"input-group vertical-align\">\n                    <label class=\"col-xs-4\">Date of Birth</label>\n                    <input type=\"date\" class=\"form-control required\" aria-describedby=\"dob-addon\"\n                           name=\"dob\" data-error=\"Date of birth is required\" required value=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.userInfo : depth0)) != null ? stack1.dob : stack1), depth0))
    + "\">\n                </div>\n                <div class=\"help-block with-errors\"></div>\n            </div>\n        </fieldset>\n\n        <fieldset>\n            <legend>Address</legend>\n            <div class=\"form-group has-feedback\">\n                <div class=\"input-group\">\n                    <span class=\"input-group-addon fi-home\" id=\"address-addon\"></span>\n                    <input type=\"text\" class=\"form-control required\" placeholder=\"Street Address\"\n                           aria-describedby=\"address-addon\" name=\"address1\" data-error=\"A street address is required\"\n                           required value=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.userInfo : depth0)) != null ? stack1.address1 : stack1), depth0))
    + "\">\n                    <span class=\"glyphicon form-control-feedback\" aria-hidden=\"true\"></span>\n                </div>\n                <div class=\"help-block with-errors\"></div>\n            </div>\n            <div class=\"form-group\">\n                <div class=\"input-group has-feedback\">\n                    <span class=\"input-group-addon fi-home\" id=\"address2-addon\"></span>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Apartment, unit, building, etc\"\n                           aria-describedby=\"address2-addon\" name=\"address2\" value=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.userInfo : depth0)) != null ? stack1.address2 : stack1), depth0))
    + "\">\n                    <span class=\"glyphicon form-control-feedback\" aria-hidden=\"true\"></span>\n                </div>\n            </div>\n            <div class=\"form-group has-feedback\">\n                <div class=\"input-group\">\n                    <span class=\"input-group-addon fi-home\" id=\"city-addon\"></span>\n                    <input type=\"text\" class=\"form-control required\" placeholder=\"City\" aria-describedby=\"city-addon\"\n                           name=\"city\" required data-error=\"City is required\" value=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.userInfo : depth0)) != null ? stack1.city : stack1), depth0))
    + "\">\n                    <span class=\"glyphicon form-control-feedback\" aria-hidden=\"true\"></span>\n                </div>\n                <div class=\"help-block with-errors\"></div>\n            </div>\n            <div class=\"form-group has-feedback\">\n                <div class=\"input-group\">\n                    <span class=\"input-group-addon fi-home\" id=\"state-addon\"></span>\n                    <input type=\"text\" class=\"form-control required\" placeholder=\"State or Province\"\n                           aria-describedby=\"state-addon\" name=\"state_province\" required\n                           data-error=\"State or Province is required\" value=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.userInfo : depth0)) != null ? stack1.state_province : stack1), depth0))
    + "\">\n                    <span class=\"glyphicon form-control-feedback\" aria-hidden=\"true\"></span>\n                </div>\n                <div class=\"help-block with-errors\"></div>\n            </div>\n            <div class=\"form-group has-feedback\">\n                <div class=\"input-group\">\n                    <span class=\"input-group-addon fi-home\" id=\"postalcode-addon\"></span>\n                    <input type=\"text\" class=\"form-control required\" placeholder=\"Zip/Postal Code\"\n                           aria-describedby=\"postalcode-addon\" name=\"postal_code\" required\n                           data-error=\"Zip/Postal Code is required\" value=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.userInfo : depth0)) != null ? stack1.postal_code : stack1), depth0))
    + "\">\n                    <span class=\"glyphicon form-control-feedback\" aria-hidden=\"true\"></span>\n                </div>\n                <div class=\"help-block with-errors\"></div>\n            </div>\n            <div class=\"form-group has-feedback\">\n                <div class=\"input-group vertical-align\">\n                    <label class=\"col-xs-4\">Country</label>\n                    <select class=\"form-control required selectpicker\" id=\"country\" name=\"country\" required\n                            data-error=\"Please choose your country\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.countries : depth0),{"name":"each","hash":{},"fn":container.program(11, data, 2, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "                    </select>\n                </div>\n                <div class=\"help-block with-errors\"></div>\n            </div>\n        </fieldset>\n"
    + ((stack1 = (helpers.ifvalue || (depth0 && depth0.ifvalue) || alias2).call(alias1,(depth0 != null ? depth0.formId : depth0),{"name":"ifvalue","hash":{"value":"signup"},"fn":container.program(14, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "    </form>\n</div>";
},"useData":true,"useBlockParams":true});
this["medusa"]["templates"]["testers"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"container-fluid\">\n    <p id=\"start\" class=\"text-center\">\n        <img class=\"img-responsive center-block project-medusa\">\n    </p>\n\n    <h2 id=\"testersHeader\">Alpha and Beta Testers</h2>\n\n    <div class=\"row\" id=\"testers\">\n        <div class=\"col-xs-12\" id=\"testerscontent\">\n            <p>Scott D. Ash</p>\n            <p>Christopher Beilby</p>\n            <p>Dan Brandow</p>\n            <p>Diane Bulkeley</p>\n            <p>Tom Coonradt</p>\n            <p>Adam Davis</p>\n            <p>Robert Demkiw</p>\n            <p>Michael D. Garcia</p>\n            <p>Joseph Harney</p>\n            <p>Mike Henigan</p>\n            <p>Doug Henry</p>\n            <p>Peter Howdeshell II</p>\n            <p>Robert J. Jackson</p>\n            <p>James Jones</p>\n            <p>Chrissy Killian</p>\n            <p>Bill Knight</p>\n            <p>Martin A. Lessem</p>\n            <p>Laura Lochen</p>\n            <p>Laura Sophia Lüschen</p>\n            <p>Patrick McKinnion</p>\n            <p>Douglas Wade Needham</p>\n            <p>Sean Niemeyer</p>\n            <p>Marc Reeve</p>\n            <p>Michael Romero</p>\n            <p>James D. Sena</p>\n            <p>Dan Spence</p>\n            <p>Jack Warren</p>\n            <p>Kim Whaley</p>\n            <p>Misty White</p>\n            <p>Zach White</p>\n            <p>Danel Wood</p>\n        </div>\n    </div>\n</div>";
},"useData":true});
this["medusa"]["templates"]["thankyou"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-xs-12\"><p><em>Thank you for your interest in joining The Royal Manticoran Navy: The Official Honor Harrington Fan Association.  Welcome Aboard!</em></p>\n\n            <p>Your application will be reviewed and you should receive an email in 48 to 72 hours once your account has been activated.</p>\n\n            <p><strong>You will not be able to log in to MEDUSA or MEDUSA MOBILE until you have received your welcome email.</strong></div></p>\n    </div>\n</div>";
},"useData":true});