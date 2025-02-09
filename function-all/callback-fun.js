// callback function - is a function that is passed as an argument to another function. 
//                     This function is executed inside the other function.
//                     It is used to handle asynchronous operations.like - 
//                     network request,fetching data from a server, reading a file, etc.


function hello(callback) {
    console.log("Hello"); 
    callback()
}   
function goodBye(){
    console.log("Goodbye");
}  
hello(goodBye);
//goodBye();   

function sum(callBack,x,y) {
    const result = x + y;
    callBack(result);
}
function displayResult(result) {
    console.log(result);  
}
sum(displayResult,5,10);