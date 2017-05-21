const validate = require('../../../../../app/main/config/tiles/validator');

// TODO: Check interactions with AJV
describe.skip('unit -> main -> config -> tiles -> validator', () => {

  const validator = td.function();
  const ajv = { compile: td.function() };
  const schema = {};

  // const validator = validate(ajv, schema);

  it('', done => {

    when(ajv.compile(schema)).thenReturn(validator);
    when()

  });

});
