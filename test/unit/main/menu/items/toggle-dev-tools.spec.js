const toggleDevTools = solve('app/main/menu/items/toggle-dev-tools')

describe('unit -> main -> menu -> item -> clear-cache', () => {

  it('should be a builder function', () => {
    expect(toggleDevTools).to.be.a('function')
  })

  it('should return the expected item structure', () => {
    const menuItem = toggleDevTools()

    expect(menuItem.label).to.equal('Toggle Dev Tools')
    expect(menuItem.accelerator).to.equal('CommandOrControl+Alt+I')
    expect(menuItem.click).to.be.a('function')
  })

  it('should toggle dev tools on click', () => {
    const window = {  webContents: { toggleDevTools: td.function()  } }

    const menuItem = toggleDevTools(window)
    menuItem.click()

    expect(window.webContents.toggleDevTools).to.have.been.called
  })

})
