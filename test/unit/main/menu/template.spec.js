describe('unit -> main -> menu -> template', () => {
  const reload = td.function()
  const reconfig = td.function()
  const quit = td.function()
  const clearCache = td.function()
  const toggleDevTools = td.function()

  const templateBuilder = solve('app/main/menu/template', {
    './items/reload': reload,
    './items/reconfig': reconfig,
    './items/quit': quit,
    './items/clear-cache': clearCache,
    './items/toggle-dev-tools': toggleDevTools
  })

  it('should be a builder function', () => {
    expect(templateBuilder).to.be.a('function')
  })

  it('should return the expected main menu structure', () => {
    const app = { whatever: 'app' }
    const window = { whatever: 'window' }
    const reloadMenuItem = { item: 'reload' }
    const reconfigMenuItem = { item: 'reconfig' }
    const quitMenuItem = { item: 'quit' }
    const clearCacheMenuItem = { item: 'clear-cache' }
    const toggleDevToolsMenuItem = { item: 'toggle-dev-tools' }
    const separator = { type: 'separator' }

    td.when(reload(window, app)).thenReturn(reloadMenuItem)
    td.when(quit(window, app)).thenReturn(quitMenuItem)
    td.when(reconfig(window, app)).thenReturn(reconfigMenuItem)
    td.when(clearCache(window, app)).thenReturn(clearCacheMenuItem)
    td.when(toggleDevTools(window, app)).thenReturn(toggleDevToolsMenuItem)

    const template = templateBuilder(window, app)

    expect(template).to.be.an('array')
    expect(template.length).to.equal(2)
    expect(template[0].label).to.equal('Window')

    expect(template[0].submenu.length).to.equal(6)
    expect(template[0].submenu[0]).to.eql(reloadMenuItem)
    expect(template[0].submenu[1]).to.eql(reconfigMenuItem)
    expect(template[0].submenu[2]).to.eql(clearCacheMenuItem)
    expect(template[0].submenu[3]).to.eql(toggleDevToolsMenuItem)
    expect(template[0].submenu[4]).to.eql(separator)
    expect(template[0].submenu[5]).to.eql(quitMenuItem)
  })

  it('should return the expected edit menu structure', () => {
    const copyMenuItem = {
      label: 'Copy',
      accelerator: 'CmdOrCtrl+C',
      selector: 'copy:'
    }

    const pasteMenuItem = {
      label: 'Paste',
      accelerator: 'CmdOrCtrl+V',
      selector: 'paste:'
    }

    const template = templateBuilder()

    expect(template).to.be.an('array')
    expect(template.length).to.equal(2)
    expect(template[1].label).to.equal('Edit')

    expect(template[1].submenu.length).to.equal(2)
    expect(template[1].submenu[0]).to.eql(copyMenuItem)
    expect(template[1].submenu[1]).to.eql(pasteMenuItem)
  })
})
