const path = require('path');
const start = require('./start');
const { app } = require('electron')

let window

start(window, app, path.resolve('app'))
