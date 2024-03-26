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
    age: 33,
    student: true,
    "transfer": false, // key property wrapped with " " rules apply
    
}

/*

Keys are strings and the value can be any valid js data type

*/

console.log("Hi, my name is " + person.name); // dot notation

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
    category: ["lowrider classic", "sunday cruiser", 345, false],
    "type@": "car",
    _tires: "white walls",
    $sound: "WiFi, Samsung XRT39100"
};


/*
. notation is most common way to access

[] square brackets is another way, this syntax involves 
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
console.log(typeof(classicCar.category)); // testing different data types in array
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
    },
};

console.log(computer.brand);
console.log(computer.specifications.processor);


/*

Create a JavaScript object called informationCard representing basic personal information. 
Inside this object, include a nested object with contact details, such as a home address 
and phone number. The object should have the following structure:

Information card (outer object):

First Name (e.g., "Alice");
Last Name (e.g., "Smith");
Age (e.g., 25);

Clearance Details (nested object):
  Access Level (e.g., "Secure level 2 Only")
  Department (e.g., "Cyber Systems")

Contact Details (nested object):
  Home Address (e.g., "123 Main St, Apt 4B")
  Phone Number (e.g., "555-123-4567")

*/

const informationCard = {
    firstName: "Alice",
    lastName: "Smith",
    age: 25,
    clearanceDetials: {
      AccessLevel: "Secure level 2 Only",
      department: "Cyber Systems",
    },
    contactDetails: {
      homeAddress: "123 Main St, Apt 48",
      phoneNumber: "555-555-5555",
    },
  };

console.log("informationCard contact #: " + informationCard.contactDetails.phoneNumber);

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

  console.log("userShippingInfo postalCode is: " + userShippingInfo.address.postalCode); // dot notation
  console.log("userShippingINfo Home #: " + userShippingInfo["phoneNumbers"]["home"]); // square notation
  
/* 

Practice accessing object properties

*/

  const user = {
    name: "Sarah",
    age: 32,
    hobbies: {
      outdoor: "hiking",
      indoor: "painting",
    },
    preferences: {
      music: "jazz",
      movieGenre: "sci-fi",
    },
  };
  // Task 1
  console.log(user.name); // person's name
  
  // Task 2
  console.log(user.hobbies.indoor); // indoor hobby
  
  // Task 3
  const userAge = user.age;
  console.log(userAge); // person's age
  
  // Task 4
  console.log(user.preferences.music); // music value = jazz
  

  /*
  
  Important concepts when working with Objects
    - modifying property values;
    - adding new properties;
    - using shorthand properties;
  
  */

// Modifying Property Values


const race = "Native American"
const sex = "Male";

myCompany = {

    title: "Bob Code",
    industry: "Sales",
    founded: {
        year: 1988,
        month: "July",
        day: "29th"
    },
    race: race,
    sex: sex,
};

myCompany.title = "Code Bobby"; // modifying object property
console.log(myCompany.title); // Output: Code Bobby

myCompany.industry = "Retail"; // modifying object property
console.log(myCompany.industry); // Ooutput: Retail

console.log("type of value is a " + typeof(myCompany.founded.year));

// Adding Property Values

myCompany.founder = "Bob Fuegos";
console.log(myCompany.founder); // Output: Bob Fuegos

// Short hand code for adding values to objects

console.log(myCompany.race);
console.log(myCompany.sex);

/*
    Shorthand properties simplify the process of creating objects, 
    especially when you want to use variable or function parameter 
    values as property values.

    This syntax allows us to use the variable name as the property 
    name and its value as the property value.
*/


/*

Create an Object that contains various types of properties:

- Simple properties like name and age.
- Nested objects like address.
- Arrays like hobbies and friends.
- A method greet() which logs a greeting message.

This object demonstrates how you can create complex data structures 
in JavaScript, combining different types of data and functionalities.

*/


const complexObject = {
  name: "Bob Fuegos",
  age: 30,
  address: {
      street: "123 Main St",
      city: "Los Angeles",
      country: "USA"
  },
  hobbies: ["reading", "coding", "hiking"],
  friends: [
      { name: "Alice", age: 28 },
      { name: "Sam", age: 32 },
      { name: "Charlie", age: 35 } // objects nested within an array
  ],
  greet: function() {
      console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
  }
};

// Accessing properties and invoking methods
console.log(complexObject.name); // Output: Bob Fuegos
console.log(complexObject.address.city); // Output: Los Angeles
console.log(complexObject.hobbies[1]); // Output: Coding

// Iterating over friends
complexObject.friends.forEach(
  function(friend) {
    console.log(friend.name + " is " + friend.age + " years old.");
  }
);

// Invoking method
complexObject.greet(); // Output: Hello, my name is Bob Fuegos and I am 30 years old.