const profile = {
  title: 'Engineer',
  department: 'Engineering'
};
function isEngineer({title, department}) {
  return title === 'Engineer' && department === 'Engineering';
}

// array destructuring
const classes = [
  [ 'Chemistry', '9AM', 'Mr. Darnick' ],
  [ 'Physics', '10:15AM', 'Mrs. Lithun'],
  [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
];

const classesAsObject = classes.map(
    ([subject, time, teacher]) => {
        return {subject, time, teacher};
    }
);
