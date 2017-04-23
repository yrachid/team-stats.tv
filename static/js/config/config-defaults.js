const lodash = require('lodash');

const presets = {
  title: 'Tele Stats',
  tile: {
    presets: {
      scrollTop: 0,
      zoomFactor: 0
    }
  }
};

module.exports = config => new Promise( (resolve, reject) => {
  return resolve({
    title: config.title || presets.title,
    tiles: config.tiles.map(tile => Object.assign({}, presets.tile, tile))
  })
});
