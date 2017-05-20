module.exports = configuration => new Promise((resolve, reject) => {

  if (!configuration.tiles) {
    return reject(new Error('Config file has no \'tiles\' section, or \'tiles\' is falsy.'));
  }

  if (configuration.tiles.constructor.name !== 'Array') {
    return reject(new Error('The \'tiles\' section of config file is not an Array. It should be. With items on it.'));
  }

  if (configuration.tiles.length === 0) {
    return reject(new Error('The \'tiles\' array must have items'));
  }

  return resolve(configuration);

});
