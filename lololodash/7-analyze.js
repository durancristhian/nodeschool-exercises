var _ = require("lodash");

var worker = function (data) {

	var totalFreelancers = data.length;
	
	var totalIncome = _.reduce(data, function (sum, item) {
	
		return sum + item.income;
	}, 0);

	var average = totalIncome / totalFreelancers;

	var overPerform = _.filter(data, function (item) {

		return item.income > average;
	});

	overPerform = _.sortBy(overPerform, "income");
	
	var underPerform = _.filter(data, function (item) {

		return item.income <= average;
	});

	underPerform = _.sortBy(underPerform, "income");

	return {
		"average": average,
		"underperform": underPerform,
		"overperform": overPerform
	};
};

// var data = [
// 	{ name: "mike",  income: 2563 },
//     { name: "kim",   income: 1587 },
//     { name: "liz",   income: 3541 },
//     { name: "tom",   income: 2475 },
//     { name: "bello", income: 987  },
//     { name: "frank", income: 2975 }
// ];

// console.log(worker(data));

module.exports = worker;