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

- KEY (proporty name)
- Value (can be any valid js data type)
- Commas (proporties within an object are seporated by commas)

- KEY Name Rules to follow

    when naming keys (proporty names) there are some simple rules to follow. 
    If a key is enclosed in quotes (single or double), it can be an arbitrary string. 
    You can use spaces, special characters, and valid string content as the key. 

    Unquoted Keys (restrictions apply) The key should be a name without spaces and 
    should begin with a letter or one of the characters: _, $, or any Unicode character.

*/

const classicCar = {
    make: "Belair",
    model: "Chevy",
    year: 1954,
    engine: "250 Inline 6",
    category: ["lowrider classic", "sunday cruiser"],
    "type@": "car",
    _tires: "white walls"

};

console.log(classicCar.make);
console.log(classicCar["type@"]);
console.log(classicCar._tires);