const validate = solve('app/config/tiles/validator')

describe('unit -> main -> config -> tiles -> validator', () => {

  const ajvValidator = td.object(['call'])
  const ajv = td.object(['compile'])
  const schema = { whatever: true }

  const validator = validate(ajv, schema)

  afterEach(() => {
    td.reset()
  })

  it('Should resolve the received config', done => {

    const config = { someConfig: true }
    td.when(ajv.compile(schema)).thenReturn(ajvValidator)
    td.when(ajvValidator.call(ajvValidator, config)).thenReturn(true)

    validator(config)
      .then(validConfig => {
        expect(validConfig).to.eql(config)
        done()
      })
      .catch(done)

  })

  it('Should reject the received config', done => {

    const config = { someConfig: true }
    ajvValidator.errors = []
    td.when(ajv.compile(schema)).thenReturn(ajvValidator)
    td.when(ajvValidator.call(ajvValidator, config)).thenReturn(false)

    validator(config)
      .then( () => done(new Error('Validator should have rejected config')))
      .catch(() => done())
  })

  it('Should reject the received config and send an error with formatted message', done => {

    const config = { someConfig: true }
    td.when(ajv.compile(schema)).thenReturn(ajvValidator)
    ajvValidator.errors = [{ dataPath: 'p', message: 'bla' }]

    validator(config)
      .then( () => done(new Error('Validator should have rejected config')))
      .catch(error => {
        expect(error.message).to.equal('Failed to parse configuration: <br /> p bla')
        done()
      })
  })

})
