const tileConfig = solve('app/config/tiles')

describe('component -> main -> config -> tiles', () => {

  it('Should load a valid config file correctly', done => {

    const configPath = resourcePath('valid-tile-config.json')

    tileConfig
      .fromFile(configPath)
      .then( config => {

        expect(config.title).to.equal('I am valid')
        expect(config.tiles.length).to.equal(1)
        expect(config.tiles[0].id).to.equal('wercker')
        expect(config.tiles[0].src).to.equal('https://app.wercker.com/')
        expect(config.tiles[0].classList).to.equal('wercker')
        expect(config.tiles[0].position.columnStart).to.equal(1)
        expect(config.tiles[0].position.columnEnd).to.equal(101)
        expect(config.tiles[0].position.rowStart).to.equal(45)
        expect(config.tiles[0].position.rowEnd).to.equal(101)
        expect(config.tiles[0].presets.zoomFactor).to.equal(1)
        expect(config.tiles[0].presets.scrollTop).to.equal(125)
        expect(config.tiles[0].presets.refreshRate).to.equal(3)

        done()
      })
      .catch(done)

  })

  it('Should fail when loading an invalid file', done => {
    const configPath = resourcePath('invalid-tile-config.json')

    tileConfig
      .fromFile(configPath)
      .then(() => done(new Error('File loading should have failed')))
      .catch(error => {
        expect(error.message).to.equal('Failed to parse configuration: <br />  should have required property \'tiles\'')
        done()
      })
  })

})
