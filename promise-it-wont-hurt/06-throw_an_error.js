var q = require("q");
var data = process.argv[2];

function parsePromised () {

	var def = q.defer();
	var result;

	try {

		result = JSON.parse(data);
		def.resolve(result);
	} catch (e) {

		def.reject(e);
	}

	return def.promise;
}

parsePromised(data)
.then(null, console.log);