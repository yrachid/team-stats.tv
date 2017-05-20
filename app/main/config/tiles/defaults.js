const {assign} = Object;

const defaults = {
  title: 'Team Stats',
  tile: {
    presets: {
      scrollTop: 0,
      zoomFactor: 1,
      refreshRate: 0
    }
  }
};

module.exports = config => new Promise( (resolve, reject) => {
  const title = config.title || defaults.title;
  const tiles = config.tiles.map(tile => {
    const presets = assign({}, defaults.tile.presets, tile.presets);
    return assign({}, tile, { presets });
  });

  return resolve({ title, tiles });
});
