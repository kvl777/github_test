exports.config = {
  directConnect: true,

 capabilities: {
    'browserName': 'chrome'
  },

  framework: 'jasmine',

  specs: ['../Test/*_spec.js'],

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};







