const td = require('testdouble');
const tdChai = require('testdouble-chai');
const chai = require('chai');

chai.use(tdChai(td))

global.expect = chai.expect;
global.td = td;
