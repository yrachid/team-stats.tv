const path = require('path');
const start = require('./start');
const { app } = require('electron')

let window = null

start(window, app, path.resolve('app'))
