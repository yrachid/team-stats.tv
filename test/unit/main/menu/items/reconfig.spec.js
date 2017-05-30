describe('unit -> main -> menu -> items -> reconfig', () => {

  const configLoader = td.object(['fromFileSystem'])

  const reconfig = solve('app/main/menu/items/reconfig', {
    '../../config-loader': configLoader
  })

  it('Should be a function', () => {
    expect(reconfig).to.be.a('function')
  })

  it('Should return an object with correct structure', () => {
    const item = reconfig()

    expect(item.label).to.equal('Reconfigure...')
    expect(item.accelerator).to.equal('CommandOrControl+Shift+R')
    expect(item.click).to.be.a('function')
  })

  it.skip('Should do nothing', () => {
    const configuration = { someConfig: 'bla' }
    const window = {}
    const aPromise = new PromiseMock()
    const item = reconfig(window)
    when(configLoader.fromFileSystem()).thenReturn(aPromise)

    reconfig.click()
  })

})
