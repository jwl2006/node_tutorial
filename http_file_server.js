var http = require('http');
var port = process.argv[2];
var fs = require('fs');
var filelocation = process.argv[3];

var server = http.createServer(function(req, res) {
	var fsstrm = fs.createReadStream(filelocation);
	fsstrm.pipe(res);

})

server.listen(port);