let assert = require('assert');
let  { findUnique } = require('./library.js');

//Unique Elements of
const assertUnique = function(source,expected){
  assert.deepEqual(findUnique(source),expected);
}
//          empty array should be an empty array
assertUnique([],[]);

//          an array of single element is an array of just that element
assertUnique([1],[1]);

//          an array with a duplicate should be an array with just one of those elements
assertUnique([1,1],[1]);

//          an array of 2 unique items should give both
assertUnique([1,2],[1,2]);

//          an array of 3 identical items should give one of them
assertUnique([1,1,1],[1]);

//          an array of 2 identical items out of 3 should give two of them
assertUnique([1,1,2],[1,2]);

