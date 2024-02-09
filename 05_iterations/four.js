// forin loop :-

const myObject = {
    js: 'java',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(myObject[key]);
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}


const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
//    console.log(key);
//    console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United states of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//    console.log(key);
// }
// Here out put is not coming bcz Map is not iterable

// Note :- We can use forin loop upon object
// Note :- We can use forof loop upon array & we can also use different loop upon array
