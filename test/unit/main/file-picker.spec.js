describe('unit -> main -> file-picker', () => {

  const dialog = td.object(['showOpenDialog']);

  const picker = solve('app/main/file-picker', {
    'electron': { dialog }
  });

  it('Should have a json picker', () => {
    expect(picker.json).to.exist;
    expect(picker.json).to.be.a('function');
  });

  it('Should return the select file path', done => {
    td.when(dialog.showOpenDialog(td.matchers.isA(Object))).thenReturn(['some/path']);

    picker.json()
    .then(file => {
      expect(file).to.equal('some/path');
      done();
    })
    .catch(done);

  });

  it('Should return null when picker brings no file', done => {
    td.when(dialog.showOpenDialog(td.matchers.isA(Object))).thenReturn(null);

    picker.json()
    .then(() => done(new Error('Should have failed')))
    .catch(error => {
      expect(error.message).to.equal('No file was selected');
      done()
    });

  });

});
