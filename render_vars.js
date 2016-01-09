var http = require("http"),
	fs= require("fs"),
	demo = require("./demo.js");

//var html = fs.readFileSync("./inde.html");	

var d = demo.demito;

http.createServer(function(req, res){
	fs.readFile('./inde.html', function(err, html){
		var html_string = html.toString();

		var variables = html_string.match();

		var nombre = "Diego Rueda";

		console.log("---------------");
		console.log(d());

		res.writeHead(200,{"Content-Type":"text/html"})
		res.write(html);
		res.end();
	});
}).listen(8081);

