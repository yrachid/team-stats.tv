const config = require(__dirname + '/static/js/config/index.js');

config.from(__dirname + '/stats.json', (error, data) => {

  console.log(data);

  const tiles = document.getElementById('tiles');

  if (error) {
    console.log(error);
    const errorWarning = document.createElement('h1');
    errorWarning.style.color = 'red';
    errorWarning.innerHTML = error.message;
    return document.body.insertBefore(errorWarning, tiles);
  }

  document.title = data.title;

  const appendToDom = t => tiles.appendChild(t);

  const renderStuff = () =>
    data
      .tiles
      .forEach(tileData => {

        let defaultZoomFactor = 1;
        let defaultScrollTop = 0;

        if (tileData.presets) {
          defaultZoomFactor = tileData.presets.zoomFactor ? tileData.presets.zoomFactor : defaultZoomFactor;
          defaultScrollTop = tileData.presets.scrollTop ? tileData.presets.scrollTop : defaultScrollTop;
        }

        const tile = document.createElement('webview');

        tile.setAttribute('id', tileData.id);
        tile.setAttribute('src', tileData.src);
        tile.setAttribute('class', tileData.classList);
        tile.style['grid-row-start'] = tileData.position.rowStart;
        tile.style['grid-row-end'] = tileData.position.rowEnd;
        tile.style['grid-column-start'] = tileData.position.columnStart;
        tile.style['grid-column-end'] = tileData.position.columnEnd;

        const tileControls = document.createElement('div');

        tileControls.setAttribute('id', `control-${tileData.id}`);
        tileControls.setAttribute('class', `tile-control grid`);
        tileControls.style['grid-row-start'] = tileData.position.rowEnd - 5;
        tileControls.style['grid-row-end'] = tileData.position.rowEnd;
        tileControls.style['grid-column-start'] = tileData.position.columnStart;
        tileControls.style['grid-column-end'] = tileData.position.columnEnd;

        const tileReload = document.createElement('button');
        tileReload.style['grid-row-start'] = 1;
        tileReload.style['grid-row-end'] = 101;
        tileReload.style['grid-column-start'] = 1;
        tileReload.style['grid-column-end'] = 15;
        tileReload.innerHTML = 'Reload';
        tileControls.appendChild(tileReload);

        const tileZoomIn = document.createElement('button');
        tileZoomIn.style['grid-row-start'] = 1;
        tileZoomIn.style['grid-row-end'] = 101;
        tileZoomIn.style['grid-column-start'] = 15;
        tileZoomIn.style['grid-column-end'] = 30;
        tileZoomIn.innerHTML = 'Zoom In';
        tileControls.appendChild(tileZoomIn);

        const tileZoomOut = document.createElement('button');
        tileZoomOut.style['grid-row-start'] = 1;
        tileZoomOut.style['grid-row-end'] = 101;
        tileZoomOut.style['grid-column-start'] = 30;
        tileZoomOut.style['grid-column-end'] = 45;
        tileZoomOut.innerHTML = 'Zoom Out';
        tileControls.appendChild(tileZoomOut);

        const tileResetZoom = document.createElement('button');
        tileResetZoom.style['grid-row-start'] = 1;
        tileResetZoom.style['grid-row-end'] = 101;
        tileResetZoom.style['grid-column-start'] = 45;
        tileResetZoom.style['grid-column-end'] = 60;
        tileResetZoom.innerHTML = 'Reset Zoom';
        tileControls.appendChild(tileResetZoom);

        let tileScrollTop = null;

        if (defaultScrollTop !== 0 ) {
          tileScrollTop = document.createElement('button');
          tileScrollTop.style['grid-row-start'] = 1;
          tileScrollTop.style['grid-row-end'] = 101;
          tileScrollTop.style['grid-column-start'] = 60;
          tileScrollTop.style['grid-column-end'] = 75;
          tileScrollTop.innerHTML = 'Scroll Top';
          tileControls.appendChild(tileScrollTop);
        }

        appendToDom(tileControls);
        appendToDom(tile);


        tile.addEventListener('dom-ready', () => {
          if (defaultZoomFactor !== 1) {
            tile.setZoomFactor(tileData.presets.zoomFactor);
          }
        });

        tile.addEventListener('did-stop-loading', () => {
          if (defaultScrollTop !== 0) {
            tile.executeJavaScript(`document.querySelector('body').scrollTop=${defaultScrollTop}`);
          }
        });

        tileReload.addEventListener('click', (tile => () => tile.reload())(tile));
        tileZoomIn.addEventListener('click', (tile => () => tile.getZoomFactor(factor => tile.setZoomFactor(factor + 0.02)))(tile));
        tileZoomOut.addEventListener('click', (tile => () => tile.getZoomFactor(factor => tile.setZoomFactor(factor - 0.02)))(tile));
        tileResetZoom.addEventListener('click', (tile => () => tile.setZoomFactor(defaultZoomFactor))(tile));
        if (defaultScrollTop !== 0) {
          tileScrollTop.addEventListener('click', (tile => () => tile.executeJavaScript(`document.querySelector('body').scrollTop=${defaultScrollTop}`))(tile));
        }
      });

  renderStuff();

});
