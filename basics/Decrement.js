let x = 3;
const y = x--; 

console.log(x) // returns 2 because the decrement happens after
console.log(y) // returns 3 because the decrement happens after

const j = --x;
console.log(j)