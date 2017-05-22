describe('unit -> main -> file-picker', () => {

  const dialog = {
    showOpenDialog: td.function()
  };

  const picker = proxyquire(resolve('app/main/file-picker'), {
    'electron': { dialog }
  });

  it('Should have a json picker', () => {
    expect(picker.json).to.exist;
    expect(picker.json).to.be.a('function');
  });

  it('Should call Electron dialog with correct parameters', () => {

    picker.json();

    expect(dialog.showOpenDialog).to.have.been.calledWith({
      properties: ['openFile'],
      filters: [ { name: 'Configuration', extensions: ['json'] } ]
    });

  });

});
