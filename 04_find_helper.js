var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

var admin = users.find(function(user) {
    return user.admin;
});

// -----
var accounts = [
  { balance: -10 },
  { balance: 12 },
  { balance: 0 }
];

var account = accounts.find((account) => {
    return account.balance == 12;
});


// -----
var ladders = [
  { id: 1, height: 20 },
  { id: 3, height: 25 }
];
function findWhere(array, criteria) {
  return array.find((item) => {
      const property = Object.keys(criteria)[0];
      return item[property] === criteria[property];
  });
}
findWhere(ladders, { height: '20 feet' });


// -----
var users = [
  { id: 21, hasSubmitted: true },
  { id: 62, hasSubmitted: false },
  { id: 4, hasSubmitted: true }
];

var hasSubmitted = users.every(function(user) {
   return user.hasSubmitted;
});

// ------
var requests = [
  { url: '/photos', status: 'complete' },
  { url: '/albums', status: 'pending' },
  { url: '/users', status: 'failed' }
];

var inProgress = requests.some((request) => {
   return request.status == 'pending' ;
});
