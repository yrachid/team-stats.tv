const fs = require('fs');

module.exports = configFilePath => new Promise((resolve, reject) => {

  fs.readFile(configFilePath, (error, configContent) => {

    if (error) {
      return reject(new Error(`Could not read config file: ${error.message}`));
    }

    try {
      return resolve(JSON.parse(configContent.toString()));
    } catch (parsingError) {
      return reject(new Error(`Could not parse configuration: ${parsingError.message}`));
    }

  });

});
