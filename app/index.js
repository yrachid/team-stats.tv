const path = require('path');
const { app } = require('electron');
const createWindow = require('./main/create-window');
const createMenu = require('./main/menu');
const createUrls = require('./config/urls');

let window;

const menu = createMenu(window, app);
const urls = createUrls(__dirname);
const start = createWindow(window, menu, urls);

app.on('ready', () => {
  console.log('Application Ready');
  start();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', () => {
  console.log('Application Activated');
  if (window === null) {
    start();
  }
});
