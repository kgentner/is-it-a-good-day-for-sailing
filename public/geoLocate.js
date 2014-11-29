'use strict';
var $ = require('../jquery');
var showLocation = require('showLocation');

var geoLocate = function() {
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
};

module.exports = geoLocate;
