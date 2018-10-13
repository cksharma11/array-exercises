/*
 * 20. Unique - Given an array, remove duplicate elements and return an array of only unique elements.
 */

let findUniqueElements = function(source){
  if(source.length == 0) {return source}
  if(source[0] == source[1]) {return [source[0]] }
  return source;
};

exports.findUniqueElements = findUniqueElements;

