define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["templates/login/LoginTemplate"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"wrapperFixed wrapper-primaryImage\">\n    <div class=\"frame\">\n        <div class=\"gapTop-primary smallPanel\">\n            <div class=\"well\">\n                <form novalidate=\"novalidate\" class=\"form-horizontal\">\n                    <h2 class=\"hd hd_3 text-center\">"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "</h2>\n                    <div class=\"control-group\">\n                        <input class=\"required\" type=\"email\" placeholder=\"Email\" name=\"emailAddress\" value=\"\">\n                    </div>\n                    <div class=\"control-group\">\n                        <input class=\"required\" type=\"password\" placeholder=\"Password\" name=\"password\" value=\"\">\n                    </div>\n                    <div class=\"control-group\">\n                        <button type=\"submit\" class=\"btn btn-primary js-loginBtn\">Sign in</button>\n                    </div>\n                    <p><a href=\"#\" class=\"online-only\">Forgot your password?</a></p>\n                </form>\n            </div>\n            <!-- /well -->\n        </div>\n        <!-- /gapTop-primary -->\n    </div>\n    <!-- /frame -->\n</div>\n<!-- /wrapperBackground -->\n";
},"useData":true});

return this["JST"];

});