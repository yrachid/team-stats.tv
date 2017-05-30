const controlButtons = require(__dirname + '/control-buttons.js')

module.exports = (document, data, tile) => {

  const tileControls = document.createElement('div')

  tileControls.setAttribute('id', `control-${data.id}`)
  tileControls.setAttribute('class', 'tile-control grid')
  tileControls.style['grid-column-start'] = data.position.columnStart
  tileControls.style['grid-column-end'] = data.position.columnEnd
  tileControls.style['grid-row-start'] = data.position.rowEnd - 5
  tileControls.style['grid-row-end'] = data.position.rowEnd

  const buttons = controlButtons(document, data, tile)

  buttons.forEach(button => tileControls.appendChild(button))

  return tileControls
}
