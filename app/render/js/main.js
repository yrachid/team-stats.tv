const optimize = require(__dirname + '/js/optimize.js');
const tileCreator = require(__dirname + '/js/components/tile.js');
const tileControlsCreator = require(__dirname + '/js/components/tile-control.js');
const ipc = require('electron').ipcRenderer;

const tiles = document.getElementById('tiles');

ipc.on('new-config', (event, data) => {

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
});
