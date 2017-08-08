module.exports = (window, app) => ({
  label: 'Toggle Dev Tools',
  accelerator: 'CommandOrControl+Alt+I',
  click() {
    window.webContents.toggleDevTools()
  }
})
