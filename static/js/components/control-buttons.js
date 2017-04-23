const {keys} = Object;
const CONTROL_WIDTH = 15;

module.exports = (document, data, tile) =>
  [
    {
      text: 'Reload',
      click: () => tile.reload()
    },
    {
      text: 'Zoom In',
      click: () => tile.getZoomFactor(factor => tile.setZoomFactor(factor + 0.02))
    },
    {
      text: 'Zoom Out',
      click: () => tile.getZoomFactor(factor => tile.setZoomFactor(factor - 0.02))
    },
    {
      text: 'Reset Zoom',
      click: () => tile.setZoomFactor(data.presets.zoomFactor)
    },
    {
      text: 'Scroll Top',
      click: () => tile.executeJavaScript(`document.querySelector('body').scrollTop=${data.presets.scrollTop}`)
    }
  ].map(
    (control, index) => Object.assign({}, control, {
      position: {
        'grid-row-start': 1,
        'grid-row-end': 101,
        'grid-column-start': index * CONTROL_WIDTH || 1,
        'grid-column-end': (index + 1) * CONTROL_WIDTH
      }
    })
  ).map( control => {
      const button = document.createElement('button');

      button.innerHTML = control.text;

      button.addEventListener('click', control.click);

      return { button, position: control.position };
    }
  ).map(control => {
      keys(control.position).forEach(boundary =>
        control.button.style[boundary] = control.position[boundary]
      );
      return control.button;
    }
  );
