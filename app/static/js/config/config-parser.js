const assert = require('assert');

module.exports = configuration => {

  assert.ok(configuration.tiles, 'The tiles section in configuration file is mandatory');
  assert.equal(configuration.tiles.constructor.name, 'Array', 'The tiles section in configuration file must be an Array');

  return configuration;

};
