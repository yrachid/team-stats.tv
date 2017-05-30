const td = require('testdouble')
const tdChai = require('testdouble-chai')
const chaiAsPromised = require('chai-as-promised');
const chai = require('chai')
const proxyquire = require('proxyquire')
const path = require('path')

class PromiseMock {

  constructor() {
    this.capturedThenCallback = null
    this.capturedCatchCallback = null
  }

  then(callback) {
    this.capturedThenCallback = callback
    return { catch: this._catch.bind(this) }
  }

  _catch(callback) {
    this.capturedCatchCallback = callback
  }

}

chai.use(tdChai(td))
chai.use(chaiAsPromised)

const basePath = path.resolve()

global.expect = chai.expect
global.td = td
global.proxyquire = proxyquire
global.path = path
global.resolve = path.resolve
global.resourcePath = partialPath => path.join(path.resolve(), 'test', '_resources', partialPath)
global.solve = (file, stubs = {}) => proxyquire(path.join(basePath, file), stubs)
global.PromiseMock = PromiseMock
