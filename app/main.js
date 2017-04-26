const commandLineArguments = require('yargs').argv;
const configuration = require('./config')(commandLineArguments);
const socket = require('./socket');

const { app, BrowserWindow } = require('electron');

let window;

const createWindow = () => {
  window = new BrowserWindow(configuration.browserWindowConfiguration);
  window.on('closed', () => window = null);

  socket(configuration);

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
