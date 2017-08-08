const reload = require('./items/reload')
const quit = require('./items/quit')
const reconfig = require('./items/reconfig')
const clearCache= require('./items/clear-cache')
const toggleDevTools= require('./items/toggle-dev-tools')

module.exports = (window, app) => ([
  {
    label: 'Window',
    submenu: [
      reload(window, app),
      reconfig(window, app),
      clearCache(window, app),
      toggleDevTools(window, app),
      { type: 'separator' },
      quit(window, app)
    ]
  }
])
