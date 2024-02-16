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



/*

Here, the variable a is incremented by i during each iteration (0 + 1 + 2 + 3 + 4) 
until i becomes equal to 4. At that point, the break statement is triggered.

*/
let a = 0

for (let i = 0; i < 10; i++) {
    a += i;
    console.log("a = ", a)

    if (i > 3) {
        break;
    }

}

/*

i = 0   a = 0 + 0
i = 1	a = 0 + 1
i = 2	a = 1 + 2
i = 3	a = 3 + 3
i = 4	a = 6 + 4  four is greater then 3 so we break 

if i greater then 3
break

*/