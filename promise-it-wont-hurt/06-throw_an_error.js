var q = require("q");
var data = process.argv[2];

function parsePromised () {

	var def = q.defer();
	var result;

	try {

		result = JSON.parse(data);
	} catch (e) {

		def.reject(e);
	}

	def.resolve(result);
	return def.promise;
}

parsePromised(data)
.then(null, console.log)