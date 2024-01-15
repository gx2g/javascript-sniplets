/*

Comparisons are used to define 
conditions, perform checks, 
and make decisions in JavaScript. 
These operations return a boolean 
value (true or false), which other 
operators use to determine certain actions.


Equal to (==);
Strict Equal To (===);

Not Equal To (!=);
Strict Not Equal To (!==);

Greater Than (>);
Greater Than or Equal To (>=);

Less Than (<);
Less Than or Equal To (<=);


Equal and Not Equal
The Equal To operation (==) returns true 
if the first value equals the second value 
and false otherwise.

Conversely, the Not Equal To operation (!=) 
returns true if the values are unequal.

Equal and Not Equal

The Equal To operation (==) returns true if the 
first value equals the second value and false otherwise.

Conversely, the Not Equal To operation (!=) returns true 
if the values are unequal.

*/

console.log("5 == 5 is", 5 == 5);
console.log("5 == 4 is", 5 == 4);
console.log("5 == 4.99 is", 5 == 4.99);

console.log("Not equal to:");
console.log("5 != 5 is", 5 != 5);
console.log("5 != 4 is", 5 != 4);
console.log("5 != 4.99 is", 5 != 4.99);


/* (NOTE)
The = operator is for assignment, while == is for comparison. 
Be careful to distinguish them.
*/

/* 

Strict comparison

 Strict comparison checks the types of values and values. 
 The Strict Equal To (===) operator returns true - if both the 
 values and their types are the same, while !== returns true 
 if they are different.

 */

console.log("5 === 5 is", 5 === 5);
console.log("5 === '5' is", 5 === '5');
console.log("5 == '5' is", 5 == '5');

console.log("5 !== 5 is", 5 !== 5);
console.log("5 !== '5' is", 5 !== '5');
console.log("5 != '5' is", 5 != '5');

console.log("Type of 5 is", typeof(5));
console.log("Type of '5' is", typeof('5'));

/*

Greater and Less

The Greater Than (>) operator returns true if the first value 
exceeds the second. Conversely, the Less Than (<) operator returns 
true if the first value is less than the second.

*/

console.log("5 > 5 is", 5 > 5);
console.log("5 > 4.99 is", 5 > 4.99);
console.log("5 > 5.0000001 is", 5 > 5.0000001);

console.log("5 < 5 is", 5 < 5);
console.log("5 < 4.99 is", 5 < 4.99);
console.log("5 < 5.0000001 is", 5 < 5.0000001);

/*

Greater/Less Than or Equal to
The Greater Than or Equal To (>=) and Less Than or Equal To (<=) operators 
combine the corresponding comparison operators with Equal To (==). 
They return true if either of the conditions is satisfied.

*/

console.log("5 >= 5 is", 5 >= 5);
console.log("5 >= 4.99 is", 5 >= 4.99);
console.log("5 >= 5.0000001 is", 5 >= 5.0000001);

console.log("5 <= 5 is", 5 <= 5);
console.log("5 <= 4.99 is", 5 <= 4.99);
console.log("5 <= 5.0000001 is", 5 <= 5.0000001);