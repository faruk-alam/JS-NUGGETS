//function expression - is a way to define a function using an expression as a values or variables.
const greet = function(){
    console.log("Good Morning");
};

greet();
const greetAfter3Second = setTimeout(function(){
    console.log("Good Afernoon");
    
}, 3000);

let numbers = [1,2,3,4,5,6,7,8,9,10];
let scquire = numbers.map(function(num){
    return num * num;
})
console.log(scquire);