module.exports = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.primary : depth0),{"name":"unless","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"2":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "            <div class=\"row\">\n                <div class=\"col-xs-12 text-left\">\n                    <span>"
    + alias2(alias1((depth0 != null ? depth0.chapter_name : depth0), depth0))
    + ", "
    + alias2(alias1((depth0 != null ? depth0.billet : depth0), depth0))
    + "</span>\n                </div>\n            </div>\n";
},"4":function(depth0,helpers,partials,data) {
    return "        <div class=\"row\">\n            <div class=\"col-xs-12 text-left\">\n                <span>None</span>\n            </div>\n        </div>\n";
},"6":function(depth0,helpers,partials,data) {
    var stack1;

  return "        <br/>\n        <div class=\"row\">\n            <div class=\"col-xs-5 text-left\">\n                <span><strong>Time In Grade:</strong></span>\n            </div>\n            <div class=\"col-xs-7 text-left\">\n                <span id=\"tig\">"
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.userinfo : depth0)) != null ? stack1.tig : stack1), depth0))
    + "</span>\n            </div>\n        </div>\n";
},"8":function(depth0,helpers,partials,data) {
    var stack1;

  return "        <div class=\"row\">\n            <div class=\"col-xs-5 text-left\">\n                <span><strong>Time In Service:</strong></span>\n            </div>\n            <div class=\"col-xs-7 text-left\">\n                <span id=\"tis\">"
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.userinfo : depth0)) != null ? stack1.tis : stack1), depth0))
    + "</span>\n            </div>\n        </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-xs-12 text-center\">\n            <h4 class=\"medusa-yellow\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.userinfo : depth0)) != null ? stack1.greeting : stack1), depth0))
    + "</h4>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xs-12 text-center\">\n            <span>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.userinfo : depth0)) != null ? stack1.member_id : stack1), depth0))
    + "</span>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xs-12 text-center\">\n            <span>"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.userinfo : depth0)) != null ? stack1.assignment : stack1)) != null ? stack1.primary : stack1)) != null ? stack1.billet : stack1), depth0))
    + "</span>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xs-12 text-center\">\n            <span>"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.userinfo : depth0)) != null ? stack1.assignment : stack1)) != null ? stack1.primary : stack1)) != null ? stack1.chapter_name : stack1), depth0))
    + "</span>\n        </div>\n    </div>\n    <br/>\n    <div class=\"row\">\n        <div class=\"col-xs-12 text-left\">\n            <span class=\"medusa-yellow\"><strong>Additional Assignments:</strong></span>\n        </div>\n    </div>\n\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.userinfo : depth0)) != null ? stack1.assignment : stack1),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.userinfo : depth0)) != null ? stack1.tig : stack1),{"name":"if","hash":{},"fn":this.program(6, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.userinfo : depth0)) != null ? stack1.tis : stack1),{"name":"if","hash":{},"fn":this.program(8, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n</div>";
},"useData":true});