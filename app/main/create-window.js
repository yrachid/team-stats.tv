const queryString = require('query-string')
const {BrowserWindow, Menu} = require('electron')
const configLoader = require('./config-loader')
const createMenus = require('./menu')

const windowConfiguration = {
  fullscreen: true,
  webPreferences: {
    experimentalFeatures: true,
  }
}

module.exports = (window, app, urls) => () => {

  if (window === null) {
    window = new BrowserWindow(windowConfiguration)

    const menu = createMenus(window, app)

    Menu.setApplicationMenu(menu)

    window.on('closed', () => window = null)

    configLoader
    .fromFileSystem()
    .then(config => {

      if (!config) {
        return window.loadURL(urls.default)
      }

      window.loadURL(urls.index)

      window.webContents.on('did-finish-load', () => {
        window.webContents.send('new-config', config)
      })

    })
    .catch(error => {
      window.loadURL(`${urls.error}?${queryString.stringify({ message: error.message })}`)
    })
  }

}
