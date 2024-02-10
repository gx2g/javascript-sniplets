// callbacks vs promises

// javascript is asynchronous

let fs = require('fs');

function printResults(err, result) {
    console.log(result);
}

fs.readFile("random.txt", { encoding: 'utf-8' }, printResults);
