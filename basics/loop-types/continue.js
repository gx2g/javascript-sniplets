// The break keyword is a loop terminator
// allows you to exit a loop prematurely

let i = 1

while (true) {
    console.log("iteration", i)
    i++;
    if (i > 5) {
        break;
    }
}