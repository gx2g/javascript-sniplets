/*

An object constructor in JavaScript is a function used to create and initialize objects. 
It serves as a blueprint for creating multiple objects with similar properties and behaviors.

Here's a basic example of an object constructor:

*/

// Object constructor function
function Person(name, age, title) {
    this.name = name;
    this.age = age;
    this.title = title;
}

// Creating objects using the constructor function
let person1 = new Person('Jason', 22, 'Developer');
let person2 = new Person('Gina', 25, 'Tester');

console.log(person1); // Output: Person { name: 'Jason', age: 22, title: Developer }
console.log(person2); // Output: Person { name: 'Gina', age: 25, title: Tester }

/*

Person is the constructor function.
It takes parameters (name and age) to initialize the properties of the created objects.
The new keyword is used to create new instances (objects) of the Person constructor.
Inside the constructor function, this refers to the new object being created, and properties
are assigned to it using dot notation (this.name, this.age).

Object constructors are commonly used in JavaScript to create multiple objects with similar 
structures and behaviors, allowing for efficient code reuse and organization.

*/
