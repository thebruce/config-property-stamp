'use strict';

const path = require('path');
// Need to get clean versions to test with env variables.
delete require.cache[require.resolve('../lib/configPropertyStamp.js')];
delete require.cache[require.resolve('config')];
// set up config dirs.
process.env.NODE_CONFIG_DIR = path.join(__dirname, 'config');
// And require here so that later requires will use this cached version.

const config = require('config'); // eslint-disable-line no-unused-vars
const ConfigPropertyStamp = require('../lib/configPropertyStamp.js');

module.exports = {
  configDefaultConfigTest: function configDefaultConfigTester(test) {
    // Alter Node defaults for testing.
    test.expect(1);
    test.deepEqual(
      ConfigPropertyStamp.create().config,
      {item1: 'that'},
      'Config loaded from a passed location should load.'
    );
    // Clean up.
    delete require.cache[require.resolve('../lib/configPropertyStamp.js')];
    delete require.cache[require.resolve('config')];
    test.done();
  }
};
