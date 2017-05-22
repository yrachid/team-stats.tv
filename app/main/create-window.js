const queryString = require('query-string');
const {BrowserWindow, Menu} = require('electron');
const configLoader = require('./config-loader');
const menu = require('./menu');

const windowConfiguration = {
  fullscreen: true,
  webPreferences: {
    experimentalFeatures: true,
  }
};

module.exports = (window, menu, urls) => () => {

  window = new BrowserWindow(windowConfiguration);
  console.log('App.Main.CreateWindow: BrowserWindow Created');

  Menu.setApplicationMenu(menu);

  window.on('closed', () => window = null);

  configLoader
    .fromFileSystem()
    .then(config => {

      if (!config) {
        return window.loadURL(urls.default);
      }

      console.log('Loaded Tile Config');

      window.loadURL(urls.index);

      window.webContents.on('did-finish-load', () => {
        window.webContents.send('new-config', config);
      });

    })
    .catch(error => {
      console.log('Failed to load Tile Config');
      window.loadURL(`${urls.error}?${queryString.stringify({ message: error.message })}`);
    });

};
