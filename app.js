document.write('The current version of io.js is: ' + process.version);
document.write('The current version of Electron is: ' +
  process.versions['electron']);

var fs = require('fs');

var contents = fs.readFileSync('./package.json', 'utf8')
alert(contents);