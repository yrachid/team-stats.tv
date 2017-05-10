const configFile = require(__dirname + '/config-file.js');
const configDefaults = require(__dirname + '/config-defaults.js');

module.exports = {

  from: configFilePath => new Promise((resolve, reject) =>
    configFile(configFilePath)
      .then(configDefaults)
      .then(resolve)
      .catch(reject)
  )

};
