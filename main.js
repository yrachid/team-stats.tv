const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');
const fs = require('fs');

const config = fs.readFileSync(__dirname + '/stats.json').toString();

console.log(JSON.parse(config));

let window;

const createWindow = () => {
  window = new BrowserWindow();
  window.on('closed', () => window = null);

  const indexUrl = url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  });

  window.loadURL(indexUrl);
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
