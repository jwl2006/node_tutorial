var fs = require('fs');
var bufObj = fs.readFileSync(process.argv[2]);
var bufStr = bufObj.toString();
var strArr = bufStr.split('\n');
var numLines = strArr.length - 1;
console.log(numLines);

