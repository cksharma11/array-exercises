/*
 * 20. Unique - Given an array, remove duplicate elements and return an array of only unique elements.
 */

exports.findUniqueElements = function(source){
  const result = [];
  for(let item of source){
    const shouldAdd = !result.includes(item);
    if(shouldAdd){
      result.push(item);
    }
  }
  return result;
};

