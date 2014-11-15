'use strict';
var chai = require('chai');
var chaihttp = require('chai-http');
var expect = chai.expect;

//require('../server');
chai.use(chaihttp);

//var port = process.env.PORT || 3000;
//var url = 'http://localhost:' + port;
var latitude = 37.77500916;
var longitude = -122.41825867;

var herokuUrl = 'https://isitagooddayforsailing.herokuapp.com/';
var wunderURL = 'http://api.wunderground.com/api/' + process.env.WUNDERAPI +
'/geolookup/conditions/q/' + latitude + ',' + longitude + '.json';

describe('Find Wunderground City with Latitude and Longitude', function() {
  it('should return the correct city', function(done) {
    chai.request(wunderURL)
    .get('/')
    .end(function(err, res) {
      //console.log(res.body);
      expect(res.body.location.city).to.eql('San Francisco');
      done();
    });
  });
});

describe('Heroku Up and Running', function() {
  it('should return html', function(done) {
    chai.request(herokuUrl)
      .post('/')
      .send({lat: latitude, lon: longitude})
      .end(function(err, res) {
        expect(err).to.be.eql(null);
        //console.log(res);
        //expect(res.body.msg).to.eql('YES' || 'NO');
        expect(res).to.be.html;
        done();
      });
  });
});
