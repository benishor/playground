console.log("Requiring http module");
var http = require("http");

console.log("Creating http server");
var server = http.createServer(function(request, response) {
	console.log("Received request " + request.method + " " + request.url + " with headers");
	console.log(request.headers);
	response.writeHead(200, {
		"Content-Type": "text/plain"
	});
	response.write("Hello World from NodeJS!");
	response.end();
});

console.log("Instructing http server to listen");
server.listen(8080);

console.log("After listening");
console.log("It turns out that the listen() method is not blocking!");