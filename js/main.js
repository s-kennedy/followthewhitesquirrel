$(function(){
  smoothScroll.init();
  $('section#landing').html(Handlebars.templates.landing(EN_CONTENT))
  $('section#intro').html(Handlebars.templates.intro(EN_CONTENT))
  $('section#camping').html(Handlebars.templates.camping(EN_CONTENT))
  $('section#hiking').html(Handlebars.templates.hiking(EN_CONTENT))
  $('section#pricing').html(Handlebars.templates.pricing(EN_CONTENT))
  $('section#team').html(Handlebars.templates.team(EN_CONTENT))
  $('section#gallery').html(Handlebars.templates.gallery(EN_CONTENT))
  $('section#contact').html(Handlebars.templates.contact(EN_CONTENT))

  function sendGuestData (data) {
    var url = 'https://script.google.com/macros/s/AKfycbxb2hQxFXnKvKA67YG2YngTv5zLea5mPjsIecjslySsOG_X7_xp/exec'

    $.ajax({
      url: url,
      data: data,
      type: 'POST',
      success: function(res, status) {
        console.log(res)
        console.log(status)
      },
      error: function(res) {
        console.log(res)
      }
    })
  }

  $('form#contact-form').on('submit', function(e) {
    e.preventDefault();
    debugger;
    var data = new FormData(this);
    console.log(data)
    sendGuestData(data);
  })
});