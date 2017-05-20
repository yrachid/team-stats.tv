const configuration = require('./config/main')
const tileConfig = require('./config/tiles');

const { app, BrowserWindow, dialog } = require('electron');

let window;

const createWindow = () => {
  window = new BrowserWindow(configuration.browserWindow);
  window.on('closed', () => window = null);

  const tileConfigFile = dialog.showOpenDialog(configuration.fileDialog);

  if (!tileConfigFile) {
    window.loadURL(configuration.urls.error());
  }

  tileConfig.from(tileConfigFile[0])
  .then(config => {

    window.loadURL(configuration.urls.index);

    window.webContents.on('did-finish-load', () => {
      window.webContents.send('new-config', config);
    });

  })
  .catch(error => window.loadURL(configuration.urls.error(error)));

};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', () => {
  if (window === null) {
    createWindow();
  }
});