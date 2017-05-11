$(function(){

  function loadContent(text) {
    $('section#landing').html(Handlebars.templates.landing(text))
    $('section#intro').html(Handlebars.templates.intro(text))
    $('section#camping').html(Handlebars.templates.camping(text))
    $('section#hiking').html(Handlebars.templates.hiking(text))
    $('section#pricing').html(Handlebars.templates.pricing(text))
    $('section#team').html(Handlebars.templates.team(text))
    $('section#gallery').html(Handlebars.templates.gallery(text))
    $('section#contact').html(Handlebars.templates.contact(text))
    $('footer#footer').html(Handlebars.templates.footer(text))
  };


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

  loadContent(EN_CONTENT);
  initalizeDatePickers();
  smoothScroll.init();

  $('form#contact-form').on('submit', sendContactFormData);
  $('#en').on('click', function(e) {
    e.preventDefault();
    loadContent(EN_CONTENT);
  });
  $('#es').on('click', function(e) {
    e.preventDefault();
    loadContent(ES_CONTENT);
  });
});