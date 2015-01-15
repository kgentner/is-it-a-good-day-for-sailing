'use strict';
var chai = require('chai');
var chaihttp = require('chai-http');
var expect = chai.expect;

chai.use(chaihttp);
require('../server');

var latitude = 37.77500916;
var longitude = -122.41825867;

var herokuUrl = 'https://isitagooddayforsailing.herokuapp.com/';
var wunderURL = 'http://api.wunderground.com/api/' + process.env.WUNDERAPI +
'/geolookup/conditions/q/' + latitude + ',' + longitude + '.json';

describe('Server API', function() {
  it('should return JSON with a pirate-language version of NO or YES', function(done) {
    chai.request('http://localhost:3000')
    .post('/')
    .type('form')
    .send({lat:latitude, lon: longitude})
    .end(function(err, res) {
      expect(err).to.eql(null);
      expect('Content-Type', /json/);
      expect(res.body.msg).to.equal(
        'Arrr!  It\'s not in the starrrs today.' || 'Ahoy Matey, Hoist the Jolly Roger and Set Sail!');
      done();
    });
  });
});

describe('Wunderground API with Latitude and Longitude', function() {
  it('should return the correct city', function(done) {
    chai.request(wunderURL)
    .get('/')
    .end(function(err, res) {
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
        expect(res.type).to.eql('text/html');
        done();
      });
  });
});
