module.exports = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-xs-12\">\n            <img src=\""
    + this.escapeExpression(((helper = (helper = helpers.imgSrc || (depth0 != null ? depth0.imgSrc : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"imgSrc","hash":{},"data":data}) : helper)))
    + "\" class=\"center-block img-responsive img-circle filePhoto\">\n        </div>\n    </div>\n</div>";
},"useData":true});