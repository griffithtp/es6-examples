var numbers = [1,1,2,3,4,4];
function unique(array) {
  return array.reduce(function(prev, item){
    let found = prev.find(function(it){
      return it == item;
    });
    if (!found) {
      prev.push(item);
    }
    return prev;
  },[]);
}

unique(numbers);
