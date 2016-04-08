$('document').ready(function() {
  //replace the event below with your own info. Can also be an array of objects containing event info.
var example = [
 {
    "date": "12th May 2016",
    "timing": "9.30am - 4.30pm",
    "where": "Open Data Institue, Leeds",
    "id" : "may16"
  }
];

var id = getUrlParameter('id');
var index = -1;
//make sure the IDs below match those above and the index matches
if (id==='may16') {
  index = 0;
}

var details = '<p><span>Date : </span>'+example[index].date+'</p><p><span>Time : </span>'+example[index].timing+'</p><p><span>Location : </span>'+example[index].where+'</p>'

$('#prepend').prepend(details);

$('#submitForm').append('<input type="hidden" name="month" id="month" value='+id+' />');

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
