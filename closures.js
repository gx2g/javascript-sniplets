<<<<<<< HEAD
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
=======
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
>>>>>>> 4870c39b472281e28be94d8792493c56e9fb848f
console.log(sayHello("John"));