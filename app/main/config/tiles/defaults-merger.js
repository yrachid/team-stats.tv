const {assign} = Object;

module.exports = defaults => config => new Promise( (resolve, reject) => {
  const title = config.title || defaults.title;
  const tiles = config.tiles.map(tile => {
    const presets = assign({}, defaults.tile.presets, tile.presets);
    return assign({}, tile, { presets });
  });

  return resolve({ title, tiles });
});
