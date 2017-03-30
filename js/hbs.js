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
templates['contact'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"overlay\"></div>\n<div class=\"form\">\n<h2 class=\"title-dark\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.contact : depth0)) != null ? stack1.contactUs : stack1), depth0))
    + "</h2>\n  <form action=\"https://script.google.com/macros/s/AKfycbxb2hQxFXnKvKA67YG2YngTv5zLea5mPjsIecjslySsOG_X7_xp/exec\">\n    <div class=\"form-field\">\n      <label for=\"name\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.contact : depth0)) != null ? stack1.name : stack1), depth0))
    + "</label>\n      <input type=\"text\" name=\"name\" autofocus>\n    </div>\n    <div class=\"form-field\">\n      <label for=\"email\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.contact : depth0)) != null ? stack1.email : stack1), depth0))
    + "</label>\n      <input type=\"email\" name=\"email\">\n    </div>\n    <div class=\"form-field\">\n      <label for=\"departure-date\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.contact : depth0)) != null ? stack1.departure : stack1), depth0))
    + "</label>\n      <input type=\"date\" name=\"departure-date\">\n    </div>\n    <div class=\"form-field\">\n      <label for=\"return-date\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.contact : depth0)) != null ? stack1["return"] : stack1), depth0))
    + "</label>\n      <input type=\"date\" name=\"return-date\">\n    </div>\n    <div class=\"form-field\">\n      <label for=\"message\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.contact : depth0)) != null ? stack1.message : stack1), depth0))
    + "</label>\n      <textarea name=\"message\"></textarea>\n    </div>\n    <div class=\"submit\">\n      <input type=\"submit\" name="
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.contact : depth0)) != null ? stack1.submit : stack1), depth0))
    + " class=\"btn\">\n    </div>\n  </form>\n</div>";
},"useData":true});
templates['gallery'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"polaroid-images\">\n  <a href=\"\" title="
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.gallery : depth0)) != null ? stack1.baseCamp : stack1), depth0))
    + "><img height=\"180\" src=\"pictures/tienda.jpg\" alt=\"tent\" title=\"tent\" /></a>\n  <a href=\"\" title="
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.gallery : depth0)) != null ? stack1.reflections : stack1), depth0))
    + "><img height=\"180\" src=\"pictures/paisaje.jpg\" alt=\"reflections\" title=\"reflections\" /></a>\n  <a href=\"\" title="
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.gallery : depth0)) != null ? stack1.morning : stack1), depth0))
    + "><img height=\"180\" src=\"pictures/morning.jpg\" alt=\"morning\" title=\"morning\" /></a>\n  <a href=\"\" title="
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.gallery : depth0)) != null ? stack1.canoes : stack1), depth0))
    + "><img height=\"180\" src=\"pictures/canoa.jpg\" alt=\"canoe\" title=\"canoe\" /></a>\n  <a href=\"\" title="
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.gallery : depth0)) != null ? stack1.hike : stack1), depth0))
    + "><img height=\"180\" src=\"pictures/paseo.jpg\" alt=\"walking\" title=\"walking\" /></a>\n  <a href=\"\" title="
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.gallery : depth0)) != null ? stack1.sharonDani : stack1), depth0))
    + "><img height=\"180\" src=\"pictures/sharonanddani.jpg\" alt=\"Sharon and Dani\" title=\"Sharon and Dani\" /></a>\n</div>";
},"useData":true});
templates['intro'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"overlay\"></div>\n<div class=\"text\">\n  <h2>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.intro : depth0)) != null ? stack1.mission : stack1), depth0))
    + "</h2>\n</div>";
},"useData":true});
templates['landing'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"overlay\"></div>\n<div class=\"title\">\n  <h1>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.landing : depth0)) != null ? stack1.title : stack1), depth0))
    + "</h1>\n  <h2>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.landing : depth0)) != null ? stack1.tagline : stack1), depth0))
    + "</h2>\n</div>\n";
},"useData":true});
templates['team'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div id=\"dani\" class=\"member\">\n  <div class=\"team-picture\">\n    <img src=\"pictures/dani.jpg\" alt=\"Dani\">\n  </div>\n  <p>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.team : depth0)) != null ? stack1.dani : stack1), depth0))
    + "</p>\n</div>\n<div id=\"sharon\" class=\"member\">\n  <div class=\"team-picture\">\n    <img src=\"pictures/sharon.jpg\" alt=\"Sharon\">\n  </div>\n  <p>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.team : depth0)) != null ? stack1.sharon : stack1), depth0))
    + "</p>\n</div>";
},"useData":true});
})();