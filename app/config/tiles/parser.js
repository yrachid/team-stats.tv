const utils = require('../../utils')

module.exports = data => new Promise((resolve, reject) => {

    try {
        return resolve(utils.json.parse(data))
    } catch (error) {
        return reject(error)
    }

})
