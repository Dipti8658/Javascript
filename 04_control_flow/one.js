// if else

// const temperature = true
const temperature = 41

// if ( temperature === 40 ) {
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");

// comparision operator :- <, >, <=, >=, ==, !=, ===, !==

const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);

const balance = 1000

//===== Implicit scope =====
if (balance > 500) console.log("text");
if (balance > 500) console.log("text"), console.log("text2"); // It's not fair for best practice

// Nested scope

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// }

const userloggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userloggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
