'use strict';

// Need to get clean versions to test with env variables.
delete require.cache[require.resolve('../lib/configPropertyStamp.js')];
delete require.cache[require.resolve('config')];

process.env.NODE_CONFIG_DIR = '';

const config = require('config'); // eslint-disable-line no-unused-vars
const ConfigPropertyStamp = require('../lib/configPropertyStamp.js');

module.exports = {
  configDefaultConfigTest: function configDefaultConfigTester(test) {
    // Alter Node defaults for testing.
    test.expect(1);
    test.throws(() => {
      ConfigPropertyStamp.create(); // eslint-disable-line no-new
    }, 'Empty object did not raise exception.');
    // Clean up.
    delete require.cache[require.resolve('../lib/configPropertyStamp.js')];
    delete require.cache[require.resolve('config')];
    test.done();
  }
};
