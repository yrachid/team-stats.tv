const DEFAULT_SCROLL_TIMEOUT = 2000;

module.exports = (document, tileData) => {
  const tile = document.createElement('webview');

  tile.setAttribute('id', tileData.id);
  tile.setAttribute('src', tileData.src);
  tile.setAttribute('class', tileData.classList);
  tile.style['grid-row-start'] = tileData.position.rowStart;
  tile.style['grid-row-end'] = tileData.position.rowEnd;
  tile.style['grid-column-start'] = tileData.position.columnStart;
  tile.style['grid-column-end'] = tileData.position.columnEnd;

  if (tileData.presets.refreshRate) {
    const intervalInMiliseconds = tileData.presets.refreshRate * 60 * 1000;
    setInterval(tile.reload.bind(tile), intervalInMiliseconds);
  }

  tile.addEventListener('did-finish-load', () => {
    setTimeout(function () {
      tile.setZoomFactor(tileData.presets.zoomFactor);
      tile.executeJavaScript(`window.scrollTo(window.pageXOffset, ${tileData.presets.scrollTop})`);
    }, DEFAULT_SCROLL_TIMEOUT);
  });

  return tile;
}
