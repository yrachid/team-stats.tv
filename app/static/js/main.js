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

  optimize();
});
