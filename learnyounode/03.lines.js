var fs = require('fs');
var buffer = fs.readFileSync(process.argv[2]);
var str = buffer.toString();
// console.log(str);
// console.log(str.split('\n'))
var length = str.split('\n').length - 1;
console.log(length);