
// function defination - function SayMyName(){}
function sayMyName() {
    console.log("D");
    console.log("I");
    console.log("P");
    console.log("T");
    console.log("I");
}

// sayMyName(); //Here  sayMyName -> reference & sayMyName() -> execution/ call

// function addTwoNumbers(number1, number2) // (number1, number2) -> parameter
// { 
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){ 

    // let result = number1 + number2
    // return result

    return number1 + number2
}

const result = addTwoNumbers(3, 5); //(3, 5) -> arguments

// console.log("Result :" , result);

function loginUserMessage(username = "Sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Dipti"));
// console.log(loginUserMessage());
// console.log(loginUserMessage("hitesh"));


//-- in case u don't know how many arguments are coming in that situation how to create parameters--

function calculateCartPrice(val1, val2, ...num1) // ... = rest operator
{
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

// how to pass & use object in function
const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user);

// How to pass object directly without create
handleObject({
    username: "Sam",
    price: 99
});

// how to pass & use Array in function

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));

// How to pass Array directly without create
console.log(returnSecondValue([200, 500, 600]));



