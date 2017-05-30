describe('unit -> start', () => {

  const createWindow = td.function()
  const createUrls = td.function()
  let utils = {
    process: {
      platform: ''
    }
  }

  const window = { someAttribute: 'attr' }
  const app = {
    on: td.function(),
    quit: td.function()
  }
  const basePath = 'some/path'
  const urls = { someUrl: '/bla' }
  const startWindow = td.function()

  beforeEach(() => {
    td.when(createUrls(basePath)).thenReturn(urls)
    td.when(createWindow(window, app, urls)).thenReturn(startWindow)
  })

  afterEach(() => {
    td.reset()
  })

  const start = solve('app/start', {
    './main/create-window': createWindow,
    './config/urls': createUrls,
    './utils': utils
  })

  it('Should start window on app ready event', () => {

    const captor = td.matchers.captor()

    start(window, app, basePath)

    expect(app.on).to.have.been.calledWith('ready', captor.capture())
    expect(captor.value).to.eql(startWindow)

  })

  it('Should quit app on window-all-closed event in a not darwin platform', () => {

    const captor = td.matchers.captor()
    utils.process.platform = 'not-darwin'

    start(window, app, basePath)

    expect(app.on).to.have.been.calledWith('window-all-closed', captor.capture())
    captor.value()
    expect(app.quit).to.have.been.called

  })

  it('Should not quit app on window-all-closed event in darwin platform', () => {

    const captor = td.matchers.captor()
    utils.process.platform = 'darwin'

    start(window, app, basePath)

    expect(app.on).to.have.been.calledWith('window-all-closed', captor.capture())
    captor.value()
    expect(app.quit).to.not.have.been.called

  })

  it('Should start window on app activate event', () => {

    const captor = td.matchers.captor()

    start(window, app, basePath)

    expect(app.on).to.have.been.calledWith('activate', captor.capture())
    expect(captor.value).to.eql(startWindow)
  })

})
