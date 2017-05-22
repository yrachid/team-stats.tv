const validate = require('../../../../../app/main/config/tiles/validator');

describe('unit -> main -> config -> tiles -> validator', () => {

  const ajvValidator = td.function();
  const ajv = { compile: td.function() };
  const schema = { whatever: true };

  const validator = validate(ajv, schema);

  it('Should resolve the received config', done => {

    const config = { someConfig: true };
    td.when(ajv.compile(schema)).thenReturn(ajvValidator);
    td.when(ajvValidator(config)).thenReturn(true);

    validator(config)
      .then(validConfig => {
        expect(validConfig).to.eql(config);
        done();
      })
      .catch(done);

  });

  it.skip('Should reject the received config', done => {

    const config = { someConfig: true };
    td.when(ajv.compile(schema)).thenReturn(ajvValidator);
    td.when(ajvValidator(config)).thenReturn(false);

    validator(config)
      then( () => done(new Error('Validator should have rejected config')))
      .catch(() => done());
  });

  it.skip('Should reject the received config and send an error with formatted message', done => {
    const ajvValidatorWithErrors = function() { return false };
    ajvValidatorWithErrors.errors = [{ dataPath: 'p', message: 'bla' }];
    const config = { someConfig: true };
    td.when(ajv.compile(schema)).thenReturn(ajvValidatorWithErrors);

    validator(config)
      .then( () => done(new Error('Validator should have rejected config')))
      .catch(error => {
        expect(error.message).to.contain('Failed to parse configuration:')
        done();
      });
  });

});
