/*
Simple example of function generators and iterating step by step through yields
 */

function* colors() {
  console.log(111);
  yield 'red';
  console.log(222);
  yield 'green';

  console.log(33);
  yield 'blue';
  return 'pink';
}
const myColors = [];
//for (let color of colors()) {
  //myColors.push(color);
//}
//myColors;

const c = colors();
c.next('assad');
c.next();
c.next();
c.next();
