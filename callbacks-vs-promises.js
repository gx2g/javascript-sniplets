// callbacks vs promises

// javascript is asynchronous

const fs = require('fs');

function printResults(err, result) {
    console.log(result);
}

fs.readFile("random.txt", { encoding: 'utf-8' }, printResults);


// Promise using readFilePromise

const readFilePromise = require("./readFilePromise");
const resultPromise = readFilePromise("random.txt");

if (true){
    console.log(resultPromise.then(result => console.log(result)));
}