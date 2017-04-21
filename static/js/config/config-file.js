const fs = require('fs');

module.exports = configFilePath => {
  try {
    const configFile = fs.readFileSync(configFilePath).toString();
    const config = JSON.parse(configFile);

    return config;
  } catch (e) {
    throw new Error(`Configuration Error: ${e.message}`);
  }
};
