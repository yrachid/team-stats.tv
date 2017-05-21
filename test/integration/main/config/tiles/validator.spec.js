const Ajv = require('ajv');
const validator = require('../../../../../app/main/config/tiles/validator');
const schema = require('../../../../../app/main/config/tiles/schema');

describe('integration -> main -> config -> tiles -> validator', () => {

  const validate = validator(new Ajv(), schema);

  it('Should resolve when config is correct', done => {
    const position = { rowStart: 1, rowEnd: 2, columnStart: 1, columnEnd: 2 };
    const tile = { id: 'bla', src: 'bla', position };
    const config = { tiles: [tile] };

    validate(config).then(resolved => {
      expect(resolved).to.eql(config);
      done();
    });
  });

  it('Should reject when there is no tiles section', done => {
    validate({}).catch(error => {
      expect(error.message).to.contain('should have required property \'tiles\'');
      done();
    });
  });

  it('Should reject when tiles section is undefined', done => {
    validate({ tiles: undefined }).catch(error => {
      expect(error.message).to.contain('should have required property \'tiles\'');
      done();
    });
  });

  it('Should reject when tiles section is null', done => {
    validate({ tiles: null }).catch(error => {
      expect(error.message).to.contain('.tiles should be array');
      done();
    });
  });

  it('Should reject when tiles array is empty', done => {
    validate({ tiles: [] }).catch(error => {
      expect(error.message).to.contain('.tiles should NOT have less than 1 items');
      done();
    });
  });

  it('Should reject when tiles items have no id', done => {
    validate({ tiles: [{}] }).catch(error => {
      expect(error.message).to.contain('.tiles[0] should have required property \'id\'');
      done();
    });
  });

  it('Should reject when tiles items have no src', done => {
    const position = { rowStart: 1, rowEnd: 2, columnStart: 2, columnEnd: 1 };
    validate({ tiles: [{id: 'a', position}] }).catch(error => {
      expect(error.message).to.contain('.tiles[0] should have required property \'src\'');
      done();
    });
  });

  it('Should reject when tiles items have no position', done => {
    validate({ tiles: [{id: 'a', src: 'a'}] }).catch(error => {
      expect(error.message).to.contain('.tiles[0] should have required property \'position\'');
      done();
    });
  });

  it('Should reject when tiles.position has no rowStart', done => {
    const position = { rowEnd: 2, columnStart: 2, columnEnd: 2 };
    const tile = { id: 'bla', src: 'bla', position };
    const config = { tiles: [tile] };

    validate(config).catch(error => {
      expect(error.message).to.contain('.tiles[0].position should have required property \'rowStart\'');
      done();
    });
  });

  it('Should reject when tiles.position has no rowEnd', done => {
    const position = { rowStart: 1, columnStart: 2, columnEnd: 2 };
    const tile = { id: 'bla', src: 'bla', position };
    const config = { tiles: [tile] };

    validate(config).catch(error => {
      expect(error.message).to.contain('.tiles[0].position should have required property \'rowEnd\'');
      done();
    });
  });

  it('Should reject when tiles.position has no columnStart', done => {
    const position = { rowStart: 1, rowEnd: 2, columnEnd: 2 };
    const tile = { id: 'bla', src: 'bla', position };
    const config = { tiles: [tile] };

    validate(config).catch(error => {
      expect(error.message).to.contain('.tiles[0].position should have required property \'columnStart\'');
      done();
    });
  });

  it('Should reject when tiles.position has no columnEnd', done => {
    const position = { rowStart: 1, rowEnd: 2, columnStart: 2 };
    const tile = { id: 'bla', src: 'bla', position };
    const config = { tiles: [tile] };

    validate(config).catch(error => {
      expect(error.message).to.contain('.tiles[0].position should have required property \'columnEnd\'');
      done();
    });
  });

});
