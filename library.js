/*
 * 20. Unique - Given an array, remove duplicate elements and return an array of only unique elements.
 */

let findUniqueElements = function(source){
  if(source.length>1) source.pop();
  return source;
};

exports.findUniqueElements = findUniqueElements;

