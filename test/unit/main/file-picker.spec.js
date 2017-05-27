describe('unit -> main -> file-picker', () => {

  const dialog = td.object(['showOpenDialog']);

  const picker = solve('app/main/file-picker', {
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

  it('Should return the select file path', () => {
    td.when(dialog.showOpenDialog(td.matchers.isA(Object))).thenReturn(['some/path']);

    const selectedFile = picker.json();

    expect(selectedFile).to.equal('some/path');
  });

  it('Should return null when picker brings no file', () => {
    td.when(dialog.showOpenDialog(td.matchers.isA(Object))).thenReturn(null);

    const selectedFile = picker.json();

    expect(selectedFile).to.equal(null);
  });

});
