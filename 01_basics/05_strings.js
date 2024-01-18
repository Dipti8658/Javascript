
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

//==================== How to work all Prototype (examples) ===========
console.log(gameName.anchor(gameName));
//Returns an <a> HTML anchor element and sets the name attribute to the text value.

console.log(gameName.at(2));
const sentence = 'The quick brown fox jumps over the lazy dog.';
let index = 5;
console.log(`An index of ${index} returns the character ${sentence.at(index)}`);
// Expected output: "An index of 5 returns the character u"
//The at() method of String values takes an integer value and returns a new String

console.log(gameName.charCodeAt(2));
//The charCodeAt() method of String values returns an integer between 0 and 65535.

console.log(gameName.codePointAt(5));

const str1 = 'Hello';
const str2 = 'World';
console.log(str1.concat(' ', str2));//Returns a string that contains the concatenation of two or more strings.

console.log(String.fromCharCode(65,66,67));
//The String.fromCharCode() static method returns a string created from the specified sequence of UTF-16 code units.

console.log(String.fromCodePoint(65, 90));
//Return the String value whose elements are, in order, the elements in the List elements. If length is 0, the empty string is returned.

console.log(gameName.endsWith("com"));
console.log(gameName.endsWith("hi",2));
//The endsWith() method of String values determines whether a string ends with the characters of this string, returning true or false as appropriate. 
//endsWith(searchString)
//endsWith(searchString, endPosition)

console.log(gameName.lastIndexOf('hc'));
//The lastIndexOf() method of String values searches this string and returns the index of the last occurrence of the specified substring.

console.log(gameName.repeat(2));
//The repeat() method of String values constructs and returns a new string which contains the specified number of copies of this string, concatenated together.

console.log(gameName.replaceAll('hc', 'dd'));
//The replaceAll() method of String values returns a new string with all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. The original string is left unchanged.

console.log(newStringOne.trimEnd());
//The trimEnd() method of String values removes whitespace from the end of this string and returns a new string, without modifying the original string. trimRight() is an alias of this method.

console.log(newStringOne.trimStart());
//The trimStart() method of String values removes whitespace from the beginning of this string and returns a new string, without modifying the original string. trimLeft() is an alias of this method.

