var http = require('http');
var concatstream= require('concat-stream');

var urls = process.argv.slice(2);
var results = [];
var resultCnt = 0;

urls.forEach(function(url, i) {
		http.get(url, function(response) {
		response.setEncoding('utf8');
		response.pipe(concatstream(function(data) {
			results[i] = data;
			resultCnt++;
			if (resultCnt === urls.length) {
				results.forEach(res=> console.log(res));
			}
		}))

	});
});



