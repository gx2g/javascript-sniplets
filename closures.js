//
// Closures
// inner function that has access to outter function varaibles and parameters

// greet function that returns another function. 
function greet(greeting){
	return function(name){
		return greeting + " " + name;
	}

}
// function is assigned to sayHello and has access to return value even after it's been ran. 
const sayHello = greet("Hello")

// uses returned value to return a personalized message passing John
console.log(sayHello("John"));