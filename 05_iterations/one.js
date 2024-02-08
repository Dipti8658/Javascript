// for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5) {
        // console.log("5 is best number");
    }
    // console.log(element);
}

// console.log(element); // here element is not accessiable

// Nested loop
for (let i = 0; i < 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 0; j <= 10 ; j++) {
        // console.log(`Inner loop value: ${j} and inner loop ${i}`);
        // console.log(i + '*' + j + ' = ' + i*j);
        
    }
}


let myArray = ["flash", "batman", "superman"]
console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

// break and continue

// for (let index = 0; index < 20; index++) {
//     if (index == 5) {
//         console.log("Detected 5");
//         break;
//     }
//     console.log(`Value of i is ${index}`);
    
// }

for (let index = 0; index < 20; index++) {
    if (index == 5) {
        console.log("Detected 5");
        continue;
    }
    console.log(`Value of i is ${index}`);
    
}

// break: The break statement terminates the current loop or switch statement and transfers program control to the statement following the terminated statement. 

// continue: The continue statement terminates execution of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration.

