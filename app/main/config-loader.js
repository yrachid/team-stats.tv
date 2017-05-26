const tileConfig = require('../config/tiles')
const filePicker = require('./file-picker')

module.exports = {
    fromFileSystem: () => new Promise((resolve, reject) => {

        const configPath = filePicker.json()

        if (!configPath) {
            return resolve(configPath)
        }

        tileConfig
      .fromFile(configPath[0])
      .then(resolve)
      .catch(reject)
    })

}
