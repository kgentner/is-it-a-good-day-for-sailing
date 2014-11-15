'use strict';
var chai = require('chai');
var chaihttp = require('chai-http');
var request = require('superagent');
var expect = chai.expect;

require('../server');
chai.use(chaihttp);
var port = process.env.PORT || 3000;

var url = 'http://localhost:' + port;
describe('Checking if sailing conditions are good', function() {
  it('should return a \'yes\' or \'no\' answer', function(done) {
    chai.request(url)
    .post('/', function(req, res) {
      var wunderURL =
      'http://api.wunderground.com/api/' + process.env.WUNDERAPI +
      '/geolookup/conditions/q/47,-122.json';

      request
        .get(wunderURL)
        .end(function(err, wunderData) {
          var answer;
          var parsedData = JSON.parse(wunderData.text);
          //console.log(parsedData.current_observation);
          var knots = (parsedData.current_observation.wind_mph) * (0.87);
          var outlook = parsedData.current_observation.weather;
          var temperature = parsedData.current_observation.temp_f;

          //test that the parsed data is the right type.
          expect(Number(temperature)).to.be.a('number');

          if (((knots > 5) && (knots < 12)) &&
              (temperature > 40) &&
              (outlook === 'Partly Cloudy' || 'Clear' || 'Sunny'))
          {
            answer = 'YES';
          } else {
            answer = 'NO';
          }
          res.json(answer);
        });
    })
    .end(function(err, res) {
      expect(err).to.be.eql(null);
      expect(res.body).to.include.keys('temp');
      done();
    });
  });
});
