
// Primitive

// It is of 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const Id = Symbol('123')
const anotherId = Symbol('123')

console.log(Id === anotherId);

// const bigNumber = 45566677777777543456453n


// Non-primitive(Reference type)

// Array, Objects , Functions

const heros = ["shaktiman", "naagraj", "doga"]; // arrays

//object
let myObj = {
    name: "Dipti",
    age: 22,
}

//function
const myFunction = function(){
    console.log("Hello World");
}

// How to know datatype of a variable
// console.log(typeof score); // number
// console.log(typeof scoreValue); // number
// console.log(typeof isLoggedIn); // boolean
// console.log(typeof outsideTemp); // object
// console.log(typeof userEmail); // undefined 
// console.log(typeof Id); // symbol
// console.log(typeof anotherId); // symbol

// console.log(typeof heros); //object
// console.log(typeof myObj); //object
// console.log(typeof myFunction); //object(object-function)



// Typeof Vale : Result
//-------------------------
// Undefined -> "undefined"
// Null ->	"object"
// Boolean -> "boolean"
// Number -> "number"
// String -> "string"
// Object (native and does not implement [[Call]]) ->	"object"
// Object (native or host and does implement [[Call]]) ->	"function"
// Object (host and does not implement [[Call]]) ->	Implementation-defined except may not be "undefined", "boolean", "number", or "string".

// function -> object-function

// https://262.ecma-international.org/5.1/#sec-11.4.3
