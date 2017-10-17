function product(...numbers) {
  return numbers.reduce((acc, number) => {
    return acc * number;
  }, 1)
}

// with arrays
function join(array1, array2) {
  return [...array1, ...array2];
}

// mixing rest and spread
function unshift(array, ...arr) {
  return [...arr, ...array];
}
