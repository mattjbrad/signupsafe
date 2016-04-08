$('document').ready(function() {
var fn = getUrlParameter('first_name');
var ln = getUrlParameter('last_name');
var co = getUrlParameter('company');
var em = getUrlParameter('email');
var mo = getUrlParameter('month');

var data = {
  "first_name": fn,
  "last_name": ln,
  "company": co,
  "email": em,
  "month": mo,
  "_id": em
};

console.log(data);

$.ajax({
      type: "POST",
      url: "REPLACE WITH CLOUDANT URL", //replace with cloudant URL e.g. https://account.cloudant.com/database/
      data: JSON.stringify(data),
      success: function(e) {
        $('#prepend').empty();
        $('#prepend').append('<p>Thank you for registering. You will receive an email to confirm your spot at the lab. See you there!</p>');
        },
      error: function(e) {
        console.log(e);
        $('#prepend').empty();
        $('#prepend').append('<p>Your email is already registered for a hands on lab event. Please contact YOUR_EMAIL if you wish to change your registration</p>')  ; // replace YOUR_EMAIL with your email
      },
      contentType: "application/json"
    });

});


var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;
    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};
