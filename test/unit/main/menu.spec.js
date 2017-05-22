describe('unit -> main -> menu', () => {

  const Menu = {
    buildFromTemplate: td.function()
  };

  const template = td.function();

  const electronStub = { Menu };

  const menuBuilder = solve('app/main/menu', {
    './template': template,
    'electron': electronStub
  });

  it('should be a function', () => {
    expect(menuBuilder).to.be.a('function');
  });

  it('should call Electron Menu builder function with the menu template', () => {
    const app = { whatever: 'app' };
    const window = { whatever: 'window' };
    const templateData = { whatever: 'template' };

    td.when(template(window, app)).thenReturn(templateData);

    menuBuilder(window, app);

    expect(Menu.buildFromTemplate).to.have.been.calledWith(templateData);
  });

});
