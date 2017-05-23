const fs = require('fs');
const utils = require('../../utils');

module.exports = configFilePath => new Promise((resolve, reject) => {

  fs.readFile(configFilePath, (error, configContent) => {

    if (error) {
      return reject(new Error(`Could not read config file: ${error.message}`));
    }

    try {
      return resolve(utils.json.parse(configContent.toString()));
    } catch (parsingError) {
      return reject(new Error(`Could not parse configuration: ${parsingError.message}`));
    }

  });

});
