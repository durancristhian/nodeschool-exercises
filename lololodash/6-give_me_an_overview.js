var _ = require("lodash");

var worker = function (data) {

	var partialResult = _.reduce(data, function (result, item, key) {

		if(result[item.article] === undefined) {

			result[item.article] = item.quantity;

		} else {

			result[item.article] += item.quantity;
		}

		return result;

	}, {});

	var result = [];

	_.forEach(partialResult, function (item, key) {

		result.push({
			"article": Number(key),
			"total_orders": item
		});
	});

	return _.sortBy(result, "total_orders").reverse();
}

// var data = [
// 	{ article: 1, quantity: 4 },
// 	{ article: 2, quantity: 2 },
// 	{ article: 1, quantity: 5 },
// 	{ article: 1, quantity: 5 },
// 	{ article: 3, quantity: 5 }
// ];

// console.log(worker(data));

module.exports = worker;