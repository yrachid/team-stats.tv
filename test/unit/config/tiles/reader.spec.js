describe('unit -> config -> tiles -> reader', () => {

  const fs = {
    readFile: td.function()
  };

  const utils = {
    json: {
      parse: td.function()
    }
  };

  const reader = solve('app/config/tiles/reader', {
    'fs': fs,
    '../../utils': utils
  });

  it.skip('should reject an invalid file', () => {});
  it.skip('should reject an invalid json file', () => {});
  it.skip('should resolve a valid json file', () => {});

});
