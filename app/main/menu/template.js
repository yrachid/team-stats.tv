const reload = require('./items/reload');
const quit = require('./items/quit');

module.exports = (window, app) => ([
  {
    label: 'Window',
    submenu: [
      reload(window, app),
      { type: 'separator' },
      quit(window, app)
    ]
  }
]);
