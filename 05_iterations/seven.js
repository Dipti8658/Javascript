const myNumbers = [1, 2, 3, 4, 5, 6, 7,8 ,9, 10]

// const newNums = myNumbers.map( (num) => num + 10 )
// console.log(newNums);

// How to execute above example by the help of forEach()
// const newNums = []
// myNumbers.forEach( (num) => 
//         newNums.push(num+10)
//  )

// console.log(newNums);


// ================= chaining ========================

const newNums = myNumbers
                .map( (num) => num * 10 )
                .map( (num) => num + 1 )
                .filter( (num) => num >=40 )

console.log(newNums);

//====== Note ========

// The map() and filter() methods are both array methods in JavaScript that are used to iterate over an array and return a new array. However, there are some key differences between the two methods.

// The map() method takes a callback function as an argument and applies that function to each element of the array. The callback function can return any value, and the map() method will return a new array containing the results of calling the callback function on each element of the original array.

// The filter() method also takes a callback function as an argument, but the callback function must return a boolean value. The filter() method will return a new array containing only the elements of the original array for which the callback function returned true.

