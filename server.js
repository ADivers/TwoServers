	var http = require("http")

	var PORTone = 7000;

	function handlerequestone(request, response) {
		response.end("you are a nice person")
	}

	var serverOne = http.createServer(handlerequestone);

	serverOne.listen(PORTone, function() {
		console.log("Server listening on: http://localhost:%s", PORTone)
	})


	var PORTtwo = 7050;

	function handlerequesttwo(request, response) {
		response.end("you should really study more")
	}

	var serverTwo = http.createServer(handlerequesttwo);

	serverTwo.listen(PORTtwo, function() {
		console.log("Server listening on: http://localhost:%s", PORTtwo)
	})
