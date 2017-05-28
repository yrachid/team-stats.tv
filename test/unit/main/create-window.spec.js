describe('unit -> main -> create-window', () => {

  const queryString = td.object(['stringify']);
  const electron = {
    Menu: td.object(['setApplicationMenu']),
    BrowserWindow: td.constructor()
  };
  const configLoader = td.object(['fromFileSystem']);
  const createMenus = td.function();

  const createWindow = solve('app/main/create-window', {
    'query-string': queryString,
    'electron': electron,
    './config-loader': configLoader,
    './menu': createMenus
  });

  it.skip('should create a BrowserWindow with correct config', () => {

    createWindow(null);

    expect(electron.BrowserWindow).to.have.been.calledWith({
      fullscreen: true,
      webPreferences: {
          experimentalFeatures: true,
      }
    });

  });

});
