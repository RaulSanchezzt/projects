//jshint strict: false
exports.config = {
  seleniumAddress: 'http://selenium-hub:4444/wd/hub',
  
  onPrepare: function () {
    browser.driver.manage().window().maximize();
},

  allScriptsTimeout: 11000,

  specs: ['../e2e-tests/src/Features/*.feature'],

  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--window-size=1200,900']
    }
  },


  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'), // Here it is

  cucumberOpts: {
    format: [require.resolve('cucumber-pretty')],
    require: '../e2e-tests/src/step_definitions/mysteps.js' // This is where we'll be writing our actual tests
  },

};
