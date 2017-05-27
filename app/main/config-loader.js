const tileConfig = require('../config/tiles')
const filePicker = require('./file-picker')

module.exports = {

    fromFileSystem: () => {
      const selectedFile = filePicker.json()

      return selectedFile
      ? tileConfig.fromFile(selectedFile)
      : new Promise(resolve => resolve(selectedFile))
    }

}
