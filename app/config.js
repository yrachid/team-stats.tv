const queryString = require('query-string');

const INDEX = `file://${__dirname}/index.html`;

module.exports = commandLineArguments => ({

  url: `${INDEX}?${queryString.stringify(commandLineArguments)}`,
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
