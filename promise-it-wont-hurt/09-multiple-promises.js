var q = require("q");

var defer1 = q.defer();
var defer2 = q.defer();

all(defer1.promise, defer2.promise)
  .then(console.log);

setTimeout(function () {
  defer1.resolve("PROMISES");
  defer2.resolve("FTW");
}, 200);

function all (promise1, promise2) {
  var defer = q.defer();
  var counter = 0;
  var p1, p2;

  promise1.then(function (r) {
    p1 = r;
    counter += 1;

    if (counter >= 2) {
      defer.resolve([p1, p2]);
    }
  }).then(null, defer.reject);

  promise2.then(function (r) {
    p2 = r;
    counter += 1;

    if (counter >= 2) {
      defer.resolve([p1, p2]);
    }
  }).then(null, defer.reject);

  return defer.promise;
}
