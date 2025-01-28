// Error - is an object that is created to represrent a problem that occured during the execution of the 
//          program. 
//           It occurs often with user input or enstablishing a connection with a server.
// try {} - block of code that will be tested for errors.
// catch() {} - block of code that will run if an error occurs in the try block.
// finally {} - block of code that will run regardless of the outcome of the try...catch block.
// throw - keyword that is used to throw an exception.

// type Error
// console.log("hello")
// console.lag("goodbye")

// Reference Error
// console.log(myVariable)

// Syntax Error - occurs when the code is not valid JavaScript.
// console.log('hello

try {
    // NETWORK ERRORS
    // PROMISE REJECT
    // TYPE ERROR
    // REFERENCE ERROR
    // SECURITY ERROR
    console.log(x);
    
} catch (error) {
    // console.log(error);
     console.error(error)
    
}
finally {
    // CLOSE FILE 
    // CLOSE DATABASE CONNECTION 
    // CLOSE NETWORK CONNECTION
    // CLOSE PROMISE
    // RELEASE RESOURCES
    console.log("This will always run");
}
console.log("We have reached the end of the code");
