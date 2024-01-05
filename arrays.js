// empty array
const myArr = [];

// indexing starts at 0
const myArr1 = [1, 2, 3, 4, 5]

// pulling out data from the array
const thirdElement = myArr1[2]; // returns 3

console.log(thirdElement);

// arrays can have any type of data
const myArr2 = [2441.32, "Hey there", false];

console.log(myArr2);

console.log(myArr2[0]);
console.log(myArr2[1]);
console.log(myArr2[2]);

// Length Property
const x = myArr1.length;
const y = myArr2.length;

console.log(x);
console.log(y);

// Array Methods

let myArr3 = [1, 2, 3, 4, 5, 6]
// retrieving data using square brackets [] is called indexing
console.log(myArr3[3]) 


/* 

Adding Elements 

*/

let myArr4 = [1, 2, 3];

// push() method adds a new value to the end of the array
console.log(myArr4);

myArr4.push(4);
myArr4.push(5);
myArr4.push(6);

console.log(myArr4);

// Unshift works the same but puts the value at the beginning of the array
myArr4.unshift("beginning of Array");

console.log(myArr4);