/*

Functions are frist class objects, because they can be passed from other functions
Can be assigned to variables and other properties. They can also have properties and methods
just like other objects. 

What distinguishes them from other objects is that functions can be called.

Function values are typically instances of Function.

properties and methods of Function objects. Callable values cause typeof to 
return "function" instead of "object".



*/

// function declaration 
function square(myNum) {
  return myNum * myNum;
}

/*
 
 Parameters are essentially passed to functions by value
 
 When you pass an object as a parameter, if the function changes 
 the object's properties, that change is visible outside the 
 function, as shown in the following example:
 
 */
function carDealer(theObject) {
  theObject.make = "Chevy";
}

// create an object
const myCar = {
  make: "chevolete",
  model: "belair",
  year: "1954",
};

// console log object make value global scope
console.log(myCar.make); // chevolette

// call function myCar make value function scope
carDealer(myCar); // call function

// Call myCar make and noticed value has changed
console.log(myCar.make); // Chevy


/*

When you pass an array as a parameter, if the function changes 
any of the array's values, that change is visible outside the function

*/

function myScores (scores) {
  scores[0] = 30;
}

const scores = [45];

console.log(scores[0]);
myScores(scores);
console.log(scores[0]);

/*

Function Expression -  can be anonymous;

*/
// declare a variable = to a function expression
const square1 = function (myNum) {
  return myNum * myNum;
};

console.log(square1(4)); // 16

/* 

 better to give the function a name so you can refer to itself and
 it's easier to see in debuggers 

 */

const factorial = function fac(n) {
  // 3 * 3 is 3, 3 times 3 + 3 + 3
  // n * fac(n - 1) is taking away one of the 3's
  return n < 2 ? 1 : n * fac(n - 1);
}
console.log(factorial(3));
console.log(factorial(2));




// old way of doing functions
var greeting = function(){
    console.log('Old Function - Hello World');
};

greeting();

// ES6 new arrow functions
const greeting1 = () => console.log('New Function - Hello World');

greeting1();

/*

Functions are specific objects that receive values, perform operations, and then 
return values. One of the most significant advantages of a function is its 
ability to be used multiple times, promoting code reusability.

Let's explore a simple function example:

*/
function meeting(name) {
    console.log("------ Meeting with " + name + " ------");
    console.log("Hello, " + name + "!");
    console.log("I'm glad to see you!");
    console.log("But I need to go");
    console.log("Goodbye, " + name + "!");
    console.log("See you again!");
}
meeting("Mary");
meeting("Kate");
meeting("Sean");

/*
  
In this example, the meeting function is defined and takes a name parameter. 
Inside the function is a code block containing various console.log statements. 
The function is called three times with different names as arguments.

The power of functions lies in their reusability. This function, written in 
just 8 lines of code, contains a code block of 6 lines. However, it can be called 
multiple times, eliminating the need to copy and paste those 6 lines of code.

Note

The example here aims to provide a basic understanding of functions. No detailed 
analysis is needed for now. In practice, functions are versatile and help developers
organize and reuse code effectively.



To create a new function, use the function keyword. Provide a name for the function 
and define any arguments it should accept:

function functionName(arguments) {
  // code block
}

The structure of a function definition includes:

- The function keyword.
- The function name, typically in camelCase like variables.
- Arguments enclosed in parentheses ().
- A code block within curly brackets {}.

Arguments

Functions have their own data storage space. Arguments are values passed to a 
function, which the function uses as variables. These arguments cease to exist 
when the function finishes executing.

To define arguments, assign a name to each one:

// Function without arguments
function first() {}

// Function with one argument
function second(argument) {}

// Function with multiple arguments
function third (argument1, argument2, argument3) {}

If a function accepts multiple arguments, separate them with commas (,).

(Note) - Arguments are used like variables inside the function's code block.

Function calling
To use a function, call it using parentheses () and provide the necessary 
arguments if the function expects any:

*/

// Function Definition
function func(arg) {
    console.log("Argument received:", arg, "Argument type:", typeof arg);
  }
  
  // Function Calling
  func(1);
  func(2521);
  func("Rabbit");
  func(true);


  // my name function

  function myName(name) {
    console.log("My name is", name);
  };
  
  myName("Bob");
  myName("Robi");
  myName("Roberto");

  // Arguments in the function

  // Arguments are function variables that you can use only inside the function:

  let data1 = ""
  function thisFunc(data1, data2) {
    console.log("inside Func Arg A = ", typeof(data1));
    console.log("inside Func Arg b = ", data2);
  };

  thisFunc(8, 24);

  console.log("Global data1 = ", typeof(data1));