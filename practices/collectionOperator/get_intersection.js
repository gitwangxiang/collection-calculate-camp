'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  var _ = require('../../lodash');
  var result = _.intersection(collection_b, collection_a);
  return result;
}

module.exports = get_intersection;
