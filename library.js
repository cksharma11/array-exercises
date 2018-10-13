/*
 * 20. Unique - Given an array, remove duplicate elements and return an array of only unique elements.
 */

exports.findUnique = function(elements){
  const uniqueElements = [];
  for(let element of elements){
    const shouldAdd = !uniqueElements.includes(element);
    if(shouldAdd){
      uniqueElements.push(element);
    }
  }
  return uniqueElements;
};

