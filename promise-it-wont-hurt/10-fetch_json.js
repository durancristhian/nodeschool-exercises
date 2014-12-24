var qio = require("q-io/http");

var promise = qio.read("http://localhost:1337");

promise
	.then(JSON.parse)
	.then(console.log);