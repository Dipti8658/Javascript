
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);  // please avoid this type of comparison 
console.log(null == 0);
console.log(null >= 0);

/* The reason is that an equality check == and comparision > < >= <= work differently.
Comparision Convert null to a number, treating it as 0.That's why  null >=0 is true and null > 0 is false. */

console.log(undefined == 0);  // please avoid this type of comparison 
console.log(undefined > 0);
console.log(undefined < 0);

// === (strict equality comparison)
console.log("2" === 2);

/* Difference Between loose equality comparison(==) vs strict equality comparison(===) : == it will try to convert the operands to the same data type before comparing them.  But === it will not try to convert the operands to the same data type before comparing them. */






