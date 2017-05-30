const reload = solve('app/main/menu/items/reload')

describe('unit -> main -> menu -> items -> reload', () => {

  it('should be a builder function', () => {
    expect(reload).to.be.a('function')
  })

  it('should return the expected item structure', () => {
    const menuItem = reload()

    expect(menuItem.label).to.equal('Reload')
    expect(menuItem.accelerator).to.equal('Command+R')
    expect(menuItem.click).to.be.a('function')
  })

  it('should reload the application on click', () => {
    const window = { reload: td.function() }

    const menuItem = reload(window)
    menuItem.click()

    expect(window.reload).to.have.been.called
  })

})
