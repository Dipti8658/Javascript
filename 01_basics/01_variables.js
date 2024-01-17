const accountId = 144553;
let accountEmail = "dipti@gmail.com";
var accountPassword = "12345";
accountCity = "Bhubaneswar"; //This type we can declare but not prefer it.

let accountState; // Here variable is undefined 

// accountId = 2 // not allowed 

accountEmail = "dj@hc.com"
accountPassword = "213456"
accountCity = "Bangalore"

console.log(accountId);

/*
Prefer not to use var : because of issue in block scope and functional scope.
 */

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

