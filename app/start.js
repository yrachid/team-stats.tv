const createWindow = require('./main/create-window')
const createMenu = require('./main/menu')
const createUrls = require('./config/urls')

module.exports = (window, app, basePath) => {

  const menu = createMenu(window, app)
  const urls = createUrls(basePath)
  const startWindow = createWindow(window, menu, urls)

  app.on('ready', () => {
      startWindow()
  })

  app.on('window-all-closed', () => {
      if (process.platform !== 'darwin') {
          app.quit()
      }
  })

  app.on('activate', () => {
      if (window === null) {
          startWindow()
      }
  })

}
