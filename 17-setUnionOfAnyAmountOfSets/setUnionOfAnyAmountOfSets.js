function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  let results = new set();
  for(var i = 0; i < args.length; i++){
    ars[i].forEach(num =>{
      if(!results.has(num))
      results.add(num);
    });
  }
  return results;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;