var _ = require("lodash");

var getNames = function (data) {
  return Object.keys(data);
};

var getTasksByName = function (data, name) {
  var result = [];
  result = data[name];

  return _.sortBy(result, "date");
};

var isUrgent = function (task) {
  var taskDate = new Date(task.date).getTime();
  var today = new Date().getTime();
  var timeDiff = (taskDate - today) / (1000 * 3600 * 24);

  return timeDiff <= 2;
}

var worker = function (data) {
  var html =
    "<ul><% _.forEach(getNames(data), function (name) { %>" +
      "\n<li><%= name %>" +
        "\n<ul><% _.forEach(getTasksByName(data, name), function (task) { %>" +
          "<li>" +
            "<% if(isUrgent(task)) { %><b>URGENT</b><% } %>" +
            "<%= task.todo %>" +
          "</li>\n<% }); %>" +
        "</ul> "  +
      "\n</li><% }); %>" +
    "</ul>";

  return _.template(
    html,
    {
      "data": data
    },
    {
      'imports': {
        "getNames": getNames,
        "getTasksByName": getTasksByName,
        "isUrgent": isUrgent
      }
    }
  );
};

// var data = {
//   "Tom": [
//       {
//           "todo": "Clean kitchen",
//           "date": "2014-08-19T12:13:20.207Z"
//       },
//       {
//           "todo": "Lean Lo-Dash",
//           "date": "2014-08-10T12:13:20.210Z"
//       },
//       {
//           "todo": "Become a Lo-Dash master",
//           "date": "2014-08-12T12:13:20.210Z"
//       }
//   ],
//   "Tim": [
//       {
//           "todo": "Contibute to an Open-Sorce-Project",
//           "date": "2014-08-11T12:13:20.210Z"
//       }
//   ]
// };

// console.log(worker(data));

module.exports = worker;
