let assert = require('assert');
let findUniqueElements = require('./library.js').findUniqueElements;

//Unique Elements of
const assertUnique = function(source,expected){
  assert.deepEqual(findUniqueElements(source),expected);
}
//          empty array should be an empty array
assertUnique([],[]);

//          an array of single element is an array of just that element
assertUnique([1],[1]);

//          an array with a duplicate should be an array with just one of those elements
assertUnique([1,1],[1]);

//          an array of 2 unique items should give both
assertUnique([1,2],[1,2]);

