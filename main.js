const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

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
