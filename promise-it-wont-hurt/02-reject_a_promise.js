var q = require('q');
var defer = q.defer();

defer.promise.then(null, function (error) {

	console.log(error.message);
});

setTimeout(function () {

	defer.reject({
		message: "REJECTED!"
	});
}, 300);