(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['about'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-xs-12\">\n            <h1 class=\"medusa-yellow\">About MEDUSA Mobile v"
    + container.escapeExpression(((helper = (helper = helpers.version || (depth0 != null ? depth0.version : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"version","hash":{},"data":data}) : helper)))
    + "</h1>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xs-12\">\n            <p>MEDUSA Mobile is copyright &copy; 2016 The Royal Manticoran Navy: The Official Honor Harrington Fan Association, Inc. Some Rights Reserved. Honor Harrington and all related materials are &copy; David Weber.</p>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xs-12\">\n            <h2 class=\"text-center medusa-yellow\">MEDUSA Mobile Development Team</h2>\n            <address>Admiral of the Green Sir Robert W. Bulkeley, Jr, KSK,SC, CGM, DSO<br />\n            Fourth Space Lord</address>\n            <p>Surgeon Commodore Sir David Weiner, KSK, GCE<br/>\n            Deputy Fourth Space Lord</p>\n            <p>Captain (JG) Erik Plossl<br />\n            Director of Software Development</p>\n        </div>\n    </div>\n</div>";
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

  return ((stack1 = helpers.unless.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.primary : depth0),{"name":"unless","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "            <div class=\"row\">\n                <div class=\"col-xs-12 text-left\">\n                    <span>"
    + alias2(alias1((depth0 != null ? depth0.chapter_name : depth0), depth0))
    + ", "
    + alias2(alias1((depth0 != null ? depth0.billet : depth0), depth0))
    + "</span>\n                </div>\n            </div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"row\">\n            <div class=\"col-xs-12 text-left\">\n                <span>None</span>\n            </div>\n        </div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <br/>\n        <div class=\"row\">\n            <div class=\"col-xs-5 text-left\">\n                <span><strong>Time In Grade:</strong></span>\n            </div>\n            <div class=\"col-xs-7 text-left\">\n                <span id=\"tig\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.userinfo : depth0)) != null ? stack1.tig : stack1), depth0))
    + "</span>\n            </div>\n        </div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <div class=\"row\">\n            <div class=\"col-xs-5 text-left\">\n                <span><strong>Time In Service:</strong></span>\n            </div>\n            <div class=\"col-xs-7 text-left\">\n                <span id=\"tis\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.userinfo : depth0)) != null ? stack1.tis : stack1), depth0))
    + "</span>\n            </div>\n        </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {};

  return "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-xs-12 text-center\">\n            <h4 class=\"medusa-yellow\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.userinfo : depth0)) != null ? stack1.greeting : stack1), depth0))
    + "</h4>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xs-12 text-center\">\n            <span>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.userinfo : depth0)) != null ? stack1.member_id : stack1), depth0))
    + "</span>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xs-12 text-center\">\n            <span>"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.userinfo : depth0)) != null ? stack1.assignment : stack1)) != null ? stack1.primary : stack1)) != null ? stack1.billet : stack1), depth0))
    + "</span>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xs-12 text-center\">\n            <span>"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.userinfo : depth0)) != null ? stack1.assignment : stack1)) != null ? stack1.primary : stack1)) != null ? stack1.chapter_name : stack1), depth0))
    + "</span>\n        </div>\n    </div>\n    <br/>\n    <div class=\"row\">\n        <div class=\"col-xs-12 text-left\">\n            <span class=\"medusa-yellow\"><strong>Additional Assignments:</strong></span>\n        </div>\n    </div>\n\n"
    + ((stack1 = helpers.each.call(alias3,((stack1 = (depth0 != null ? depth0.userinfo : depth0)) != null ? stack1.assignment : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.userinfo : depth0)) != null ? stack1.tig : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.userinfo : depth0)) != null ? stack1.tis : stack1),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n</div>";
},"useData":true});
templates['nav'] = template({"1":function(container,depth0,helpers,partials,data) {
    return " class=\"active\"";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<nav role=\"navigation\" class=\"navbar navbar-default navbar-fixed-top navbar-inverse\">\n    <div class=\"container\">\n        <!-- Brand and toggle get grouped for better mobile display -->\n        <div class=\"navbar-header\">\n            <button type=\"button\" data-target=\"#navbarCollapse\" data-toggle=\"collapse\" class=\"navbar-toggle\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a href=\"#\" class=\"navbar-brand medusa-yellow\">MEDUSA Mobile</a>\n        </div>\n        <!-- Collection of nav links and other content for toggling -->\n        <div id=\"navbarCollapse\" class=\"collapse navbar-collapse\">\n            <ul class=\"nav navbar-nav\">\n                <li"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.homeIsActive : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "><a href=\"home\" data-navigo>Home</a></li>\n                <li"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.setupIsActive : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "><a href=\"setup\" data-navigo>Setup</a></li>\n                <li"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.aboutIsActive : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "><a href=\"about\" data-navigo>About</a></li>\n                <li role=\"separator\" class=\"divider\"></li>\n                <li><a href=\"logout\" data-navigo>Logout</a></li>\n            </ul>\n        </div>\n    </div>\n</nav>";
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
