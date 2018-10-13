let assert = require('assert');
let findUniqueElements = require('./library.js').findUniqueElements;

//Unique Elements of
const assertUnique = function(source,expected){
  assert.equal(findUniqueElements(source),expected);
}
//          empty array should be an empty array
assertUnique([],[]);

//          an array of single element is an array of just that element
//assert.equal(findUniqueElements([1]),[1]);

