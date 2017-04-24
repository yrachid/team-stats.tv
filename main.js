const commandLineArguments = require('yargs').argv;
const configuration = require('./electron-config')(commandLineArguments);

const { app, BrowserWindow } = require('electron');

let window;

const createWindow = () => {
  window = new BrowserWindow(configuration.browserWindowConfiguration);
  window.on('closed', () => window = null);

  window.loadURL(configuration.url);
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
