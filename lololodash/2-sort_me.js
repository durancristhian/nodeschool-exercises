var _ = require("lodash");

var worker = function (collection) {

	return _.sortBy(collection, "quantity").reverse();
};

module.exports = worker;