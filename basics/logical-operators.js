/*

Logical Operators

There are three logical operators in Javascript

AND (&&);
OR (||);
NOT (!);


*/


/* 

AND (&&)

The AND (&&) logical operator returns true only 
when both values it operates on are true. 
The result is false if any value is false. 

*/

console.log(true && true); // answer: true
console.log(true && false); // answer: false
console.log(false && true); // answer: false
console.log(false && false); // answer: false

/* 

NOTE: The AND (&&) operator requires all values to 
be true to return true.

*/


/* 

OR (||)
The OR (||) logical operator returns true if at least 
one of the values is true. It returns false only when 
both values are false.

*/

console.log(true || true); // answer: true
console.log(true || false); // answer: true
console.log(false || true); // answer: true
console.log(false || false); // answer: false

/* 

NOTE: The OR (||) operator returns false only 
when both values are false.

*/

/* 

NOT (!)
The NOT (!) operator inverts the boolean value. 
It turns true into false and false into true.

*/

console.log(!true); // false
console.log(!false); // true

/* 

Using Logical Operators
Logical operators are often used to combine conditions. 
For example, to check if two values are greater than 
4 or greater than 1, you can use the AND (&&) operator.

*/

let a = 5, b = 3;

console.log(a > 4 && b > 4);
console.log(a > 1 && b > 1);

/*
Priority
Logoical operations have a lower priority than comparison operations, 
which, in turn, have a lower priority than mathematical operations. 

(!)  NOT
(&&) AND
(||) OR 

Note: Similar to other operations, you can use parentheses () 
to adjust the priority of execution.

*/

/*

Task
We have three variables in this task: a = 33, b = 26, and c = "26". We will perform various comparing operations on these variables.

1) Check if a is equal to b.
2) Check if b is strictly equal to c.
3) Determine if a is greater than or equal to c.
4) Find out if b is less than c.
5) Check if a is greater than b AND if b is equal to c.
6) Check if a is equal to b OR if c is less than a.

*/

console.log("============== TEST ================");

let userAge1 = 33;
let userAge2 = 26;
let userAge3 = "26";

console.log(userAge1 == userAge2); // Task 1
console.log(userAge2 === userAge3); // Task 2
console.log(userAge1 >= userAge3); // Task 3
console.log(userAge2 < userAge3); // Task 4
console.log(userAge1 > userAge2 && userAge2 == userAge3); // Task 5
console.log(userAge1 == userAge2 || userAge3 < userAge1); // Task 6
