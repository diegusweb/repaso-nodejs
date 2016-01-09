var http = require("http"),
	fs= require("fs");

//var html = fs.readFileSync("./inde.html");	

http.createServer(function(req, res){
	fs.readFile('./inde.html', function(err, html){
		res.writeHead(200,{"Contest-Tpe":"application/json"})
		res.write(JSON.stringify({nombre:"Uriel", username:"uriel"}));
		res.end();
	});
}).listen(8081);



