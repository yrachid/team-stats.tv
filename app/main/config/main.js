const queryString = require('query-string');

const FILE_PATH = `file://${process.cwd()}`
const INDEX = `${FILE_PATH}/app/render/index.html`;
const ERROR = `${FILE_PATH}/app/render/error.html`;
const DEFAULT = `${FILE_PATH}/app/render/default.html`;

module.exports = {

  urls: {
    index: INDEX,
    default: DEFAULT,
    error: err => `${ERROR}?${queryString.stringify({message: err.message})}`
  },
  browserWindow: {
    fullscreen: true,
    webPreferences: {
      experimentalFeatures: true,
    }
  }
};
