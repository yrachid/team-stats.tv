const queryString = require('query-string');

const FILE_PATH = `file://${__dirname}`
const INDEX = `${FILE_PATH}/index.html`;
const ERROR = `${FILE_PATH}/error.html`;

module.exports = commandLineArguments => ({

  url: `${INDEX}?${queryString.stringify(commandLineArguments)}`,
  urls: {
    index: `${INDEX}?${queryString.stringify(commandLineArguments)}`,
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
  },

  remoteAddress: commandLineArguments.remote ? `http://${commandLineArguments.remote}`: ''

});
