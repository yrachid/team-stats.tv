const Application = require('spectron').Application

describe.skip('functional', function() {
  this.timeout(10000)

  beforeEach(function() {
    this.app = new Application({
      path: path.join(process.cwd(), 'node_modules', '.bin', 'electron'),
      args: [path.resolve('app/index.js')]
    })

    return this.app.start()
  })

  afterEach(function() {
    if (this.app && this.app.isRunning()) {
      return this.app.stop()
    }
  })

  it('Should show the initial screen', function(done) {
    return this.app.client.getWindowCount().then(function (count) {
      expect(count).to.equal(1)
      done()
    })
  })

})
