const { dialog } = require('electron');

const configuration = {
  json: {
    properties: ['openFile'],
    filters: [ { name: 'Configuration', extensions: ['json'] } ]
  }
};

module.exports = {
  json: () => dialog.showOpenDialog(configuration.json)
}
