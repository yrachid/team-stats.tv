describe('unit -> config -> urls', () => {

  const urlsBuilder = solve('app/config/urls')

  it('should return the urls for the application view files according to the received basePath', () => {

    const urls = urlsBuilder('some/path')

    expect(urls.index).to.equal('file://some/path/render/index.html')
    expect(urls.default).to.equal('file://some/path/render/default.html')
    expect(urls.error).to.equal('file://some/path/render/error.html')

  })

})
