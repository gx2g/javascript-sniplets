// Creating an Empty Array
const myArr = [];

// indexing starts at 0, commas to separate them
const myArr1 = [1, 2, 3, 4, 5]

//              0, 1, 2, 3, 4


// pulling out data from the array using [] brackets
const thirdElement = myArr1[2]; // returns 3

console.log(thirdElement);

// arrays can have any type of data
const myArr2 = [2441.32, "Hey there", false];

console.log(myArr2);

console.log(myArr2[0]);
console.log(myArr2[1]);
console.log(myArr2[2]);

console.log("================ Length =====================");

// Length Property represents the number of elements in an Array
const x = myArr1.length;
const y = myArr2.length;

console.log("x:", x);
console.log("y:", y);

// Array Methods

let myArr3 = [1, 2, 3, 4, 5, 6]
// retrieving data using square brackets [] is called indexing
console.log("returns:", myArr3[3]) 



console.log("================ Push() =====================");
/* 

Adding Elements - using push() method

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


console.log("=====================================");

/*

You can append a new value by Indexing:

 */

let myArr5 = [1, 2];
myArr5[2] = 3;
myArr5[3] = 4;

console.log(myArr5);

/* 

indexing allows you to assign a value to a specified index, 
reassign a previous value, and more:

*/


myArr5[0] = 4;

console.log(myArr5);

console.log("=====================================");

let myArr6 = [1, 2];

myArr6[myArr6.length] = "indexing 1";
console.log(myArr6);

myArr6.push("pushing 1");
console.log(myArr6);

myArr6[myArr6.length] = "indexing 2";
console.log(myArr6);

myArr6.push("pushing 2");
console.log(myArr6);

console.log("=====================================");

/*

Deleting Elements - using pop()

*/

let myArr7 = [11, 22, 33, 44];
console.log("Array:", myArr7);

let myNewArray = myArr7.pop();
console.log(myNewArray);
console.log("Array after pop:", myArr7);

console.log("=====================================");

const animals = ["Dogs", "Cats"];
console.log(animals);
const count = animals.pop();
console.log(count);
console.log(animals);

console.log("=====================================");

/*
Little Test Array 
Output: Bobby, 27, Bob, 21
*/

let myArr8 = ["Bobby", 25, "Bob", 16];

myArr8.pop();
console.log(myArr8);
myArr8.push(21);
myArr8[1] = 27;

console.log(myArr8);
