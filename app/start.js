const createWindow = require('./main/create-window')
const createUrls = require('./config/urls')
const utils = require('./utils')

module.exports = (window, app, basePath) => {

  const urls = createUrls(basePath)
  const startWindow = createWindow(window, app, urls)

  app.on('ready', startWindow)
  app.on('activate', startWindow)

  app.on('window-all-closed', () => {
    if (utils.process.platform !== 'darwin') {
      app.quit()
    }
  })

}
