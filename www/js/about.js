module.exports = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-xs-12\">\n            <h1 class=\"medusa-yellow\">About MEDUSA Mobile v"
    + this.escapeExpression(((helper = (helper = helpers.version || (depth0 != null ? depth0.version : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"version","hash":{},"data":data}) : helper)))
    + "</h1>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xs-12\">\n            <p>MEDUSA Mobile is copyright &copy; 2016 The Royal Manticoran Navy: The Official Honor Harrington Fan Association, Inc. Some Rights Reserved. Honor Harrington and all related materials are &copy; David Weber.</p>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xs-12\">\n            <h2 class=\"text-center medusa-yellow\">MEDUSA Mobile Development Team</h2>\n            <address>Admiral of the Green Sir Robert W. Bulkeley, Jr, KSK,SC, CGM, DSO<br />\n            Fourth Space Lord</address>\n            <p>Surgeon Commodore Sir David Weiner, KSK, GCE<br/>\n            Deputy Fourth Space Lord</p>\n            <p>Captain (JG) Erik Plossl<br />\n            Director of Software Development</p>\n        </div>\n    </div>\n</div>";
},"useData":true});