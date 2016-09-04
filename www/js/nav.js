module.exports = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return " class=\"active\"";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<nav role=\"navigation\" class=\"navbar navbar-default navbar-fixed-top navbar-inverse\">\n    <div class=\"container\">\n        <!-- Brand and toggle get grouped for better mobile display -->\n        <div class=\"navbar-header\">\n            <button type=\"button\" data-target=\"#navbarCollapse\" data-toggle=\"collapse\" class=\"navbar-toggle\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a href=\"#\" class=\"navbar-brand medusa-yellow\">MEDUSA Mobile</a>\n        </div>\n        <!-- Collection of nav links and other content for toggling -->\n        <div id=\"navbarCollapse\" class=\"collapse navbar-collapse\">\n            <ul class=\"nav navbar-nav\">\n                <li"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.homeIsActive : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "><a href=\"home\" data-navigo>Home</a></li>\n                <li"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.setupIsActive : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "><a href=\"setup\" data-navigo>Setup</a></li>\n                <li"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.aboutIsActive : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "><a href=\"about\" data-navigo>About</a></li>\n                <li role=\"separator\" class=\"divider\"></li>\n                <li><a href=\"logout\" data-navigo>Logout</a></li>\n            </ul>\n        </div>\n    </div>\n</nav>";
},"useData":true});