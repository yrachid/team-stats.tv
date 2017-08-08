const {webContents} = require('electron');

module.exports = (window, app) => ({
  label: 'Clear Cache',
  accelerator: 'CommandOrControl+L',
  click() {
    webContents.getAllWebContents().forEach(wc => wc.session.clearStorageData())
    window.reload()
  }
})
