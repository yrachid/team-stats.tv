const {Menu} = require('electron');

const template = (window, app) => ([
  {
    label: 'Window',
    submenu: [
      {
        label: 'Reload',
        accelerator: 'Command+R',
        click() {
          if (window) {
            window.reload()
          }
        }
      },
      { type: 'separator' },
      {
        label: 'Quit',
        accelerator: 'Command+Q',
        click() {
          app.quit();
        }
      },
    ]
  }
]);

module.exports = (window, app) => Menu.buildFromTemplate(template(window, app));
