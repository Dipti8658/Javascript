// forof loop -> Arrays specific loop

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
//    console.log(num); 
}

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

// for (const greet of greetings) {
//     if(greet == " "){
//         continue;
//     }
//     console.log(`Each char is ${greet}`);
// }

// for (const greet of greetings) {
//     if(greet == " "){
//         break;
//     }
//     console.log(`Each char is ${greet}`);
// }

// Maps -> Data type
//Map:-  The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

const map = new Map()
map.set('IN', "India")
map.set('USA', "United states of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

// for (const key of map) {
//     console.log(key);
// }

// this type we can destructuring a array
for (const [key, value] of map) {
    console.log(key, ':-', value);
}

// Here Maps are itertable by forof loop

const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }

// Here objects are not itertable by forof loop


//Note:-  By the help of forOf loop Maps are iteratable but objects are not iteratable