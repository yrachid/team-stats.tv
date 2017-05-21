const Ajv = require('ajv');
const schema = require('./schema');
const read = require(__dirname + '/reader.js');
const validator = require(__dirname + '/validator.js');
const mergeDefaults = require(__dirname + '/defaults.js');

const validate = validator(new Ajv(), schema);

module.exports = {

  from: configFilePath => new Promise((resolve, reject) =>
    read(configFilePath)
      .then(validate)
      .then(mergeDefaults)
      .then(resolve)
      .catch(reject)
  )

};
