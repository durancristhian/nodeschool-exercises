var q = require('q');
var def = q.defer();

def.promise.then(function (data) {

	console.log(data);
});

setTimeout(function () {

	def.resolve("RESOLVED!");
}, 300);