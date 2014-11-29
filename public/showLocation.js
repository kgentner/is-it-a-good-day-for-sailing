'use strict';

var postCoordinates = require('./postCoordinates');

var showLocation = function(position) {
  //determine latitude and longitude
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;

  //make a post request via ajax to the server
  //sending latitude and longitude in json
  //expect a 'yes' or 'no' response
  postCoordinates(latitude, longitude);
};

module.exports = showLocation;
