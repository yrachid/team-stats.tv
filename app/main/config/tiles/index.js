const read = require(__dirname + '/reader.js');
const validate = require(__dirname + '/validator.js');
const mergeDefaults = require(__dirname + '/defaults.js');

module.exports = {

  from: configFilePath => new Promise((resolve, reject) =>
    read(configFilePath)
      .then(validate)
      .then(mergeDefaults)
      .then(resolve)
      .catch(reject)
  )

};
