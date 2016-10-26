[![Build Status](https://travis-ci.org/thebruce/version-attribute.svg?branch=master)](https://travis-ci.org/thebruce/config-property-stamp)
[![Coverage Status](https://coveralls.io/repos/github/thebruce/config-property-stamp/badge.svg)](https://coveralls.io/github/thebruce/config-property-stamp)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

# Config Property Stamp

A stamp (a composeable factory function) for use with [stamp-it](https://www.npmjs.com/package/stampit) that creates a deep property called config storing information from [config](https://www.npmjs.com/package/config) with its' cascading configuration capabilities or an override with an arbitary configuration file you provide.

By itself you aren't gaining much, used in combination with other stamps you gain the composeable power to add the consistent config interface of the config module in an expected way.

## For more information on using config

You can find detailed instructions on using config on the [node-config wiki pages](https://github.com/lorenwest/node-config/wiki);

## Usage
* You need a configuration file, either an arbitrary file or in your Env config folder per config.

* For loading up an arbitrary single config file:
```javascript
// for a config file in the following path  {thepathWherethisCodeExecutes}/test/config.json
// with the following config
// {"item1": "test"}

const path = require('path');
// Factory Function.
const ConfigPropertyStamp = require('config-property-stamp');
const configPropertyStamp = ConfigPropertyStamp.create(path.join(__dirname, 'test', 'default.json'));
// configPropertyStamp is {item1: test}
```

* For loading up config from default config module location:
```javascript
// for a config file in the following path in your module config/default.json
// with the following config
// {"item1": "test2"}

const path = require('path');
const ConfigPropertyStamp = require('config-property-stamp');
// Looks for config in /config and cascades it all together.
const configPropertyStamp = ConfigPropertyStamp.create();
// configPropertyStamp is {item1: test2}
```
