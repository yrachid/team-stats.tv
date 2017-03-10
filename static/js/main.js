const fs = require('fs');
const config = fs.readFileSync(__dirname + '/stats.json').toString();

console.log(JSON.parse(config));
