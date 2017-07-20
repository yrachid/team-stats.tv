const configLoader = require('../../config-loader')

module.exports = (window, app) => ({
  label: 'Reconfigure...',
  accelerator: 'CommandOrControl+Shift+R',
  click() {
    configLoader
    .fromFileSystem()
    .then(config => {
      window.webContents.send('new-config', config)
    })
  }
})
