is it a good day for sailing?
==============================
###(salty seadog version)
<br>
<img src=https://travis-ci.org/kgentner/is-it-a-good-day-for-sailing.svg?branch=browserify></img>

<a href="https://isitagooddayforsailing.herokuapp.com/">Click here to see it on heroku</a>

###Summary
This application finds the current weather at the user's location and reports whether or not it is a good day to go sailing (using pirate vernacular).

###Details
Using HTML5's geolocate functionality, an AJAX 'post' request is used to send the latitude and longitude of the user to the server.
The server then sends a 'get' request to the Weather Underground API and parses the response to find the windspeed, outlook, and temperature.
Based on these responses, an answer is determined and returned.

###Technologies

####Main
* Node.js
* Express.js
* jQuery
* Grunt
* Browserify
* Bower

####Testing & Linting
* Mocha
* Chai
* Travis-CI
* JSHint
* JSCS

####Deployment
* Heroku
