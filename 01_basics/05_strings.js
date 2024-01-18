
const name = "dipti" //declare string
const repoCount = 30

// console.log(name + repoCount + " Value");

//string interpolation 
console.log(`Hello my name is ${name} and my repo count is ${repoCount} `);

// modern ways to declare a string
const gameName = new String('hitesh-hc-com')

console.log(gameName[0]); //key value pair access
console.log(gameName.__proto__); // prototype access

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4) // devided in to substring method
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);
//The slice() method of String values extracts a section of this string and returns it as a new string, without modifying the original string.

const newStringOne = "  hitesh  "
console.log(newStringOne);
console.log(newStringOne.trim());
//trim() : Removes the leading and trailing white space and line terminator(new line) characters from a string.


const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'));

console.log(url.includes('hitesh'));
//includes() :Returns true if searchString appears as a substring of the result of converting this object to a String, at one or more positions that are greater than or equal to position; otherwise, returns false.

console.log(gameName.split('-'));
//split : Split a string into substrings using the specified separator and return them as an array.