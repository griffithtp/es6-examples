var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var totalDistance = trips.reduce(function(previous, trip){
    return previous += trip.distance;
}, 0);


// ------
var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];
var deskTypes = desks.reduce(function(prev, desk) {
    if (desk.type == 'sitting') {
        return {sitting: ++prev.sitting, standing: prev.standing};
    }
    if (desk.type == 'standing') {
        return {sitting: prev.sitting, standing: ++prev.standing};
    }
    return prev;
}, { sitting: 0, standing: 0 });


// ------
var numbers = [1, 1, 2, 3, 4, 4];
function unique(array) {
  return array.reduce(function(prev, item) {
      if (!prev.find(function(it){
          return it == item;
      })) {
          prev.push(item);
      }
      return prev;
  }, []);
}
unique(numbers);
