
// ===================== Array ===========================

const myArr = [0, 1, 2, 3, 4, 5] //declare
const myHeros = ["shaktiman", "naagraj"] //declare

const myArr2 = new Array(1, 2, 3, 4) //declare
// console.log(myArr[1]);

// ++++++++++++++++ Array methods +++++++++++++++++++++++

myArr.push(6) //Appends new elements to the end of an array, and returns the new length of the array.
myArr.push(7) 
myArr.pop() // Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

myArr.unshift(9) // Elements to insert at the start of the array.

myArr.shift() //Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

// console.log(myArr.includes(9)); 
// Determines whether an array includes a certain element, returning true or false as appropriate.

// console.log(myArr.indexOf(3)); 
//Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

const newArr = myArr.join() 
// Adds all the elements of an array into a string, separated by the specified separator string.

// console.log(myArr);
// console.log(newArr);

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);
