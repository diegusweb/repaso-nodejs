var http = require("http");

var manejador = function(solicitud, respuesta){
	console.log("Recibimos nueva");
	respuesta.end("Holaaa");
}

var servidor = http.createServer(manejador);

servidor.listen(8081);