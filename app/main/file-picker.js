const { dialog } = require('electron')

const configuration = {
  json: {
    properties: ['openFile'],
    filters: [ { name: 'Configuration', extensions: ['json'] } ]
  }
}

module.exports = {
  json: () => new Promise((resolve, reject) => {
    const selectedFileList = dialog.showOpenDialog(configuration.json)

    return selectedFileList
      ? resolve(selectedFileList[0])
      : reject(new Error('No file was selected'))
  })
}
