const { dialog } = require('electron')

const configuration = {
    json: {
        properties: ['openFile'],
        filters: [ { name: 'Configuration', extensions: ['json'] } ]
    }
}

module.exports = {
    json: () => {
      const selectedFileList = dialog.showOpenDialog(configuration.json)

      return selectedFileList
      ? selectedFileList[0]
      : null
    }
}
