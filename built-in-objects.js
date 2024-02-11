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