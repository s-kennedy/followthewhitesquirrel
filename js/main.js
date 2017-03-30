$(function(){
  $('header#landing').html(Handlebars.templates.landing(EN_CONTENT))
  $('section#intro').html(Handlebars.templates.intro(EN_CONTENT))
  $('section#team').html(Handlebars.templates.team(EN_CONTENT))
  $('section#bowie').html(Handlebars.templates.bowie(EN_CONTENT))
  $('section#gallery').html(Handlebars.templates.gallery(EN_CONTENT))
  $('section#contact').html(Handlebars.templates.contact(EN_CONTENT))
});