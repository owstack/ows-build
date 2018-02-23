'use strict';

process.env.CHROME_BIN = require('puppeteer').executablePath()

// karma.conf.js
module.exports = function(config) {

  config.set({
    browsers: ['ChromeHeadlessNoSB'],
    frameworks: ['mocha'],
    singleRun: true,
    files: [
      './../../../tests.js' // project root
    ],
    plugins: [
      'karma-mocha',
      'karma-chrome-launcher'
    ],
    customLaunchers: {
      ChromeHeadlessNoSB: {
        base: 'Chrome',
        flags: [
          '--disable-gpu',
          '--headless',
          '--no-sandbox',
          '--remote-debugging-port=9222',
        ],
      },
    }
  });

};
