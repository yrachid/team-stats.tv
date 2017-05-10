const optimize = require(__dirname + '/static/js/optimize.js');
const tileCreator = require(__dirname + '/static/js/components/tile.js');
const tileControlsCreator = require(__dirname + '/static/js/components/tile-control.js');
const ipc = require('electron').ipcRenderer;

const tiles = document.getElementById('tiles');

ipc.on('new-config', (event, data) => {

  document.title = data.title;

  new Vue({
    el: '#tiles',
    data
  });

  // data
  //   .tiles
  //   .map(
  //     tileData => ({ tile: tileCreator(document, tileData), data: tileData })
  //   )
  //   .map(tileData => ({
  //       tile: tileData.tile,
  //       tileControls: tileControlsCreator(document, tileData.data, tileData.tile)
  //     })
  //   )
  //   .forEach(tileData => {
  //     tiles.appendChild(tileData.tile);
  //     tiles.appendChild(tileData.tileControls);
  //   });

    optimize();
});
