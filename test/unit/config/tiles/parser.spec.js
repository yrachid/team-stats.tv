describe('unit -> config -> tiles -> parser', () => {

  const utils = {
    json: td.object('parse')
  };

  const parser = solve('app/config/tiles/parser', {
    '../../utils': utils
  });

  it('Should resolve with a correctly parsed json file', done => {
    const data = 'whatever';
    const correctJson = { whatever: true };
    td.when(utils.json.parse(data)).thenReturn(correctJson);

    parser(data)
      .then(parsedData => {
        expect(parsedData).to.eql(correctJson);
        done();
      })
      .catch(done);
  });

  it('Should reject an incorrect file', done => {
    const data = 'whatever';
    const expectedError = new Error('I failed at parsing');
    td.when(utils.json.parse(data)).thenThrow(expectedError);

    parser(data)
      .then(() => done(new Error('Parser should have failed')))
      .catch(thrownError => {
        expect(thrownError).to.eql(expectedError);
        done();
      });
  });
});
