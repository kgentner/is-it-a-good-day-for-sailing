'use strict';

var express = require('express');
var request = require('superagent');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname + '/build'));
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', function(req, res) {
  var latitude = req.body.lat;
  var longitude = req.body.lon;
  var wunderURL = 'http://api.wunderground.com/api/' + process.env.WUNDERAPI +
      '/geolookup/conditions/q/' + latitude + ',' + longitude + '.json';

  //superagent sends get request to wunderground weather
  request
    .get(wunderURL)
    .end(function(err, wunderData) {
      var parsedData = JSON.parse(wunderData.text);

      var knots = (parsedData.current_observation.wind_mph) * (0.87);
      var outlook = parsedData.current_observation.weather;
      var temperature = parsedData.current_observation.temp_f;

      var answer = (((knots > 5) && (knots < 12)) && (temperature > 40) &&
        (outlook === 'Partly Cloudy' || outlook === 'Clear' || outlook === 'Sunny')) ?
      'Ahoy Matey, Hoist the Jolly Roger and Set Sail!' : 'Arrr!  It\'s not in the starrrs today.';
      //the answer is returned as json to $ajax call in main.js
      res.json({msg: answer});
    });
});

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
  console.log('server running on port: %d', app.get('port'));
});
