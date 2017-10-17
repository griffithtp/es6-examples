var images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];

var heights;

heights = images.map(function(image) {
    return image.height;
});




/* ------ */

var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];

var speeds = trips.map(function (trip) {
   return trip.distance / trip.time;
});

/* ------*/

function pluck(array, property) {
    return array.map(function(item) {
        return item[property];
    });
}
