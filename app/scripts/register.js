$('document').ready(function() {
  //replace the event below with your own info. Can also be an array of objects containing event info.
var example = [
  {
     "date": "12th May 2016",
     "timing": "9.30am - 4.30pm",
     "where": "Open Data Institute, Leeds",
     "id" : "may16"
   }
];

var i;
for(i=0; i<example.length; i++) {
  var html = '<div class="col-lg-4 col-md-6 col-xs-12"><div class="jumbotron fadedback"><p><span>Date : </span>'+example[i].date+'</p><p><span>Time : </span>'+example[i].timing+'</p><p><span>Location : </span>'+example[i].where+'</p><a href="/signup.html?id='+example[i].id+'" id="'+example[i].id+'"><div class="register-button text-center"><p>Register</p></div></a></div></div>';

  $('#events').append(html);
};
});
