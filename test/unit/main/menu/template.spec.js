describe('unit -> main -> menu -> template', () => {

  const reload = td.function()
  const reconfig = td.function()
  const quit = td.function()

  const templateBuilder = solve('app/main/menu/template', {
    './items/reload': reload,
    './items/reconfig': reconfig,
    './items/quit': quit
  })

  it('should be a builder function', () => {
    expect(templateBuilder).to.be.a('function')
  })

  it('should return the expected template structure', () => {
    const app = { whatever: 'app' }
    const window = { whatever: 'window' }
    const reloadMenuItem = { item: 'reload' }
    const reconfigMenuItem = { item: 'reconfig' }
    const quitMenuItem = { item: 'quit' }
    const separator = { type: 'separator' }

    td.when(reload(window, app)).thenReturn(reloadMenuItem)
    td.when(quit(window, app)).thenReturn(quitMenuItem)
    td.when(reconfig(window, app)).thenReturn(reconfigMenuItem)

    const template = templateBuilder(window, app)

    expect(template).to.be.an('array')
    expect(template.length).to.equal(1)
    expect(template[0].label).to.equal('Window')

    expect(template[0].submenu.length).to.equal(4)
    expect(template[0].submenu[0]).to.eql(reloadMenuItem)
    expect(template[0].submenu[1]).to.eql(reconfigMenuItem)
    expect(template[0].submenu[2]).to.eql(separator)
    expect(template[0].submenu[3]).to.eql(quitMenuItem)
  })

})
