var fs = require('fs');
var lineNum = undefined;
var fileName = process.argv[2];
function countLineNum(){
    fs.readFile(fileName,'utf8', function doneRead(err, data){
   	var objArr = data.toString().split('\n');
	lineNum = objArr.length - 1;
        console.log(lineNum);
    })
}

countLineNum();
