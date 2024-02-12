/*

The first two years of a dog’s life count as 10.5 dog years each.
Each year following equates to 4 dog years.

1. Create a variable named myAge, and set it equal to your age as a number.
2. Create a variable named earlyYears and save the value 2 to it. Note, the value saved to this variable will change.
3. Use the multiplication assignment operator to multiply the value saved to earlyYears by 10.5 and reassign it to earlyYears.
4. Since we already accounted for the first two years, take the myAge variable, and subtract 2 from it. Set the result equal 
   to a variable called laterYears. We’ll be changing this value later.
5. Multiply the laterYears variable by 4 to calculate the number of dog years accounted for by your later years. 
   Use the multiplication assignment operator to multiply and assign in one step.
6. If you’d like to check your work at this point, print earlyYears and laterYears to the console. Are the values what you expected?
7. Add earlyYears and laterYears together, and store that in a variable named myAgeInDogYears.
8. Let’s use a string method next. Write your name as a string, call its built-in method .toLowerCase(), and store the result in a variable called myName.
   The toLowerCase method returns a string with all lowercase letters.
9. Write a console.log statement that displays your name and age in dog years. Use string interpolation to display the value in the following sentence:
   My name is NAME. I am HUMAN AGE years old in human years which is DOG AGE years old in dog years.
   Replace NAME with myName, HUMAN AGE with myAge, and DOG AGE with myAgeInDogYears in the sentence above.



*/


const myAge = 47;
let earlyYears = 2;
earlyYears *= 10.5;
let laterYears = myAge - 2;
laterYears *= 4;
console.log(earlyYears);
console.log(laterYears);

myAgeInDogYears = earlyYears + laterYears;

let myName = "BOB FUEGOS".toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in doge years.`);
