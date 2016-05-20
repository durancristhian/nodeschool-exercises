var qio = require("q-io/http");

var promise = qio.read("http://localhost:7000");

promise
  .then(function (id) {
    return qio.read("http://localhost:7001/" + id);
  })
  .then(JSON.parse)
  .then(console.log);
