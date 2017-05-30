const quit = solve('app/main/menu/items/quit')

describe('unit -> main -> menu -> items -> quit', () => {

  it('should be a builder function', () => {
    expect(quit).to.be.a('function')
  })

  it('should return the expected item structure', () => {
    const menuItem = quit()

    expect(menuItem.label).to.equal('Quit')
    expect(menuItem.accelerator).to.equal('Command+Q')
    expect(menuItem.click).to.be.a('function')
  })

  it('should quit the application on click', () => {
    const app = { quit: td.function() }

    const menuItem = quit(null, app)
    menuItem.click()

    expect(app.quit).to.have.been.called
  })

})
