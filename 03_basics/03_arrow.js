
const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this); // in node it gives empty obj ({})

// inside the browser a global object is present that is window object 
// for access the variable that is present inside a scope or access the current context{} we use this 

// if u print this inside a function then what type of output show in node environment 

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai();

// Here we can't use this inside a function but it works inside an object

// ================ Arrow function ==================

// const chai = function() {
//     let username = "hitesh"
//     console.log(this.username);
// }

// declare a arrow function
const chai = () => {
    let username = "hitesh"
    console.log(this);
}

// chai()

// Explicitly return 
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3, 4))

//implicit return -> mai maan liya ki aapko return keyword likhneki jaroorat nehin hai kiyon ki app ki 1 line ka statement hai
// const addTwo = (num1, num2) => num1 + num2 

// const addTwo = (num1, num2) => (num1 + num2) // it is widely used in react

// How to return object
const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()

