/*

What is an Object?
An object is a complex data type
Can represent real-world entities in a structured way

Can be people, things, concepts, or anything you can think of. 

Objects are sometimes called dictionaries because they consist of
a collection of key-value pairs. 

Each key also known as a property has an associated value

*/

const person = {
    name: "Bob",
    age: 48,
    isStudent: false
}

/*

Keys are strings and the value can be any valid js data type

*/

console.log("Hi, my name is " + person.name);

/*

Object Literals

*/

const classicCar = {
    make: "Belair",
    model: "Chevy",
    year: 1954,
    engine: "250 Inline 6",
    category: ["lowrider classic", "sunday cruiser"],

};

console.log("going for a ride in my " + classicCar.make);