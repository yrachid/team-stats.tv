describe('unit -> main -> config-loader', () => {

  const tileConfig = td.object(['fromFile']);
  const filePicker = td.object(['json']);

  const configLoader = solve('app/main/config-loader', {
    '../config/tiles': tileConfig,
    './file-picker': filePicker
  });

  it('Should have a fromFileSystem function', () => {
    expect(configLoader.fromFileSystem).to.exist;
    expect(configLoader.fromFileSystem).to.be.a('function');
  });

  describe('from file system', () => {

    it('Should reject with file selection error', done => {
      td.when(filePicker.json()).thenReject(new Error('Failed'));

      configLoader
        .fromFileSystem()
        .then(() => new Error('Should have failed'))
        .catch(error => {
          expect(error.message).to.equal('Failed');
          done();
        });

    });

    it('Should resolve with selected filePath', done => {
      const somePath = '/path/file';
      td.when(filePicker.json()).thenResolve(somePath);
      td.when(tileConfig.fromFile(somePath)).thenResolve('Resolved file');

      configLoader
        .fromFileSystem()
        .then(file => {
          expect(file).to.equal('Resolved file');
          done();
        })
        .catch(done);

    });

  });

});
