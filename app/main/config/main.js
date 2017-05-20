const queryString = require('query-string');

const FILE_PATH = `file://${__dirname}`
const INDEX = `${FILE_PATH}/render/index.html`;
const ERROR = `${FILE_PATH}/render/error.html`;

module.exports = {

  urls: {
    index: INDEX,
    error: err => `${ERROR}?${queryString.stringify({message: err.message})}`
  },
  browserWindow: {
    fullscreen: true,
    webPreferences: {
      experimentalFeatures: true,
    }
  },
  fileDialog: {
    properties: ['openFile'],
    filters: [
      { name: 'Configuration', extensions: ['json'] }
    ]
  }
};
