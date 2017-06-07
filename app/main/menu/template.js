const reload = require('./items/reload')
const quit = require('./items/quit')
const reconfig = require('./items/reconfig')

module.exports = (window, app) => ([
  {
    label: 'Window',
    submenu: [
      reload(window, app),
      reconfig(window, app),
      { type: 'separator' },
      quit(window, app)
    ]
  }
])
