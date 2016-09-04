(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['about'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-xs-12\">\n            <h1 class=\"medusa-yellow\">About MEDUSA Mobile v"
    + container.escapeExpression(((helper = (helper = helpers.version || (depth0 != null ? depth0.version : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"version","hash":{},"data":data}) : helper)))
    + "</h1>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xs-12\">\n            <p>MEDUSA Mobile is copyright &copy; 2016 The Royal Manticoran Navy: The Official Honor Harrington Fan Association, Inc. Some Rights Reserved. Honor Harrington and all related materials are &copy; David Weber.</p>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xs-12\">\n            <h2 class=\"text-center medusa-yellow\">MEDUSA Mobile Development Team</h2>\n            <address>Admiral of the Green Sir Robert W. Bulkeley, Jr, KSK,SC, CGM, DSO<br />\n            Fourth Space Lord</address>\n            <p>Surgeon Commodore Sir David Weiner, KSK, GCE<br/>\n            Deputy Fourth Space Lord</p>\n            <p>Captain (JG) Erik Plossl<br />\n            Director of Software Development</p>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xs-12\">\n            <h2 class=\"text-center medusa-yellow\">Special thanks to:</h2>\n            <p>Brian Corchiolo (<a href=\"http://www.bpccreative.com\" target=\"_system\">www.bpccreative.com</a>) and Dougal Campbell (<a href=\"http://dougal.us\" target=\"_system\">dougal.us</a>) for their help hamering this code into shape.</p>\n            <p>A very special thanks to John M. Wargo (<a href=\"http://www.johnwargobooks.com\" target=\"_system\">www.johnwargobooks.com</a>) for his excellent books (<em>Apache Cordova 4 Programming</em> and <em>Apache Cordova API Cookbook</em>) as well as his willingness to answer stupid questions from a new mobile developer.</p>\n        </div>\n    </div>\n</div>";
},"useData":true});
templates['idcard'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"navbar navbar-default navbar-fixed-top\">\n    <a href=\"profile\" data-navigo><img id=\"idcard\" src=\""
    + container.escapeExpression(((helper = (helper = helpers.imgSrc || (depth0 != null ? depth0.imgSrc : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"imgSrc","hash":{},"data":data}) : helper)))
    + "\"></a>\n</div>";
},"useData":true});
templates['login'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"container-fluid\">\n    <form data-toggle=\"validator\" role=\"form\" id=\"login-form\">\n        <div class=\"form-group has-feedback\">\n            <div class=\"input-group\">\n                <span class=\"input-group-addon fi-at-sign\" id=\"email-addon\"></span>\n                <input type=\"email\" class=\"form-control\" placeholder=\"Email address\" aria-describedby=\"email-addon\"\n                       id=\"email-address\" data-error=\"Invalid email address\" value=\""
    + container.escapeExpression(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"username","hash":{},"data":data}) : helper)))
    + "\" required>\n                <span class=\"glyphicon form-control-feedback\" aria-hidden=\"true\"></span>\n            </div>\n        </div>\n\n        <br/>\n        <div class=\"form-group has-feedback\">\n            <div class=\"input-group\">\n                <span class=\"input-group-addon fi-lock\" id=\"password-addon\"></span>\n                <input type=\"password\" class=\"form-control\" placeholder=\"Password\" aria-describedby=\"password-addon\"\n                       id=\"password\" data-error=\"Please enter your password\" required>\n                <span class=\"glyphicon form-control-feedback\" aria-hidden=\"true\"></span>\n            </div>\n        </div>\n        <br/>\n\n        <button type=\"submit\" class=\"btn btn-default center-block\" id=\"signin-button\"><span class=\"fi-unlock\"></span>\n            Sign in\n        </button>\n    </form>\n</div>\n";
},"useData":true});
templates['logo'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"container-fluid\">\n        <div class=\"row\">\n        <div class=\"col-xs-12\">\n            <img class=\"img-responsive center-block project-medusa\">\n        </div>\n    </div>\n</div>\n<br />";
},"useData":true});
templates['memberinfo'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                        <h4 class=\"medusa-yellow\">Additional Assignments</h4>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.userinfo : depth0)) != null ? stack1.assignment : stack1),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.unless.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.primary : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "                                <div class=\"row\">\n                                    <div class=\"col-xs-12 text-left\">\n                                        <span>"
    + alias2(alias1((depth0 != null ? depth0.chapter_name : depth0), depth0))
    + ", "
    + alias2(alias1((depth0 != null ? depth0.billet : depth0), depth0))
    + "</span>\n                                    </div>\n                                </div>\n";
},"5":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.userinfo : depth0)) != null ? stack1.peerages : stack1),{"name":"each","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.program(8, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "                            <div class=\"row\">\n                                <div class=\"col-xs-12\">\n                                    <img src=\""
    + alias2(alias1((depths[1] != null ? depths[1].baseurl : depths[1]), depth0))
    + alias2(alias1((depth0 != null ? depth0.path : depth0), depth0))
    + "\"\n                                         class=\"center-block img-responsive img-circle filePhoto\">\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-xs-12 text-center\">\n                                    "
    + alias2(alias1((depth0 != null ? depth0.fullTitle : depth0), depth0))
    + "\n                                </div>\n                            </div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "                            <div class=\"row\">\n                                <div class=\"col-xs-12\">\n                                    None\n                                </div>\n                            </div>\n";
},"10":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1;

  return "                        <div class=\"panel-group\" id=\"cwAccordian\">\n                            <div class=\"panel panel-default\">\n\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.userinfo : depth0)) != null ? stack1.exams : stack1),{"name":"each","hash":{},"fn":container.program(11, data, 2, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "                            </div>\n                        </div>\n";
},"11":function(container,depth0,helpers,partials,data,blockParams) {
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
    + ((stack1 = helpers["if"].call(alias3,((stack1 = blockParams[0][0]) != null ? stack1["new"] : stack1),{"name":"if","hash":{},"fn":container.program(12, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "\n                                            </a>\n                                        </h4>\n                                    </div>\n\n                                    <div id=\""
    + alias2(alias1(blockParams[0][1], depth0))
    + "\" class=\"panel-collapse collapse\" role=\"tabpanel\"\n                                         aria-labelledby=\""
    + alias2(alias1(blockParams[0][1], depth0))
    + "Heading\">\n                                        <div class=\"panel-body\">\n"
    + ((stack1 = helpers.each.call(alias3,((stack1 = blockParams[0][0]) != null ? stack1.examlist : stack1),{"name":"each","hash":{},"fn":container.program(14, data, 2, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "                                        </div>\n                                    </div>\n\n";
},"12":function(container,depth0,helpers,partials,data) {
    return "<span\n                                                    class=\"fi-burst-new size-30\"></span>";
},"14":function(container,depth0,helpers,partials,data,blockParams) {
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

  return "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-xs-12 text-center\">\n            <h4 class=\"medusa-yellow\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.userinfo : depth0)) != null ? stack1.greeting : stack1), depth0))
    + "</h4>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xs-12 text-center\">\n            <span>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.userinfo : depth0)) != null ? stack1.member_id : stack1), depth0))
    + "</span>\n        </div>\n    </div>\n\n    <div id=\"accordian\" class=\"panel-group\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\" role=\"tab\" id=\"headingAssignments\">\n                <h4 class=\"panel-title\"><a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordian\"\n                                           href=\"#assignments\" aria-expanded=\"true\" aria-controls=\"#assignments\">Assignments</a>\n                </h4>\n            </div>\n            <div id=\"assignments\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingAssignments\">\n                <div class=\"panel-body\">\n                    <h4 class=\"medusa-yellow text-center\">Primary Assignment</h4>\n                    <div class=\"row\">\n                        <div class=\"col-xs-12 text-center\">\n                            <span>"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.userinfo : depth0)) != null ? stack1.assignment : stack1)) != null ? stack1.primary : stack1)) != null ? stack1.billet : stack1), depth0))
    + "</span>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-xs-12 text-center\">\n                            <span>"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.userinfo : depth0)) != null ? stack1.assignment : stack1)) != null ? stack1.primary : stack1)) != null ? stack1.chapter_name : stack1), depth0))
    + "</span>\n                        </div>\n                    </div>\n\n"
    + ((stack1 = helpers["if"].call(alias3,((stack1 = ((stack1 = (depth0 != null ? depth0.userinfo : depth0)) != null ? stack1.assignment : stack1)) != null ? stack1.secondary : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "                </div>\n            </div>\n\n            <div class=\"panel-heading\" role=\"tab\" id=\"headingPeerages\">\n                <h4 class=\"panel-title\"><a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordian\"\n                                           href=\"#peerages\" aria-expanded=\"true\" aria-controls=\"#peerages\">Peerages &\n                    Knighthoods</a>\n                </h4>\n            </div>\n            <div id=\"peerages\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingAssignments\">\n                <div class=\"panel-body\">\n"
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.userinfo : depth0)) != null ? stack1.peerages : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "                </div>\n            </div>\n\n            <div class=\"panel-heading\" role=\"tab\" id=\"headingCoursework\">\n                <h4 class=\"panel-title\"><a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordian\"\n                                           href=\"#coursework\" aria-expanded=\"true\"\n                                           aria-controls=\"#coursework\">Coursework</a>\n                </h4>\n            </div>\n\n            <div id=\"coursework\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingCoursework\">\n                <div class=\"panel-body\">\n                    <!-- Start of course work -->\n"
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.userinfo : depth0)) != null ? stack1.exams : stack1),{"name":"if","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "                    <!-- end of coursework -->\n                </div>\n            </div>\n\n            <div class=\"panel-heading\" role=\"tab\" id=\"headingTisTig\">\n                <h4 class=\"panel-title\"><a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordian\"\n                                           href=\"#tistig\" aria-expanded=\"true\" aria-controls=\"#tistig\">Time In\n                    Service / Time in Grade</a>\n                </h4>\n            </div>\n            <div id=\"tistig\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingTisTig\">\n                <div class=\"panel-body\">\n                    <br/>\n                    <div class=\"row\">\n                        <div class=\"col-xs-6 text-left\">\n                            <span><strong>Time In Grade:</strong></span>\n                        </div>\n                        <div class=\"col-xs-6 text-left\">\n                            <span id=\"tig\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.userinfo : depth0)) != null ? stack1.tig : stack1), depth0))
    + "</span>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-xs-6 text-left\">\n                            <span><strong>Time In Service:</strong></span>\n                        </div>\n                        <div class=\"col-xs-6 text-left\">\n                            <span id=\"tis\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.userinfo : depth0)) != null ? stack1.tis : stack1), depth0))
    + "</span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
},"useData":true,"useDepths":true,"useBlockParams":true});
templates['nav'] = template({"1":function(container,depth0,helpers,partials,data) {
    return " class=\"active\"";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<nav role=\"navigation\" class=\"navbar navbar-default navbar-fixed-top navbar-inverse\">\n    <div class=\"container\">\n        <!-- Brand and toggle get grouped for better mobile display -->\n        <div class=\"navbar-header\">\n            <button type=\"button\" data-target=\"#navbarCollapse\" data-toggle=\"collapse\" class=\"navbar-toggle\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a href=\"#\" class=\"navbar-brand medusa-yellow\">MEDUSA Mobile</a>\n        </div>\n        <!-- Collection of nav links and other content for toggling -->\n        <div id=\"navbarCollapse\" class=\"collapse navbar-collapse\">\n            <ul class=\"nav navbar-nav\">\n                <li"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.homeIsActive : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "><a href=\"home\" data-navigo>Home</a></li>\n                <li"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.idCardIsActive : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "><a href=\"idcard\" data-navigo>Show ID Card</a></li>\n                <li"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.setupIsActive : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "><a href=\"setup\" data-navigo>Setup</a></li>\n                <li"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.aboutIsActive : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "><a href=\"about\" data-navigo>About</a></li>\n                <li role=\"separator\" class=\"divider\"></li>\n                <li><a href=\"refresh\" data-navigo>Force Reload</a></li>\n                <li role=\"separator\" class=\"divider\"></li>\n                <li><a href=\"logout\" data-navigo>Logout</a></li>\n            </ul>\n        </div>\n    </div>\n</nav>";
},"useData":true});
templates['photo'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-xs-12\">\n            <img src=\""
    + container.escapeExpression(((helper = (helper = helpers.imgSrc || (depth0 != null ? depth0.imgSrc : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"imgSrc","hash":{},"data":data}) : helper)))
    + "\" class=\"center-block img-responsive img-circle filePhoto\">\n        </div>\n    </div>\n</div>";
},"useData":true});
templates['setup'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"container-fluid\">\n    <h1 class=\"medusa-yellow text-center\">MEDUSA Server URL</h1>\n    <p><strong><span class=\"alert-warning\">WARNING!</span> Do not change this entry unless you know what you are doing or have\n    been instructed to do so by a member of the MEDUSA Mobile Development Team.  Changing the URL of the MEDUSA server\n    to an incorrect value will prevent MEDUSA Mobile from working!</strong></p>\n\n    <div class=\"input-group\">\n        <span class=\"input-group-addon fi-home\" id=\"server-addon\"></span>\n        <input type=\"text\" class=\"form-control\" placeholder=\"https://medusa.trmn.org\" aria-describedby=\"server-addon\" id=\"server-url\" value=\""
    + container.escapeExpression(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"url","hash":{},"data":data}) : helper)))
    + "\">\n    </div>\n    <br />\n    <button type=\"submit\" id=\"save-setup\" class=\"btn btn-default center-block\"><span class=\"fi-save\"></span> Save</button>\n</div>";
},"useData":true});
})();
