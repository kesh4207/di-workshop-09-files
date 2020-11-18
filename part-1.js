console.log('your code here');
var fs = require('fs');
var fileContents = fs.readFileSync('names.txt');
console.log(fileContents);
