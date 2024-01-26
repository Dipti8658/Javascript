
// singleton
//Object.create


// object literals

const mySym = Symbol("key1")

const JsUser = {
    name : "Dipti",
    "full Name": "Dipti Ranjan",
    [mySym]:"mykey1",
    age: 18,
    location: "Bhubaneswar",
    email: "dipti@gmail.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday", "Saturday"]
}

// how to access the values
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full Name"]);
// console.log(JsUser[mySym]); // access symbol value

JsUser.email = "dipti@chatgpt.com" // change the value of object
// Object.freeze(JsUser) // lock the object value
JsUser.email = "dipti@microsoft.com"
// console.log(JsUser);

// treat function as a variable
JsUser.greeting = function(){
    console.log("Hello Js users");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js users, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());




