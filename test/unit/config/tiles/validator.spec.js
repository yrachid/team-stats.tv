const validate = solve('app/config/tiles/validator');

describe('unit -> main -> config -> tiles -> validator', () => {

  const ajvValidator = { call: td.function() };
  const ajv = { compile: td.function() };
  const schema = { whatever: true };
  td.when(ajv.compile(schema)).thenReturn(ajvValidator);

  const validator = validate(ajv, schema);

  it('Should resolve the received config', done => {

    const config = { someConfig: true };

    td.when(ajvValidator.call(ajvValidator, config)).thenReturn(true);

    validator(config)
      .then(validConfig => {
        expect(validConfig).to.eql(config);
        done();
      })
      .catch(done);

  });

  it('Should reject the received config', done => {

    const config = { someConfig: true };
    ajvValidator.errors = [];

    td.when(ajvValidator.call(ajvValidator, config)).thenReturn(false);

    validator(config)
      .then( () => done(new Error('Validator should have rejected config')))
      .catch(() => done());
  });

  it('Should reject the received config and send an error with formatted message', done => {

    const config = { someConfig: true };
    ajvValidator.errors = [{ dataPath: 'p', message: 'bla' }]

    validator(config)
      .then( () => done(new Error('Validator should have rejected config')))
      .catch(error => {
        expect(error.message).to.equal('Failed to parse configuration: <br /> p bla');
        done();
      });
  });

});
