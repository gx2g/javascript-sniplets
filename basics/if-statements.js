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

let userLikes = 935;

if (userLikes > 17) {
  console.log("The variable is greater than 17");
}

if (userLikes > 235124) {
  console.log("The variable is greater than 235124");
}

if (userLikes > 0) {
  console.log("The variable is greater than 0");
}

if (userLikes < 0) {
  console.log("The variable is less than 0");
}




let oranges = 5;
let apples = 3;
let fruit; // variable no assignment

if (oranges > 0 && apples > 0) {
  fruit = oranges - apples;
  console.log("how many pieces of fruit =", fruit);
}

if (oranges > 2 && apples > 2) {
  fruit = oranges + apples;
  console.log("how many pieces of furit =", fruit);
}

console.log(oranges, apples, fruit);



// Multiple Conditions

let cardPlayer1 = 11;

if (cardPlayer1 > 15) {
  console.log('greater than 15');
}

if (cardPlayer1 > 10) {
  console.log('greater than 10');
}

if (cardPlayer1 > 5) {
  console.log('greater than 5');
}

if (cardPlayer1 > 0) {
  console.log('greater than 0');
}

/* 
in this senerio we have multiple true statements, 
may not be the output we want. maybe we want to run only one statement
*/


// else if, breaks out if first true or last else if is false 
let gameScore = 801;

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