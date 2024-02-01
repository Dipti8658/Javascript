
// Immediately Invoked Function Expressions (IIFE)

// To prevent from Global scope pollution and for immediate execution we use IIFE

// syntax of IIFE -> (function-defination)(Execution/ fun call)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

// how to write IIFE as a form of array function

( (name) =>  {
    // unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
})('hitesh')

// If you write two IIFE in a one file then you have to remember place ";" between two IIFE



