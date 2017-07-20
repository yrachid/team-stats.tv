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

  it('Should pick a config and emit new-config event', () => {
    const configuration = { someConfig: 'bla' }
    const window = { webContents: { send: td.function() } }
    const aPromise = new PromiseMock()
    const aConfig = { config: true }
    td.when(configLoader.fromFileSystem()).thenReturn(aPromise)

    reconfig(window, null).click()

    expect(aPromise.capturedThenCallback).to.be.a('function')

    aPromise.capturedThenCallback(aConfig)

    td.verify(window.webContents.send('new-config', aConfig))
  })

})
