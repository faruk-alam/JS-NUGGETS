// type conversion - is a way to change the datatype of a value to another value (string,number,boolean)

// get user input (string value)
let inputValue = window.prompt("What is your age?")
// check type of value
//console.log(typeof inputValue)
// for number value
inputValue = Number(inputValue)
// check type of value
//console.log(typeof inputValue)

inputValue += 1;
console.log(inputValue);

// //  let x = "cake"
// //  let y = "cake"
// //  let z = "cake"

//  let x = ""
//  let y = ""
//  let z = ""

 let x = 0;
 let y = 0;
 let z = 0;


 x = Number(x)
 y = String(y)
 z = Boolean(z)
 console.log(x, typeof x)
 console.log(y, typeof y)
 console.log(z, typeof z)