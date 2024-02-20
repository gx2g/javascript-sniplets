let userName = ''; // I like to call this falsy cause it's empty string

// if the user doesn't enter a name, the condition userName ? will evaluate to false because it will be an empty string
userName ? console.log('Hello, ${userName}!') : console.log('Hello!');

const userQuestion = console.log('What is my name?', userName);

let randomNumber = Math.floor(Math.random() * 8);

/*

Math.random() returns a value between 0 (inclusive) and 1 (exclusive).

In order to make this set of numbers range from 0 (inclusive) to 8 (exclusive) we can multiply the returned value by 8.

Finally, to ensure we only have whole numbers from 0 to 7 we can round down using Math.floor().

 */

let eightBall = '';
