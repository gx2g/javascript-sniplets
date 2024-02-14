/*

For Loop - uses the for keyword and requires three parameters enclosed in parentheses:

for (Initialization; Condition; Increment / Decrement) {
  // code block
}

- Initialization: This is where you initialize a new counter used by the for loop. It's executed only once.
- Condition: An expression checked before each iteration, similar to the while loop.
- Increment/Decrement: Operations performed on the counter at the end of each loop iteration.

(Note) Iteration in loops refers to repeating a block of code a certain number of times or 
until a specific condition is met. Each time the block of code is executed, it's considered one iteration.

- let i = 1: Initialization, where we create the variable i inside the for loop. This operation executes once.
- i < 5: Condition, checked before each iteration.
- i++: Increment expression, executed after each iteration.
- console.log("Loop iteration:", i);: Body of the for loop.

*/

for (let i = 1; i < 5; i++) {
    console.log("Loop iteration:", i);
};

// Each step in the loop can be described as follows:

/*

// Step 1: Counter initialization
let i = 1;
// Step 2: Main loop body
if (i < 5) {  // condition check
  console.log("Loop iteration:", i); // loop body
}
i++; // increment operation

step 2 repeats until the condition is false. 

*/

// example of decrementing in for loops
for (let i = 15; i > 10; i--) {
    console.log("i =", i);
}

/* 
The for loop counter is unique to its scope, so you don't need to worry about the 
counter name conflicting with other variables:

*/

let i = 2077; // global variable 
console.log("(global) i =", i); // lets run it before for loop

// let i = 0 inside of for loop
for (let i = 0; i < 4; i++) {
  console.log("(for) i =", i);
}

console.log("(global) i =", i); // check let i = after for loop 


// Different expressions for Increment/Decrement operations can be used as well:
for (let i = 0; i < 40; i += 7) {
    console.log("i =", i);
  };

/* 

Comparing the for and while loops
When comparing for and while loops, the for loop is often simpler and more concise. 
Here's an example of equivalent loops:

*/

// WHILE
let a = 1;
while (a <= 3) {
  console.log("While:", a);
  a++;
}

// FOR
for (let i = 1; i <= 3; i++) {
  console.log("For:", i);
}

/*

In this comparison, the for loop is more straightforward and occupies less code space. 
Additionally, the for loop automatically clears the counter variable (in this case, i) after execution.

*/

// keep in mind

// global scope inside for loop printed 5 times
let tiger = "Tiger";

// forVar can be named anything it's just Counter initialization
for (let forVar = 0; forVar < 5; forVar++) {
  console.log(tiger);
};