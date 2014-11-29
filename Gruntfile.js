'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-jscs');

  grunt.initConfig({
    jshint: {
      all: ['server.js',
      'public/app.js',
      'public/geoLocate.js',
      'public/showLocation.js',
      'public/postCoordinates.js',
      'Gruntfile.js',
      'test/sailing_test.js'],
      options: {
        jshintrc: true
      }
    },

    jscs: {
      src: ['server.js',
      'public/app.js',
      'public/geoLocate.js',
      'public/showLocation.js',
      'public/postCoordinates.js',
      'Gruntfile.js',
      'test/sailing_test.js'],
      options: {
        config: '.jscsrc'
      }
    },

    simplemocha: {
      src: ['test/**/*.js'],
      options: {
        timeout: 3000
      }
    }
  });
  grunt.registerTask('test', ['jshint', 'jscs', 'simplemocha']);
  grunt.registerTask('default', ['test']);
};
