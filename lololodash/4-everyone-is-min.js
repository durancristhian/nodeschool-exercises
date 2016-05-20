var _ = require("lodash");

function isHotCity (values) {
  return _.every(values, function (value) {
    return value > 19;
  });
}

function isWarmCity (values) {
  return _.some(values, function (value) {
    return value > 19;
  });
}

var worker = function (collection) {
  var result = {
    "hot": [],
    "warm": []
  }

  _.forEach(collection, function (values, key) {
    if(isHotCity(values)) {
      result.hot.push(key);
    } else if(isWarmCity(values)) {
      result.warm.push(key);
    }
  });

  return result;
};

// var collection =  {
//   Hamburg:   [14,15,16,14,18,17,20,22,21,18,19,23],
//   Munic:     [16,17,19,20,21,23,22,21,20,19,24,23],
//   Madrid:    [24,23,20,24,24,23,21,22,24,20,24,22],
//   Stockholm: [16,14,12,15,13,14,14,12,11,14,15,14],
//   Warsaw:    [17,15,16,18,20,20,21,18,19,18,17,20]
// };

// console.log(worker(collection));

module.exports = worker;
