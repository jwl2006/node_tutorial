var http = require('http');
var port = process.argv[2];
var url = require('url');

var server = http.createServer(function(req, res) {
	var urlObj = url.parse(req.url, true);
	var pathName = urlObj.pathname;
	var time = urlObj.query.iso;
	var dateObj = new Date(time);
	var jsonData = new Object();


	if (pathName === '/api/parsetime') {
		jsonData.hour = dateObj.getHours();
		jsonData.minute= dateObj.getMinutes();
		jsonData.second  = dateObj.getSeconds();
	} else if (pathName === '/api/unixtime') {
		jsonData.unixtime = dateObj.getTime();
	}

	if (Object.getOwnPropertyNames(jsonData).length === 0) {
		res.writeHead(404);
		res.end();
	} else {
		res.writeHead(200, { 'Content-Type': 'application/json' });
		res.write( JSON.stringify(jsonData));  
		res.end();
	}
})


server.listen(port);