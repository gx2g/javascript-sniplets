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

let a = 935;

if (a > 17) {
  console.log("The variable is greater than 17");
}

if (a > 235124) {
  console.log("The variable is greater than 235124");
}

if (a > 0) {
  console.log("The variable is greater than 0");
}

if (a < 0) {
  console.log("The variable is less than 0");
}




let oranges = 5;
let apples = 3;
let fruit;

if (oranges > 0 && apples > 0) {
  fruit = oranges - apples;
  console.log("how many pieces of fruit =", fruit);
}

if (oranges > 2 && apples > 2) {
  fruit = oranges + apples;
  console.log("how many pieces of furit =", fruit);
}

console.log(oranges, apples, fruit);