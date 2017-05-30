module.exports = (window, app) => ({
  label: 'Reload',
  accelerator: 'Command+R',
  click() {
    if (window) {
      window.reload()
    }
  }
})
