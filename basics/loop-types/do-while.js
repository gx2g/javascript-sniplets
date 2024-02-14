/*

(note:) do-while executes the code then checks conition, unlike while loop checks condition first then executes the code. 

do {
    // code block
} while (condition);

The do-while loop is particularly useful when you need to prompt 
the user for input at least once and continue until the user 
enters valid data or meets a specific condition.

*/

let a = 0;

do {
  console.log(a);
  a++;
} while (a <= 3 && a >= 1);
// a greater then equal to one would be falsy
// a less then equal to 3 is truthy