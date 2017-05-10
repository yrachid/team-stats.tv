const optimize = require(__dirname + '/static/js/optimize.js');
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
