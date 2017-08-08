const session = { clearStorageData: td.function() }
const electron = { webContents: { getAllWebContents: () => ([{session}]) } }

const clearCache = solve('app/main/menu/items/clear-cache', {electron})

describe('unit -> main -> menu -> item -> clear-cache', () => {

  it('should be a builder function', () => {
    expect(clearCache).to.be.a('function')
  })

  it('should return the expected item structure', () => {
    const menuItem = clearCache()

    expect(menuItem.label).to.equal('Clear Cache')
    expect(menuItem.accelerator).to.equal('CommandOrControl+L')
    expect(menuItem.click).to.be.a('function')
  })

  it('should clear sessions of all web views on click', () => {
    const window = {reload: td.function()}

    const menuItem = clearCache(window)
    menuItem.click()

    expect(session.clearStorageData).to.have.been.called
    expect(window.reload).to.have.been.called
  })

})
