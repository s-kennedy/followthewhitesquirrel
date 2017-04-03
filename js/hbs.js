(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['bowie'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"overlay\"></div>\n<div class=\"text\">\n  <h2>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.bowie : depth0)) != null ? stack1.title : stack1), depth0))
    + "</h2>\n  <p>\n    "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.bowie : depth0)) != null ? stack1.bio : stack1), depth0))
    + "\n  </p>\n</div>";
},"useData":true});
templates['camping'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        <li>"
    + container.escapeExpression(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"label","hash":{},"data":data}) : helper)))
    + "</li>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "          <a data-scroll href=\""
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "\" class=\"button yellow\">"
    + alias4(((helper = (helper = helpers.anchor || (depth0 != null ? depth0.anchor : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"anchor","hash":{},"data":data}) : helper)))
    + "</a>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {};

  return "<div class=\"overlay\"></div>\n<div class=\"content\">\n  <div class=\"text\">\n    <h1 class=\"headline\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.camping : depth0)) != null ? stack1.headline : stack1), depth0))
    + "</h1>\n    <div class=\"product-highlight\">\n      <h3>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.camping : depth0)) != null ? stack1.product : stack1), depth0))
    + " - "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.camping : depth0)) != null ? stack1.price : stack1), depth0))
    + "</h3>\n    </div>\n    <div class=\"product-description\">\n      <p class=\"description\">"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.camping : depth0)) != null ? stack1.description : stack1), depth0)) != null ? stack1 : "")
    + "</p>\n      <h4 class=\"offer\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.camping : depth0)) != null ? stack1.offer : stack1)) != null ? stack1.whatWeOffer : stack1), depth0))
    + "</h4>\n      <ul class=\"included\">\n"
    + ((stack1 = helpers.each.call(alias3,((stack1 = ((stack1 = (depth0 != null ? depth0.camping : depth0)) != null ? stack1.offer : stack1)) != null ? stack1.items : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </ul>\n      <p class=\"customize\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.camping : depth0)) != null ? stack1.customize : stack1), depth0))
    + "</p>\n      <div class=\"call-to-action\">\n        <div class=\"actions\">\n"
    + ((stack1 = helpers.each.call(alias3,((stack1 = (depth0 != null ? depth0.camping : depth0)) != null ? stack1.actions : stack1),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\n      </div>\n    </div>\n  </div>\n</div>";
},"useData":true});
templates['contact'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"overlay\"></div>\n<div class=\"content\">\n  <h1 class=\"headline title-dark\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.contact : depth0)) != null ? stack1.contactUs : stack1), depth0))
    + "</h1>\n  <div class=\"form\">\n    <form id=\"contact-form\">\n      <div class=\"form-field\">\n        <label for=\"name\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.contact : depth0)) != null ? stack1.name : stack1), depth0))
    + "</label>\n        <input type=\"text\" name=\"name\">\n      </div>\n      <div class=\"form-field\">\n        <label for=\"email\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.contact : depth0)) != null ? stack1.email : stack1), depth0))
    + "</label>\n        <input type=\"email\" name=\"email\">\n      </div>\n      <div class=\"form-field\">\n        <label for=\"departure-date\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.contact : depth0)) != null ? stack1.departure : stack1), depth0))
    + "</label>\n        <input type=\"date\" name=\"departure-date\">\n      </div>\n      <div class=\"form-field\">\n        <label for=\"return-date\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.contact : depth0)) != null ? stack1["return"] : stack1), depth0))
    + "</label>\n        <input type=\"date\" name=\"return-date\">\n      </div>\n      <div class=\"form-field\">\n        <label for=\"message\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.contact : depth0)) != null ? stack1.message : stack1), depth0))
    + "</label>\n        <textarea name=\"message\"></textarea>\n      </div>\n      <div class=\"submit\">\n        <input type=\"submit\" name="
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.contact : depth0)) != null ? stack1.submit : stack1), depth0))
    + " class=\"button purple\">\n      </div>\n    </form>\n  </div>\n</div>";
},"useData":true});
templates['gallery'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"overlay\"></div>\n<div class=\"content\">\n  <h1 class=\"headline\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.gallery : depth0)) != null ? stack1.headline : stack1), depth0))
    + "</h1>\n\n  <div class=\"polaroid-images\">\n    <a href=\"\" title="
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.gallery : depth0)) != null ? stack1.baseCamp : stack1), depth0))
    + "><img height=\"180\" src=\"images/tienda.jpg\" alt=\"tent\" /></a>\n    <a href=\"\" title="
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.gallery : depth0)) != null ? stack1.reflections : stack1), depth0))
    + "><img height=\"180\" src=\"images/paisaje.jpg\" alt=\"reflections\"/></a>\n    <a href=\"\" title="
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.gallery : depth0)) != null ? stack1.morning : stack1), depth0))
    + "><img height=\"180\" src=\"images/morning.jpg\" alt=\"morning\"/></a>\n    <a href=\"\" title="
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.gallery : depth0)) != null ? stack1.canoes : stack1), depth0))
    + "><img height=\"180\" src=\"images/canoa.jpg\" alt=\"canoe\"/></a>\n    <a href=\"\" title="
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.gallery : depth0)) != null ? stack1.hike : stack1), depth0))
    + "><img height=\"180\" src=\"images/paseo.jpg\" alt=\"walking\"/></a>\n    <a href=\"\" title="
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.gallery : depth0)) != null ? stack1.sharonDani : stack1), depth0))
    + "><img height=\"180\" src=\"images/sharonanddani.jpg\" alt=\"Sharon and Dani\"/></a>\n  </div>\n</div>";
},"useData":true});
templates['hiking'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        <li>"
    + container.escapeExpression(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"label","hash":{},"data":data}) : helper)))
    + "</li>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "          <a data-scroll href=\""
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "\" class=\"button yellow\">"
    + alias4(((helper = (helper = helpers.anchor || (depth0 != null ? depth0.anchor : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"anchor","hash":{},"data":data}) : helper)))
    + "</a>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {};

  return "<div class=\"overlay\"></div>\n<div class=\"content\">\n  <div class=\"text\">\n    <h1 class=\"headline\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.hiking : depth0)) != null ? stack1.headline : stack1), depth0))
    + "</h1>\n    <div class=\"product-highlight\">\n      <h3>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.hiking : depth0)) != null ? stack1.product : stack1), depth0))
    + " - "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.hiking : depth0)) != null ? stack1.price : stack1), depth0))
    + "</h3>\n    </div>\n    <div class=\"product-description\">\n      <p class=\"description\">"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.hiking : depth0)) != null ? stack1.description : stack1), depth0)) != null ? stack1 : "")
    + "</p>\n      <h4 class=\"offer\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.hiking : depth0)) != null ? stack1.offer : stack1)) != null ? stack1.whatWeOffer : stack1), depth0))
    + "</h4>\n      <ul class=\"included\">\n"
    + ((stack1 = helpers.each.call(alias3,((stack1 = ((stack1 = (depth0 != null ? depth0.hiking : depth0)) != null ? stack1.offer : stack1)) != null ? stack1.items : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </ul>\n      <p>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.hiking : depth0)) != null ? stack1.customize : stack1), depth0))
    + "</p>\n      <p>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.hiking : depth0)) != null ? stack1.callToAction : stack1), depth0))
    + "</p>\n      <div class=\"call-to-action\">\n        <div class=\"actions\">\n"
    + ((stack1 = helpers.each.call(alias3,((stack1 = (depth0 != null ? depth0.hiking : depth0)) != null ? stack1.actions : stack1),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\n      </div>\n    </div>\n  </div>\n</div>";
},"useData":true});
templates['intro'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <a data-scroll href=\""
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "\" class=\"button "
    + alias4(((helper = (helper = helpers.btnColour || (depth0 != null ? depth0.btnColour : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"btnColour","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.anchor || (depth0 != null ? depth0.anchor : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"anchor","hash":{},"data":data}) : helper)))
    + "</a>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"overlay\"></div>\n<div class=\"content\">\n  <div class=\"text\">\n    <h1 class=\"greeting\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.intro : depth0)) != null ? stack1.invitation : stack1), depth0))
    + "</h1>\n    <p class=\"conversation\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.intro : depth0)) != null ? stack1.explanation : stack1), depth0))
    + "</p>\n    <div class=\"call-to-action\">\n      <p class=\"conversation\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.intro : depth0)) != null ? stack1.hikingOrCamping : stack1), depth0))
    + "</p>\n      <div class=\"actions\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.intro : depth0)) != null ? stack1.actions : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </div>\n    </div>\n  </div>\n</div>";
},"useData":true});
templates['landing'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"overlay\"></div>\n<div class=\"content\">\n  <div class=\"ftws\">\n    <p>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.landing : depth0)) != null ? stack1.title : stack1), depth0))
    + "</p>\n  </div>\n  <div class=\"text\">\n    <h1 class=\"headline\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.landing : depth0)) != null ? stack1.question : stack1), depth0))
    + "</h1>\n  </div>\n</div>\n";
},"useData":true});
templates['pricing'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <div class=\"pricing "
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">\n          <h2>"
    + alias4(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data}) : helper)))
    + "</h2>\n          <h3>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h3>\n          <h4>"
    + alias4(container.lambda(((stack1 = (depth0 != null ? depth0.offer : depth0)) != null ? stack1.included : stack1), depth0))
    + "</h4>\n          <ul class=\"included\">\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.offer : depth0)) != null ? stack1.items : stack1),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "          </ul>\n          <div class=\"action\">\n            <a data-scroll href=\"#contact\" class=\"button yellow\">Book it</a>\n          </div>\n        </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return "            <li>"
    + container.escapeExpression(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"label","hash":{},"data":data}) : helper)))
    + "</li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"overlay\"></div>\n<div class=\"content\">\n  <div class=\"columns\">\n    <h1 class=\"headline\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.pricing : depth0)) != null ? stack1.headline : stack1), depth0))
    + "</h1>\n    <div class=\"pricing-columns\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.pricing : depth0)) != null ? stack1.products : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n  </div>\n</div>";
},"useData":true});
templates['team'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <div class=\"member\">\n          <div class=\"team-picture\" id="
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + ">\n            <div class=\"greeting\">\n              <h3>"
    + alias4(((helper = (helper = helpers.greeting || (depth0 != null ? depth0.greeting : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"greeting","hash":{},"data":data}) : helper)))
    + "</h3>\n            </div>\n          </div>\n          <div class=\"description\">\n            <p>"
    + alias4(((helper = (helper = helpers.bio || (depth0 != null ? depth0.bio : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"bio","hash":{},"data":data}) : helper)))
    + "</p>\n            <p>"
    + alias4(((helper = (helper = helpers.languages || (depth0 != null ? depth0.languages : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"languages","hash":{},"data":data}) : helper)))
    + "</p>\n          </div>\n        </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"overlay\"></div>\n<div class=\"content\">\n  <div class=\"columns\">\n    <h1 class=\"headline\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.team : depth0)) != null ? stack1.headline : stack1), depth0))
    + "</h1>\n    <div class=\"team-members\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.team : depth0)) != null ? stack1.members : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n  </div>\n</div>";
},"useData":true});
})();