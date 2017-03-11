const { app, BrowserWindow } = require('electron');
const path = require('path');

let window;

const createWindow = () => {
  window = new BrowserWindow({ fullscreen: true });
  window.on('closed', () => window = null);

  window.loadURL(`file://${__dirname}/index.html`);
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
