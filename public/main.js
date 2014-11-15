'use strict';

function showLocation(position) {
  //determine latitude and longitude
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;

  //make a post request via ajax to the server
  //sending latitude and longitude in json
  //expect a 'yes' or 'no' response
  $.ajax({
    url: '/',
    type: 'POST',
    data: {lat:latitude, lon: longitude},
    success: function(data) {
      console.log(data);
      if (data.msg === 'YES') {
        $('#answer').html('<p id="yes">' + data.msg + '</p>');
      } else {
        $('#answer').html('<p id="no">' + data.msg + '</h1>');
      }
    }
  });
}

//Run HTML5 Geolocation on load
(document).ready(function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showLocation, function(err) {
      if (err) {
        $('#answer')
        .html('<p>You Must Allow Access to Your Location to Find Out.</p>');
      }
    });
  } else {
    $('#answer').html('<p>Unable to Locate You.</p>');
  }
}());
