//================= Dates ==========================

let myDate = new Date()
console.log(myDate); //o/p- 2024-01-19T14:07:33.520Z
console.log(myDate.toString());//o/p- Fri Jan 19 2024 19:37:33 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());//o/p- Fri Jan 19 2024
console.log(myDate.toLocaleString());//o/p- 19/1/2024, 7:37:33 pm
console.log(myDate.toLocaleDateString());//o/p- 19/1/2024
console.log(myDate.toLocaleTimeString());//o/p- 7:37:33 pm 
console.log(myDate.toTimeString());//o/p- 19:37:33 GMT+0530 (India Standard Time)
console.log(myDate.toUTCString());//o/p- Fri, 19 Jan 2024 14:07:33 GMT
console.log(myDate.getTimezoneOffset());//o/p- -330
console.log(typeof myDate); //o/p - object

//========== specific date declare ==============

// let myCreatedDate = new Date(2024, 0, 23) 
// let myCreatedDate = new Date(2024, 0, 23, 5 , 3)
// let myCreatedDate = new Date("2024-01-18") // yy-mm-dd
let myCreatedDate = new Date("01-18-2024")// mm-dd-yy
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp); // it return milisecond from 1970 jan 1 to instant time
// console.log(myCreatedDate.getTime()); // it return milisecond from 1970 jan 1 to given date
// console.log(Math.floor(Date.now()/1000)); // convert millisecond to second


let newDate = new Date()
console.log(newDate); 
console.log(newDate.getMonth() + 1); //month starts from 0 so we add 1 thats why it return exact month number 
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

console.log(newDate.toLocaleString('default',{
    weekday : 'long',
    year : 'numeric',
    hour : '2-digit',
    minute : '2-digit',
    hourCycle : 'h24'
}))