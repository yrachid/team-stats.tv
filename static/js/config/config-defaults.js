const lodash = require('lodash');

const presetConfig = {
  title: 'Tele Stats',
  tile: {
    presets: {
      scrollTop: 0,
      zoomFactor: 0
    }
  }
};

module.exports = configuration => {

  const title = configuration.title || presetConfig.title;

  const tiles = configuration.tiles.map(tile => {
    tile.presets = lodash.merge(presetConfig.tile, tile.presets);

    return tile;
  });

  return {title, tiles};

};
