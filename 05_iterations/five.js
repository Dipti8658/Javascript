// Note:- whenever array is coming in that case we most use higherorder function(forEach & map) 

// forEach loop:-

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// })

// in arrow function
// coding.forEach( (item)  => {
//     console.log(item);
// } )

// Remember:- In call-back function function-name is not wriiten

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)
// if u declare a function then u pass on forEach() in that case u have to pass reference  not execution/ call of that function


// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
} )


