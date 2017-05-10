module.exports = configuration => new Promise((resolve, reject) => {

  if (!configuration.tiles) {
    return reject(new Error('The tiles section in configuration file is mandatory'));
  }

  if (configuration.tiles.constructor.name !== 'Array') {
    return reject(new Error('The tiles section in configuration file must be an Array'));
  }

  if (configuration.tiles.length === 0) {
    return reject(new Error('The tiles array must have items'));
  }

  return resolve(configuration);

});
