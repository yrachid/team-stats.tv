const fs = require('fs');
const $ = dom(document);
const { assign } = Object;

const data = JSON.parse(fs.readFileSync(__dirname + '/stats.json').toString());

$.title(data.title);

const tiles = $.byId('tiles');

const resizingAndPosition = { class: 'tile' };

const attribsAndSize = t => ({ attribs: t.attribs, size: sizes(t.size)(tiles) });
const additionalAttribs = t => ({ attribs: assign(t.attribs, resizingAndPosition), size: t.size });
const domElementAndSize = t => ({ domElement: $.create('webview', t.attribs), size: t.size });
const domElementAssignments = t => {
  console.log(t.size);
  t.domElement.style.width = `${t.size.width}px`;
  t.domElement.style.height = `${t.size.height}px`;
  return t;
};
const appendToDom = t => $.append(tiles)(t.domElement);

const renderStuff = () =>
  data
    .tiles
    .map(attribsAndSize)
    .map(additionalAttribs)
    .map(domElementAndSize)
    .map(domElementAssignments)
    .forEach(appendToDom);

renderStuff();
