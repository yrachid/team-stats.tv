const fs = require('fs')

module.exports = configFilePath => new Promise((resolve, reject) =>

    fs.readFile(configFilePath, (error, configContent) =>
      error
      ? reject(error)
      : resolve(configContent.toString())
    )
)
