const td = require('testdouble');
const tdChai = require('testdouble-chai');
const chai = require('chai');
const proxyquire = require('proxyquire');
const path = require('path');

chai.use(tdChai(td))

const basePath = path.resolve();

global.expect = chai.expect;
global.td = td;
global.proxyquire = proxyquire;
global.path = path;
global.resolve = path.resolve;
global.solve = (file, stubs = {}) => proxyquire(path.join(basePath, file), stubs);
