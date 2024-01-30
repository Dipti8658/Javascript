// var c = 300
let a = 300
if(true){
    let a = 10
    const b = 20
    // c = 30
    // console.log("INNER: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

// Global scope in browser console is different from global scope in node


// Global scope
{
    // local scope / block-level scope
}


//============= Nested Scope ==============
function one(){
    const username = "dipti"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}
// one();



if(true) {
    const username = "dipti"
    if(username === "dipti"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting +++++++++++++++++++++++

console.log(addone(5))

function addone(num){
    return num + 1
}



console.log(addTwo(5))

const addTwo =  function addone(num){
    return num + 2
}
