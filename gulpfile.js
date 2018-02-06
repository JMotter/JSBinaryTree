'use strict';

// This task is not being used.  Testing is done in mocha rather than karma.

let gulp = require('gulp');
let util = require('gulp-util');
let karma = require('karma').Server;

gulp.task('test', () => {
  util.log('Starting to test');
  new karma({
    configFile: __dirname + '/karma.conf.js',
    exclude: [],
    singleRun: true
  }, done).start();

  function done(result) {
    util.log('Testing finished with a return code of:' + result);
  }
});

module.exports = gulp;
