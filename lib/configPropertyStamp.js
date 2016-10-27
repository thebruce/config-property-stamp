'use strict';

const CONFIG = require('config');
const stamp = require('stampit');

module.exports = stamp()
  .deepProps({
    config: {}
  })
  .init(
    function init(configOverride) {
      if (typeof configOverride === 'string') {
        // We have a config override, please use this instead of default.
        this.config = CONFIG.util.makeImmutable(CONFIG.util.parseFile(configOverride));
      }
      else {
        if (!CONFIG.util.getConfigSources().length) {
          // No config available, this is a problem.
          throw new Error('No valid configuration was supplied.');
        }
        this.config = CONFIG.util.makeImmutable(CONFIG);
      }
    }
  );
