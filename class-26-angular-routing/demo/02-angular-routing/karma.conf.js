'use strict'

const webpack = require('./webpack.config.js')
delete webpack.entry

module.exports = function(config) {
  config.set({
    webpack,
    basePath: './',
    frameworks: ['jasmine'],
    files: [
      // {pattern: 'test/*-test.js', watched: false},
      {pattern: 'test/**/*-test.js', watched: false}
    ],
    exclude: [
    ],
    preprocessors: {
      // 'test/*-test.js': ['webpack'],
      'test/**/*-test.js': ['webpack']
    },
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity
  })
}
