module.exports = (document, tileData) => {
  const tile = document.createElement('webview');

  tile.setAttribute('id', tileData.id);
  tile.setAttribute('src', tileData.src);
  tile.setAttribute('class', tileData.classList);
  tile.style['grid-row-start'] = tileData.position.rowStart;
  tile.style['grid-row-end'] = tileData.position.rowEnd;
  tile.style['grid-column-start'] = tileData.position.columnStart;
  tile.style['grid-column-end'] = tileData.position.columnEnd;

  tile.addEventListener('dom-ready', () => {
    tile.setZoomFactor(tileData.presets.zoomFactor);
  });

  tile.addEventListener('did-stop-loading', () => {
    tile.executeJavaScript(`document.querySelector('body').scrollTop=${tileData.presets.scrollTop}`);
  });

  return tile;
}
