const validate = require('../../../../../app/main/config/tiles/validator');

describe('unit -> main -> config -> tiles -> validator', () => {

  it('Should fail when there is no tiles section', done => {

    validate({}).catch(error => {
      expect(error.message).to.equal('Config file has no \'tiles\' section, or \'tiles\' is falsy.');
      done();
    });

  });

  it('Should fail when tiles section is undefined', done => {

    validate({ tiles: undefined }).catch(error => {
      expect(error.message).to.equal('Config file has no \'tiles\' section, or \'tiles\' is falsy.');
      done();
    });

  });

  it('Should fail when tiles section is null', done => {

    validate({ tiles: null }).catch(error => {
      expect(error.message).to.equal('Config file has no \'tiles\' section, or \'tiles\' is falsy.');
      done();
    });

  });

  it('Should fail when tiles is not an Array', done => {

    validate({ tiles: 'a' }).catch(error => {
      expect(error.message).to.equal('The \'tiles\' section of config file is not an Array. It should be. With items on it.');
      done();
    });

  });

  it('Should fail when tiles array is empty', done => {

    validate({ tiles: [] }).catch(error => {
      expect(error.message).to.equal('The \'tiles\' array must have items');
      done();
    });

  });

});
