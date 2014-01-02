var http = require('http');
var url = require('url');

function start(route) {

	function handleRequest(request, response) {
		console.log('Received request ' + request.method + ' ' + request.url);
		route(url.parse(request.url).pathname);
		response.writeHead(200, {
			"Content-Type": "text/plain"
		});
		response.write("Hello World from NodeJS!");
		response.end();
	}

	var server = http.createServer(handleRequest);
	server.listen(8080);
	console.log("Server started");
}

exports.start = start;
