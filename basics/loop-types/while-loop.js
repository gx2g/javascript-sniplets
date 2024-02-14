/*

The while loop checks the condition before executing the code block. 
If the condition is initially false, the code block will not be executed.

The while loop is the simplest type of loop. It continues to execute a code 
block as long as the specified condition remains true.

- Initially, the variable a is set to 5.
- The loop condition is a <= 10, which is true, so the code block is executed.
- After each execution, the variable a is incremented by 1.
- The loop continues to execute as long as the condition remains true.

Be cautious with the condition! If the condition always evaluates to true, the 
loop will never break, resulting in an infinite loop, which can cause your program 
to hang or become unresponsive.


*/

let a = 5; 

while(a <= 10) {
    console.log("a = ", a);
    a++;
}