const fs = require('fs');
const utils = require('../../utils');

module.exports = configFilePath => new Promise((resolve, reject) => {

  fs.readFile(configFilePath, (error, configContent) => {

    return error
      ? reject(error)
      : resolve(configContent.toString());

  });

});
