/*
Iterating through generator function with 'for...of ' loop
Also generator delegation, ie. function generator calling another function generator
 */

const testingTeam = {
  lead: 'Josh',
  engineer: 'Ben',
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
  const testingTeamGenerator = testingTeamIterator(team.testingTeam);
  yield* testingTeamGenerator;
}
function* testingTeamIterator(team) {
  yield team.lead;
  yield team.engineer;
}

const names = [];
for (let name of teamIterator(engineeringTeam)) {
  names.push(name);
}
console.log(names);
