'use strict';

var postCoordinates = require('./postCoordinates');

var showLocation = function(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  postCoordinates(latitude, longitude);
};

module.exports = showLocation;
