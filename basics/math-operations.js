 /*
 
(Priority of Execution of Operations)
Exponent ( ** )
Reminder, or Modulo ( % )
Division ( / )
Multiplication ( * )
Subtraction ( - )
Addition ( + )
 
 */

// Addition and Subtraction

console.log(25 + 13); // output: 38
console.log(37 - 2); // output: 35

let a = 25, b = 23;

console.log(a + b); // output: 48
console.log(a - b); // output: 2


// Multiplication and Division

console.log(12 * 3); // output: 36
console.log(12 / 3); // output: 4
console.log(273 / 23); // output: 11.869565217391305

let c = 77, d = 11;
console.log(c * d);
console.log(c / d);

// Remainder (Modulo)

console.log(77 % 10); // output: 7
console.log(25 % 11); // output: 3

let e = 27, f = 21;
console.log(e % f); // output: 6

// Exponent

console.log(10 ** 6); // 10 * 10 * 10 * 10 * 10 * 10 (6 times) output: 1000000
console.log(2 ** 7); // 2 * 2 * 2 * 2 * 2 * 2 * 2 (7 times) output: 128

let g = 2, h = 3;
console.log(g ** h); // 2 * 2 * 2 (3 times) output: 8

// Priority of Execution of Operations

console.log(25 + 7 * 2 ** 3);
// 8 first, 56 second, then 25 + 56 = 81

// note: if operators have same priority then execution will be from left to right
// Parentheses () have the highest priority. Inner parentheses are evaluated first, followed by outer ones.

console.log((25 + 7 ) * 2 ** 3);
// 25 + 7 = 32, 2 ** 3 = 8, 32 * 8 = 256

console.log(((25 + 7 ) * 2) ** 3);
// 25 + 7 = 32, 32 * 2 = 64, 64 ** 3 = 262144
// 64 x 64 x 64 = 262144

let myVar = Math.pow(64, 3);

console.log(myVar);