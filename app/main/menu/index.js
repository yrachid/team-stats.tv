const {Menu} = require('electron');
const template = require('./template');

module.exports = (window, app) => Menu.buildFromTemplate(template(window, app));
