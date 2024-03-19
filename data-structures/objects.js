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


/*
. notation is most common way to access
[] square brackets is another way, his syntax involves 
specifying the object's name, followed by square brackets 
with the property name as a string inside them.

Essential in cases where the property name is not known in 
advance or is stored in a variable, such as a function parameter

This method provides the property name as a string within square 
brackets. It allows for dynamic property access, which can be 
helpful when dealing with more complex data.

*/

console.log(classicCar.make);
console.log(classicCar["type@"]);
console.log(classicCar._tires);
console.log(classicCar["miles"]);
/*

Nested Properties
specifications and owner properties are objects themselves. 

*/

const computer = {
    brand: "Apple",
    model: "Macbook Pro",
    specifications: {
        processor: "M2",
        memory: "16GB RAM",
        storage: "512GB SSD",
    },
    owner: {
        name: "Rob",
        username:"Robster123",

    }
};

console.log(computer.brand);
console.log(computer.specifications.processor);


/*

Create a JavaScript object called informationCard representing basic personal information. Inside this object, include a nested object with contact details, such as a home address and phone number. The object should have the following structure:

Information card (outer object):

First Name (e.g., "Alice");
Last Name (e.g., "Smith");
Age (e.g., 25);
Contact Details (nested object)
Contact Details (nested object):

Home Address (e.g., "123 Main St, Apt 4B");
Phone Number (e.g., "555-123-4567");

*/

const informationCard = {
    firstName: "Alice",
    lastName: "Smith",
    age: 25,
    contactDetails: {
      homeAddress: "123 Main St, Apt 48",
      phoneNumber: "555-123-4567",
    },
  };


  /*
  
  access using . dot noation as well as [] square bracket notation 
  to display nested data.
  
  */


  const userShippingInfo = {
    name: "Alice",
    address: {
      street: "123 Main Street",
      city: "Wonderland",
      postalCode: "12345",
    },
    phoneNumbers: {
      home: "555-123-4567",
      work: "555-987-6543",
    },
  };

  console.log(userShippingInfo.address.postalCode); // not notation
  console.log(userShippingInfo["address"]["postalCode"]); // square notation
  
