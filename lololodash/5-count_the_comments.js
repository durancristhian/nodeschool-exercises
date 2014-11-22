var _ = require("lodash");

var worker = function (comments) {

	var result = [];

	var byUser = _.groupBy(comments, "username");

	_.forEach(byUser, function (item, key) {

		result.push({
			username: key,
			comment_count: _.size(item)
		});
	});

	return _.sortBy(result, "comment_count").reverse();
};

// var comments = [
// 	{ username: "tim", comment: "you doing a great job!" },
// 	{ username: "tim", comment: "when you have new workshoppers?" },
// 	{ username: "cat_lover", comment: "wtf? where are all the cats gone?" },
// 	{ username: "max", comment: "where have you been on friday? we missed you!" },
// 	{ username: "max", comment: "Do don't answer anymore - why?" },
// 	{ username: "cat_lover", comment: "MORE cats!!!" },
// 	{ username: "max", comment: "i really love your site" }
// ];

// console.log(worker(comments));

module.exports = worker;