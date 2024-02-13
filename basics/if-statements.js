/* if condition is true, code runs, if false code skips */

/* 
you can print false but on and off, 1 and 0, true and false, 
usually want to print if condition is true 
*/

if (true){
    console.log("condition is true")
}

if(false){
    console.log("condition is false")
}

// expression as well as value can be considered. 

let userLikes = 935

if (userLikes > 17) {
  console.log("The variable is greater than 17")
}

if (userLikes > 235124) {
  console.log("The variable is greater than 235124")
}

if (userLikes > 0) {
  console.log("The variable is greater than 0")
}

if (userLikes < 0) {
  console.log("The variable is less than 0")
}




let oranges = 5
let apples = 3
let fruit // variable no assignment

if (oranges > 0 && apples > 0) {
  fruit = oranges - apples
  console.log("how many pieces of fruit =", fruit)
}

if (oranges > 2 && apples > 2) {
  fruit = oranges + apples
  console.log("how many pieces of furit =", fruit)
}

console.log(oranges, apples, fruit)



// Multiple Conditions

let cardPlayer1 = 11

if (cardPlayer1 > 15) {
  console.log('greater than 15')
}

if (cardPlayer1 > 10) {
  console.log('greater than 10')
}

if (cardPlayer1 > 5) {
  console.log('greater than 5')
}

if (cardPlayer1 > 0) {
  console.log('greater than 0')
}

/* 
in this senerio we have multiple true statements, 
may not be the output we want. maybe we want to run only one statement
*/


// else if, breaks out if first true or last else if is false 
let gameScore = 801

if(gameScore >= 1000){
    console.log("greater then = 100")
} else if (gameScore <= 88) {
    console.log("first else if statement")
} else if (gameScore >= 800) {
    console.log("last else if statement")
} else {
    console.log("root else statement")
}

// play around with the numbers to get different condition statements

/*
When using the && operator, both conditions must evaluate to true for the 
entire condition to evaluate to true and execute. Otherwise, if either 
condition is false, the && condition will evaluate to false and the 
else block will execute.

*/
let stopLight = 'green'
let pedestrians = 0

if (stopLight === 'green' && pedestrians === 0) {
  console.log('Go!')
} else {
  console.log('Stop')
}

// If we only care about either condition being true, we can use the || operator:
let today = 'Saturday'
let tomorrow = 'Sunday'


if (today === 'Saturday' || tomorrow === 'Sunday') {
  console.log('Enjoy the weekend!')
} else {
  console.log('Do some work.')
}

// Not Operator

let excited = true
console.log(!excited) // Prints false

let sleepy = false
console.log(!sleepy) // Prints true

/*

Essentially, the ! operator will either take a true value and pass back 
false, or it will take a false value and pass back true.

*/

// more examples

let mood = 'sleepy'
let tiredLevel = 6

if (mood === 'sleepy' && tiredLevel > 8) {
  console.log('time to sleep')
} else {
  console.log('not bed time yet')
}


// Truthy and Falsy

let wordCount = 0

if (wordCount) {
  console.log("Great! You've started your work!")
} else {
  console.log('Better get to work!')
}


let favoritePhrase = "Hello World"

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.")
} else {
  console.log('This string is definitely empty.')
}

/* 

The code block in the if statement will run because myVariable has a 
truthy value; even though the value of myVariable is not explicitly 
the value true, when used in a boolean or conditional context, 
it evaluates to true because it has been assigned a non-falsy value.

So which values are falsy— or evaluate to false when checked as a condition? The list of falsy values includes:

0
Empty strings like "" or ''
null which represent when there is no value at all
undefined which represent when a declared variable lacks a value
NaN, or Not a Number


*/