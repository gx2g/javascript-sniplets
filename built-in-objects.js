// There are built in objects in JS. 
// built in Math() object for example

// great thing about objects is they have methods

// example Math.random() will print a random number between 0 and 1

// call random() method using . dot operator
console.log(Math.random()); 

// create a random number between 0 and 50
console.log(Math.random() * 50);

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