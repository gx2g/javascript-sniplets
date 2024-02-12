// STUDY https://www.w3schools.com/jsref/jsref_obj_promise.asp


// There are built in objects in JS. 
// built in Math() object for example

// great thing about objects is they have methods

// example Math.random() will print a random number between 0 and 1

// call random() method using . dot operator
console.log(Math.random()); 

// create a random number between 0 and 50
console.log(Math.random() * 50);

// create a random number between 1 and 50
console.log((Math.random() * 50) +1);

// Math.floor() makes whole number, notice how to wrap objects with method calls
console.log(Math.floor(Math.random() * 50));

// The Math.ceil() method rounds a number rounded UP to the nearest integer.
console.log(Math.ceil(43.8));

// The Math.abs() method returns the absolute value of a number.
console.log(Math.abs(-7.25));

// 0 if the value is null 
console.log(Math.abs(null)); 

// NaN if the value is not a number
console.log(Math.abs("Hello String"));

// The Math.cbrt() method returns the cubic root of a number.
console.log(Math.cbrt(125));

// The Math.floor() method rounds a number DOWN to the nearest integer.
console.log(Math.floor(1.7));

// The Math.max() method returns the number with the highest value.
console.log(Math.max(0, 150, 30, 20, 38));

// The Math.min() method returns the number with the lowest value.
console.log(Math.min(0, 150, 30, 20, 38));

// Math.PI returns PI (the ratio of a circle's area to the square of its radius, approximately 3.14)
console.log(Math.PI);

// The Math.pow() method returns the value of x to the power of y (xy).
console.log(Math.pow(2, 2));

// The Math.round() method rounds a number to the nearest integer.
// 2.49 will be rounded down (2), and 2.5 will be rounded up (3).
console.log(Math.round(2.5));


/* 

The Math.sign() method retuns whether a number is negative, positive or zero.

If the number is positive, this method returns 1.
If the number is negative, it returns -1.
If the number is zero, it returns 0.

*/

console.log(Math.sign(-3));
console.log(Math.sign(3));
console.log(Math.sign(0));

// 

console.log(Math.sqrt(0));
console.log(Math.sqrt(1));
console.log(Math.sqrt(9));
console.log(Math.sqrt(64));
// NaN if number is negitive
console.log(Math.sqrt(-9));

// The Math.trunc() method returns the integer part of a number.
// The Math.trunc() method removes the decimals (does NOT round the number).
console.log(Math.trunc(8.76));


// ====================================================
// Java Script Number Methods
// ====================================================

console.log(Number.isInteger(123)); // true
console.log(Number.isInteger(-123)); // true
console.log(Number.isInteger("123")); // false


console.log(Number.isInteger(0)); // false
console.log(Number.isInteger(0 / 0)); // false
console.log(Number.isInteger(0.5)); // false
console.log(Number.isInteger(false)); // false
console.log(Number.isInteger(NaN)); // false
console.log(Number.isInteger(Infinity)); // false
console.log(Number.isInteger(-Infinity)); // false
