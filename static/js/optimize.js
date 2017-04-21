// const jenkinsDevWorkflow = document.querySelector('#jenkins-dev-workflow');
// const jenkinsReleaseWorkflow = document.querySelector('#jenkins-release-workflow');
// const jenkinsScheduledWorkflow = document.querySelector('#jenkins-scheduled-workflow');
// const splunk = document.querySelector('#splunk');

// /(function\(\)|\(\)\s*=>)\s*/

const jenkinsMonitor = "document.querySelector('.build-monitor.dashboard.industrial.ng-scope')";

const cleanJenkins = (jenkinsView) => () => {
  jenkinsView.executeJavaScript(`${jenkinsMonitor}.removeChild(${jenkinsMonitor}.querySelector('header'))`);
  jenkinsView.executeJavaScript(`${jenkinsMonitor}.removeChild(${jenkinsMonitor}.querySelector('footer'))`);
  jenkinsView.executeJavaScript(`${jenkinsMonitor}.style.background = 'black'`);
};

const jenkinsTiles = document.querySelectorAll('.jenkins');

jenkinsTiles.forEach(jenkins => {
  jenkins.addEventListener('dom-ready', cleanJenkins(jenkins))
})

// jenkinsDevWorkflow.addEventListener('dom-ready', cleanJenkins(jenkinsDevWorkflow, 'Dev Workflow'));
// jenkinsReleaseWorkflow.addEventListener('dom-ready', cleanJenkins(jenkinsReleaseWorkflow, 'Release Workflow'));
// jenkinsScheduledWorkflow.addEventListener('dom-ready', cleanJenkins(jenkinsScheduledWorkflow, 'Scheduled Workflow'));

// splunk.addEventListener('dom-ready', () => {
//   const body = `document.querySelector('body')`;
//   splunk.executeJavaScript(`${body}.removeChild(${body}.querySelector('header'))`);
//
// });
