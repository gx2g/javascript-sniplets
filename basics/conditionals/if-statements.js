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



// more Multiple Conditions

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


let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
  } else if (season === 'winter'){
      console.log('It\'s winter! Everything is covered in snow.')
  } else if (season === 'fall'){
      console.log('It\'s fall! Leaves are falling!')
  } else if (season === 'summer'){
      console.log('It\'s sunny and warm because it\'s summer!')
  } else {
  console.log('Invalid season.');
}

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

Truthy and Falsy Assignment

Truthy and falsy evaluations open a world of short-hand possibilities!

Say you have a website and want to take a user’s username to make a 
personalized greeting. Sometimes, the user does not have an account, 
making the username variable falsy. The code below checks if username 
is defined and assigns a default string if it is not:

*/

let userName = '';
let defaultName;

if(userName){
  defaultName = userName
} else {
  defaultName = 'Create User Name'
}

console.log(defaultName) // prints: Create User Name

/*

If you combine your knowledge of logical operators you can use a 
short-hand for the code above. In a boolean condition, JavaScript 
assigns the truthy value to a variable if you use the || operator 
in your assignment:

*/

// play with && and || to determine behavior 
let userName1 = '';
let defaultName1 = userName1 || 'Truthy String';

if(defaultName1){
  console.log(defaultName1);
} else {
  console.log('Falsy')
}

/*

Because || or statements check the left-hand condition first, 
the variable defaultName will be assigned the actual value of 
username if it is truthy, and it will be assigned the value 
of 'Stranger' if username is falsy. This concept is also referred 
to as short-circuit evaluation.

*/

// short circit evaluation

let tool = ''; 
// falsy if empty strings, assign marker to it and test 
// tool = 'marker'

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil // = tool || 'pen' // Also, falsy if undeclared 

// prints pin which means pin is assigned to the left
console.log(`The ${writingUtensil} is mightier than the sword.`);

/*

Ternary Operator

In the spirit of using short-hand syntax, we can use a ternary operator 
to simplify an if...else statement.

Take a look at the if...else statement example:

*/

let isNightTime = true;

if (isNightTime) {
  console.log('Turn on the lights!');
} else {
  console.log('Turn off the lights!');
}

isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');

/*

The condition, isNightTime, is provided before the ?.
Two expressions follow the ? and are separated by a colon :.
If the condition evaluates to true, the first expression executes.
If the condition evaluates to false, the second expression executes.

Like if...else statements, ternary operators can be used for conditions 
which evaluate to true or false.

*/

let isLocked = false;

isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

let isCorrect = true;

isCorrect ? console.log('Correct!') : console.log('Incorrect!');

let favoritePhrase1 = 'Love That!';

favoritePhrase1 === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");



/*

The switch keyword

else if statements are a great tool if we need to check multiple 
conditions. In programming, we often find ourselves needing to 
check multiple values and handling each of them differently


*/

let groceryItem = 'papaya';

if (groceryItem === 'tomato') {
  console.log('Tomatoes are $0.49');
} else if (groceryItem === 'papaya'){
  console.log('Papayas are $1.29');
} else {
  console.log('Invalid item');
}

/*

In the code above, we have a series of conditions checking for a 
value that matches a groceryItem variable. Our code works fine, but 
imagine if we needed to check 100 different values! Having to 
write that many else if statements sounds like a pain!

A switch statement provides an alternative syntax that is easier 
to read and write. A switch statement looks like this:

*/

let groceryItem1 = 'papaya';

switch (groceryItem1) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default:
    console.log('Invalid item');
    break;
}

// Prints 'Papayas are $1.29'


/*

*/

let athleteFinalPosition = 'first place';

switch(athleteFinalPosition){
  case 'first place':
    console.log('You get the gold medal!');
    break;
  case 'second place':
    console.log('You get the silver medal!');
    break;
  case 'third place':
    console.log('You get the bronze medal!');
    break;
  default:
    console.log('No medal awarded.');
    break;
}