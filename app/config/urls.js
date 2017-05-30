module.exports = basePath => {

  const FILE_PATH = `file://${basePath}/render`

  return {
    index: `${FILE_PATH}/index.html`,
    error: `${FILE_PATH}/error.html`,
    default: `${FILE_PATH}/default.html`
  }

}
