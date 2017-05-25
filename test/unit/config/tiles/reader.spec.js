describe('unit -> config -> tiles -> reader', () => {

  const fs = td.object(['readFile']);

  const reader = solve('app/config/tiles/reader', {
    'fs': fs
  });

  it('should reject an invalid file', done => {
    const someFilePath = '/bla/bla/bla';
    const expectedError = new Error('Cant read this file');

    td.when(fs.readFile(someFilePath)).thenCallback(expectedError);

    reader(someFilePath)
      .then( () => done(new Error('Should have failed')))
      .catch( thrownError => {
        expect(thrownError).to.eql(expectedError);
        done();
      });
  });


  it('should resolve a valid read file', done => {

    const someFilePath = '/bla/bla/bla/bla';
    const fileBuffer = { toString: td.function() };
    const someContent = 'content';

    td.when(fs.readFile(someFilePath)).thenCallback(null, fileBuffer);
    td.when(fileBuffer.toString()).thenReturn(someContent);

    reader(someFilePath)
      .then( readContent => {
        expect(readContent).to.equal(someContent);
        done();
      })
      .catch(done);

  });

});
