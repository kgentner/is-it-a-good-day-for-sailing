'use strict';
var $ = require('jquery');

//make a post request via ajax to the server
//sending latitude and longitude in json
//expect a 'yes' or 'no' response
var postCoordinates = function(latitude, longitude) {
  $.ajax({
    url: '/',
    type: 'POST',
    data: {lat:latitude, lon: longitude},
    success: function(data) {
      if (data.msg === 'YES') {
        $('#answer').html('<p id="yes">' + data.msg + '</p>');
      } else {
        $('#answer').html('<p id="no">' + data.msg + '</h1>');
      }
    }
  });
};

module.exports = postCoordinates;
