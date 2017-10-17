/*
Symbol.iterator - generator delegation within object
ie. implementing function generator within object
 */
const testingTeam = {
  lead: 'Josh',
  engineer: 'Ben',
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.engineer
  }
};
const engineeringTeam = {
  testingTeam,
  size: 3,
  department: 'engineering',
  lead: 'Gerard',
  manager: 'Todd',
  engineer: 'Alex',
  designer: 'Steve'
};

function* teamIterator(team) {
  yield team.lead;
  yield team.manager;
  yield team.engineer;
  yield team.designer;
  yield* team.testingTeam;
}

const names = [];
for (let name of teamIterator(engineeringTeam)) {
  names.push(name);
}
console.log(names);
