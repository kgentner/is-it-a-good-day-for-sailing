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
var wunderURL = 'http://api.wunderground.com/api/' + process.env.WUNDERAPI +
'/geolookup/conditions/q/' + latitude + ',' + longitude + '.json';

describe('Find Wunderground City with Latitude and Longitude', function() {
  it('should return the correct city', function(done) {
    chai.request(wunderURL)
    .get('/')
    .end(function(err, res) {
      console.log(res.body);
      expect(res.body.location.city).to.eql('San Francisco');
      done();
    });
  });
});

// describe('Yes or No', function() {
//   it('should return a message of Yes or No', function(done) {
//     console.log(url, latitude, longitude);
//     chai.request(url)
//       .post('/')
//       .send({lat: latitude, lon: longitude})
//       .end(function(err, res) {
//         expect(err).to.be.eql(null);
//         expect(res.body.msg).to.eql('YES' || 'NO');
//         done();
//       });
//   });
// });
