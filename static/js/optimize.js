// /(function\(\)|\(\)\s*=>)\s*/

module.exports = () => {

  const jenkinsMonitor = "document.querySelector('.build-monitor.dashboard.industrial.ng-scope')";

  const cleanJenkins = (jenkinsView) => () => {
    jenkinsView.executeJavaScript(`${jenkinsMonitor}.removeChild(${jenkinsMonitor}.querySelector('header'))`);
    jenkinsView.executeJavaScript(`${jenkinsMonitor}.removeChild(${jenkinsMonitor}.querySelector('footer'))`);
    jenkinsView.executeJavaScript(`${jenkinsMonitor}.style.background = 'black'`);
  };

  const jenkinsTiles = document.querySelectorAll('.jenkins');

  jenkinsTiles.forEach(jenkins => {
    jenkins.addEventListener('dom-ready', cleanJenkins(jenkins))
  });

  const splunkTile = document.querySelector('#splunk');

  splunkTile.addEventListener('did-stop-loading', () => {
    console.log('oi');
    splunkTile.openDevTools();
    splunkTile.executeJavaScript(`document.querySelector('.main-section-body.dashboard-body').style['background-color'] = '#000000'`);
  });

};
