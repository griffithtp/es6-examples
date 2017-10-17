var ladders = [
  { id: 1, height: 20 },
  { id: 3, height: 25 }
];

function findWhere(array, criteria) {
  return array.find(function(item) {
    const property = Object.keys(criteria);
    return item[property] === criteria[property];
  });
}

findWhere(ladders, {height: 25}); // { id: 3, height: 25 }
findWhere(ladders, {id: 1}); // { id: 1, height: 20 }
