const tileConfig = require('../config/tiles')
const filePicker = require('./file-picker')

module.exports = {

  fromFileSystem: () => filePicker.json().then(tileConfig.fromFile)
    
}
