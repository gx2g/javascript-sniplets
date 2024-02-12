/*

String Concatenation

combine two strings with the + operator.


*/

let wordOne = "Hello";
let wordTwo = "World";

console.log(wordOne + wordTwo);

/*
You can see that concatenation creates a new string 
by combining two words.

(Note): String concatenation does not automatically add spaces. 
You need to manually include spaces like string1 + " " + string2.

*/ 

console.log(wordOne + " " + wordTwo);
console.log(wordOne + ", " + wordTwo + "!");

/*

String Interpolation
in ES6 version of JS, we can insert, or interpolate, variables into 
strings using template literals.

*/

const myPet = 'armadillo';
console.log(`I own a pet ${myPet}.`);
// output: I own a pet armadillo

/*
a template literal is wrapped by backticks ` 
(this key is usually located on the top of your keyboard, left of the 1 key).
*/

let myName = "Bob Fuegos";
let myCity = "Los Angeles";
console.log(`My name is ${myName}. My favorite city is ${myCity}`)