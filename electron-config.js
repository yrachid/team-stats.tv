const queryString = require('query-string');

const INDEX = `file://${__dirname}/index.html`;

module.exports = commandLineArguments => ({

  url: `${INDEX}?${queryString.stringify(commandLineArguments)}`,
  browserWindowConfiguration: {
    fullscreen: true,
    webPreferences: {
      experimentalFeatures: true,
    }
  }

});
