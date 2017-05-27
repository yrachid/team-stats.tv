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

    it('Should resolve with null file', done => {
      td.when(filePicker.json()).thenReturn(null);

      configLoader
        .fromFileSystem()
        .then(file => {
          expect(file).to.equal(null);
          done();
        })
        .catch(done);

    });

    it('Should resolve with selected filePath', done => {
      const somePath = '/path/file';
      td.when(filePicker.json()).thenReturn(somePath);
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
