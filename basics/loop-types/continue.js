/*

The continue keyword allows you to skip the remaining code within a 
loop for the current iteration and proceed to the next iteration.



*/

for (let i = 0; i < 10; i++) {
    if (i < 5) {
        continue;
    }

    console.log("i -", i);

}

/*

In this example, the continue keyword is used to skip iterations of the loop 
where i is less than 5. As a result, only iterations with i values in the 
range [5, 9] execute the code inside the loop.

 */

// So if that's the case lets skip a Specific Iteration
// Example 2: 

for (let i = 0; i <= 5; i++) {
    console.log("iteration started:", i);

    if (i == 3) {
        continue; // skip the end of the 3rd iteration
    }

    console.log("- iteration ended:", i);
}

/*

Here, the continue statement is used to skip the end of the 3rd iteration, resulting 
in the output of "Iteration started" and "Iteration ended" messages for all 
iterations except the one where i equals 3.

The continue keyword works similarly to break, but instead of terminating the loop 
entirely, it only skips the current iteration and proceeds with the next one. 
This behavior can be handy for fine-grained control of loop execution.

*/

/*
TASK:

- The loop should stop at the 5th iteration.
- For each iteration, output the iteration number to the console.
- If the loop skips an iteration, output the word "Skip" to the console.
- If the loop stops, output the word "Stop" to the console.

*/

for (let i = 1; i <= 10; i++) {
    console.log("Iteration", i);
  
    if (i >= 5) {
      console.log("Stop");
      break;
    }
  
    if (i % 2 == 0) {
      console.log("Skip");
      continue;
    } else {
      console.log("Successful");
    }
  }

  /*
  
  Results should be:
  
    Iteration 1
        Successful
    Iteration 2
        Skip
    Iteration 3
        Successful
    Iteration 4
        Skip
    Iteration 5
        Stop
  
  */