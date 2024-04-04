/*

Objects, Functions, Constructors

Objects is a concept in JS. It's a generic container with some data.
Objects contain properties and keys and associated values. 

In JS everything that is not a primitive is an object.
This includes functions which are basically a special type of Object. 

*/



function myFunc1(){
    let score = 3; // local inside function can't return from outside
    console.log(score); // prints 3 local variable is accessable inside function
    console.log(myFunc1.score); // prints 5 because it's an inline property
}

// inline property added to function
myFunc1.score = 5;

// invoking function
myFunc1();

console.log("==================================");
//    Regular Functions vs Constructors Functions

/*
    Is a function an object in javascript?

    Yes, in JavaScript, a function is considered an object. 
    This is because functions in JavaScript have properties 
    and methods, similar to other objects.

    Here’s a simple example to demonstrate this:
*/

// Define a function
function myFunction() {
    console.log("Functions are objects!");
}
     
// Add a property to the function
myFunction.message = "adding property to the function like an object.";
     
// Call the function
myFunction(); // Outputs: Functions are objects!
   
// Access the property
console.log(myFunction.message); // Outputs: adding property to the function like an object.

/*
    Adding Object Properties via inline
*/

let motorBike = {
    type: "Street Bike",
    color: "Black",
    model: 500,
    make: "Yamaha"
}

console.log("when I'm feeling chill I ride my " + motorBike.type);

// adding properties inline to the object motorBike
motorBike.type = "Skooter";
motorBike.color = "white";
motorBike.model = 200;
motorBike.make = "viper";

console.log("when I'm feeling chill I ride my " + motorBike.type);
console.log("motorBike is an " + typeof(motorBike));

/*
    This style can be time consuming if you have a lot of objects to create.
    This is where functions come in to play and are very handy. 
*/

function createMotorBike(type, color, model, make) {

    let newMotorBike = {};
        
    newMotorBike.type = type;
    newMotorBike.color = color;
    newMotorBike.model = model;
    newMotorBike.make = make;

    return newMotorBike;

}

let motorBike1 = createMotorBike("custom", "navy blue", 547, "harley");
console.log(motorBike1);

let motorBike2 = createMotorBike("sports bike", "green", 2200, "honda");
console.log(motorBike2);

// constructor function
function CreateCar(type, model, color, year) {
    this.type = type,
    this.model = model,
    this.color = color,
    this.year = year
}

// must use new when creating object
let car1 = new CreateCar("chevy", "belair", "black", 1954);
console.log(car1);
console.log(car1.type);
console.log("my car is a " + car1.type)
