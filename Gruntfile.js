'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-jscs');

  grunt.initConfig({
    jshint: {
      all: ['public/*.js', 'server.js', 'test/sailing_test.js', 'Gruntfile.js'],
      options: {
        jshintrc: true
      }
    },

    jscs: {
      src: ['public/**/*.js', 'server.js', 'test/sailing_test.js',
      'Gruntfile.js'],
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
