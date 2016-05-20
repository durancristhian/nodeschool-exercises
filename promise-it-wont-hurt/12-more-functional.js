var qhttp = require("q-io/http");
var _ = require("lodash");

function buildURL (id) {
  return "http://localhost:7001/" + id;
}

qhttp.read("http://localhost:7000/")
  .then(_.compose(qhttp.read, buildURL))
  .then(JSON.parse)
  .then(console.log);
