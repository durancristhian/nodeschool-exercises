var _ = require("lodash");

var worker = function (data) {

	var html = "Hello <%= name %> (logins: <%= times %>)";
	
	var content = {
		name: data.name,
		times: data.login.length
	};

	return _.template(html, content);
};

// var data = { 
// 	name: "Foo",
// 	login: [ 1407574431, 140753421 ]
// };

// console.log(worker(data));

module.exports = worker;