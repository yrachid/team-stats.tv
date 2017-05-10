const commandLineArguments = require('yargs').argv;
const configuration = require('./config')(commandLineArguments);
const tileConfig = require('./tile-config');
const socket = require('./socket');

const { app, BrowserWindow, dialog } = require('electron');

let window;

const createWindow = () => {
  window = new BrowserWindow(configuration.browserWindow);
  window.on('closed', () => window = null);

  const tileConfigFile = dialog.showOpenDialog(configuration.fileDialog);

  if (!tileConfigFile) {
    return console.log('Nope');
  }

  tileConfig.from(tileConfigFile[0])
  .then(config => {

    socket(configuration);

    window.loadURL(configuration.url);

    window.webContents.on('did-finish-load', () => {
      window.webContents.send('new-config', config);
    });

  });

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
