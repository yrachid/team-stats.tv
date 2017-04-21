const configFile = require(__dirname + '/config-file.js');

module.exports = {

  from: (configFilePath, callback) => {
    try {
      const config = configFile(configFilePath);
      return callback(null, config);
    } catch (e) {
      return callback(e);
    };
  }

};
