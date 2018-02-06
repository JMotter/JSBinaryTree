// karma.conf.js
module.exports = function(config) {
  config.set({
    basePath: '',

    frameworks: ['requirejs', 'mocha', 'sinon'],

    files: [
      'node_modules/mocha/mocha.js',
      'node_modules/sinon/pkg/sinon.js',
      //'test/jsBinaryTree.html',
      //'src/*.js',
      'test/*.js'
    ],

    exclude: [],
    preprocessors: {
      //'src/*.js': ['babel'],
      'test/*.js': ['babel']
    },
    babelPreprocessor: {
      options: {
        presets: ['@babel/env']
      }
    },
    reporters: ['progress'],
    port: 9875,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false
  });
};
