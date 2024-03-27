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


function createMoterBike(type, color, model, make){
    
    let newMotorBike = {};
    
    newMotorBike.type = type;
    newMotorBike.color = color;
    newMotorBike.model = model;
    newMotorBike.make = make;

    return newMotorBike;

}

let motorBike1 = createMoterBike("custom", "navy blue", 547, "harley");
console.log(motorBike1);

console.log(createMoterBike("sports bike", "green", 2200, "honda"));