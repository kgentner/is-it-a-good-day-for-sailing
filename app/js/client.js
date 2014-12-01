'use strict';
var geoLocate = require('./geoLocate');

//on load, run geolocate
(document).ready(function() {
  geoLocate();
}());
