var net = require('net');
var strftime = require('strftime');
var port = process.argv[2];

var server = net.createServer(function listener(socket) {
	var date = new Date();
	var data = strftime('%F %H:%M', new Date());
	data += '\n';
	socket.end(data);
});
server.listen(port);