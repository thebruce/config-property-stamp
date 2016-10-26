'use strict';

const path = require('path');
const ConfigPropertyStamp = require('../lib/configPropertyStamp.js');
// Set up stamp factory.

module.exports = {
  configPassConfigTest: function configPassConfigTester(test) {
    test.expect(1);
    test.deepEqual(
      ConfigPropertyStamp.create(
         path.join(__dirname, 'testconfig', 'default.json')
        ).config,
      {item1: 'this'},
      'Config loaded from a passed location should load.'
    );
    test.done();
  }
};
