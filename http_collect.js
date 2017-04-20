var bl = require('bl');
var http = require('http');
var url = process.argv[2];


http.get(url, function(response) {
    response.pipe(bl(function (err, data) {
        var dataStr = data.toString();
        console.log(dataStr.length);
        console.log(dataStr); 
    }));
});
