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
  $('footer#footer').html(Handlebars.templates.footer(EN_CONTENT))

  function postToGoogleSheets (data) {
    var url = 'https://script.google.com/macros/s/AKfycbxb2hQxFXnKvKA67YG2YngTv5zLea5mPjsIecjslySsOG_X7_xp/exec'

    $.ajax({
      url: url,
      data: data,
      type: 'POST',
      success: function(res, status) {
        console.log(status);
        document.getElementById('contact-form').reset();
        smoothScroll.animateScroll(document.getElementById('landing'));
      },
      error: function(res) {
        console.log(res);
      }
    })
  };

  function sendContactFormData (e) {
    e.preventDefault();
    var dataArray = $(this).serializeArray();
    var formData = {};
    dataArray.forEach(function(field) {
      formData[field.name] = field.value
    });
    postToGoogleSheets(formData);
  };

  function nextDay(date) {
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    return new Date(year, month, day + 1);
  }

  function initalizeDatePickers() {
    var departureDate = nextDay(new Date())
    var departureDateField = document.querySelector('input[name="departure-date"');
    var returnDateField = document.querySelector('input[name="return-date"');
    var returnDatePicker = new Pikaday({ field: returnDateField });
    var departureDatePicker = new Pikaday({
      field: departureDateField,
      minDate: departureDate,
      defaultDate: departureDate,
      onSelect: function(e) {
        var minReturnDate = nextDay(e);
        returnDatePicker.setMinDate(minReturnDate);
      }
    });
  }

  $('form#contact-form').on('submit', sendContactFormData);
  initalizeDatePickers();

});