const fibonacci = n => {
  if (n < 3) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};


// arrow function not always the solution. see below
const profile = {
    name: 'Alex',
    getName: function() {
        return this.name;
    }
};
