describe('unit -> index ', () => {

  const electron = { app: { whatever: true } }
  const start = td.function()
  const path = td.object(['resolve'])

  it('Should start the application', () => {

    td.when(path.resolve('app')).thenReturn('root/path')

    const index = solve('app', {
      'electron': electron,
      'path': path,
      './start': start
    })

    expect(start).to.have.been.calledWith(null, electron.app, 'root/path')

  })

})
