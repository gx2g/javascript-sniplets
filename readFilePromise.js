const fs = require("fs");

module.exports = function readFilePromise(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, {encoding: "utf-8"}, (err, result) => {
            resolve(result);
        })
});

}