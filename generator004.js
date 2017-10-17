/*
example of Iterator - function generator vs Symbol.iterator
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
  [Symbol.iterator]: function* (){
    yield this.lead;
    yield this.manager;
    yield this.engineer;
    yield this.designer;
    yield* this.testingTeam;
  }
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
//names;

const newNames = [];
for (let newName of engineeringTeam){
  newNames.push(newName);
}
console.log(newNames);
