//prompt-For getting data from user - user input 
// let theNumber =prompt("Enter a number");
// alert("the squire of the number is : " + theNumber * theNumber)

//confirm -For asking user to confirm or cancel.
// confirm("Do you agree ?")

// while loop - loop through until a certain condition is fullfilled.
var number = 0;
while(number < 10){
    console.log(number)
    number = number + 2;
}

var result = 1;
var count = 0;
while(count < 10){
    result = result * 2;
    count = count + 1;
}
console.log(result)

// do while loop- action first ,condition later
// // do{
// //     var name = prompt("Who are you ?")
// // } while(!name)
// // console.log(name)

// for loop -
let sum = 0;
for(var num = 0;num <= 20;num++){
    sum = sum +num
}
console.log(sum)

// Exit from the loop
// by using "break" keyword 
for(var current = 22;current ++;){
    if(current % 8 == 0)
    break;
}
console.log(current);

