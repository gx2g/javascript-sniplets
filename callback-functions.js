// Global Execution Context


logger(2); // on global stack, logs (2,3,1) runs inside function first because it was called before function. 
console.log(1)

function logger() {
    console.log(2)
    finish()
    console.log(3)
    function finish() {
        console.log("finished")
    }
}
logger(2); // runs after (1) in global stack logs (1,2,3)
// Function Execution Context


// What's a call back?

function message() {
    console.log("hello there")
}

// this is a higher order function, which means a function that takes another function as a param
function logger1(message) {
    message()
}

logger1(message)


// Other Examples of Callback Functions
function doSomething(value) {
    console.log("convert txt to uppercase" + " " + value.toUpperCase())

}

doSomething("robert")

function doSomething1(value) {
    console.log("math calutation 10 * 20 = " + " " + value * 10)
}

doSomething1(20)

function doSomething2(value) {
    console.log("callback with .length function =" + " " + value.length)
}

doSomething2([1,2,3,4,5])

