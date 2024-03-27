/*

Regular Functions vs Constructors

*/

let motorBike = {
    type: "Street Bike",
    color: "Black",
    model: 500,
    make: "Yamaha"
}

motorBike.type = "Skooter";
motorBike.color = "white";
motorBike.model = 200;
motorBike.make = "viper";

console.log(motorBike);


/*



*/


function createMotorBike(type, color, model, make){
    
    let newMotorBike = {};
    
    newMotorBike.type = type;
    newMotorBike.color = color;
    newMotorBike.model = model;
    newMotorBike.make = make;

    return newMotorBike;

}

let motorBike1 = createMotorBike("custom", "navy blue", 547, "harley");
console.log(motorBike1);

// calling createMotorBike with out variable 
console.log(createMotorBike("sports bike", "green", 2200, "honda"));

// constructor function
function createCar(type, model, color, year) {
    this.type = type,
    this.model = model,
    this.color = color,
    this.year = year
}

// must use new when creating object
let car1 = new createCar("chevy", "belair", "black", 1954);
console.log(car1);
