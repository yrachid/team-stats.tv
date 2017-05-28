describe('unit -> start', () => {

  const createWindow = td.function();
  const createMenu = td.function();
  const createUrls = td.function();

  const window = { someAttribute: 'attr' };
  const app = td.object(['on']);
  const basePath = 'some/path';
  const menu = { someAttribute: 'menu' };
  const urls = { someUrl: '/bla' };
  const startWindow = td.function();

  beforeEach(() => {
    td.when(createMenu(window, app)).thenReturn(menu);
    td.when(createUrls(basePath)).thenReturn(urls);
    td.when(createWindow(window, menu, urls)).thenReturn(startWindow);
  });

  afterEach(() => {
    td.reset();
  });

  const start = solve('app/start', {
    './main/create-window': createWindow,
    './main/menu': createMenu,
    './config/urls': createUrls
  });

  it('Should handle app ready event', () => {

    start(window, app, basePath);

    expect(app.on).to.have.been.calledWith('ready', td.matchers.isA(Function));
  });

  it('Should handle app window-all-closed event', () => {

    start(window, app, basePath);

    expect(app.on).to.have.been.calledWith('window-all-closed', td.matchers.isA(Function));
  });

  it('Should handle app activate event', () => {

    start(window, app, basePath);

    expect(app.on).to.have.been.calledWith('activate', td.matchers.isA(Function));
  });

});
