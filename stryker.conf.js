module.exports = function(config){
  config.set({
    files: ['test/config.js',
            'test/unit/**/*.js',
            { pattern: 'app/**/*.js', included: false, mutated: true }],
    testFramework: 'mocha',
    testRunner: 'mocha',
    reporter: ['progress', 'clear-text', 'dots', 'html', 'event-recorder'],
    coverageAnalysis: 'perTest',
    plugins: ['stryker-mocha-runner', 'stryker-html-reporter']
  });
}
