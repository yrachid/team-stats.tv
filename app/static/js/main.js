const parameters = require('query-string').parse(location.search);
const config = require(__dirname + '/static/js/config/index.js');
const optimize = require(__dirname + '/static/js/optimize.js');
const tileCreator = require(__dirname + '/static/js/components/tile.js');
const tileControlsCreator = require(__dirname + '/static/js/components/tile-control.js');

const tiles = document.getElementById('tiles');

config.from(parameters.localConfig)
  .then(data => {

    document.title = data.title;

    data
      .tiles
      .map(
        tileData => ({ tile: tileCreator(document, tileData), data: tileData })
      )
      .map(tileData => ({
          tile: tileData.tile,
          tileControls: tileControlsCreator(document, tileData.data, tileData.tile)
        })
      )
      .forEach(tileData => {
        tiles.appendChild(tileData.tile);
        tiles.appendChild(tileData.tileControls);
      });

      optimize();

  })
  .catch(error => {
    console.log(error);
    const errorWarning = document.createElement('h1');
    errorWarning.style.color = 'red';
    errorWarning.innerHTML = error.message;
    document.body.insertBefore(errorWarning, tiles);
  });
