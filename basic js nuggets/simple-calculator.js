let num1  = parseFloat(prompt("Enter the first number"))
let operator = prompt("Enter aoperator exmp. +,-,* so on")
let num2  = parseFloat(prompt("Enter the second number"))
let result;
// using if ... else if ....else statement
// if (operator == "+") {
//     result = num1 + num2;
// } else if (operator == "-"){
//     result = num1 - num2;
// } else if (operator == "*"){
//     result = num1 * num2;

// } else {
//     result = num1 / num2;
// }
// document.write(num1 + operator + num2 + " = "+ result)


// Using switch statement
 switch (operator) {
    case "+":
        result = num1 + num2;
        document.write(result)    
        break;
    case "-":
        result = num1 - num2;    
        document.write(result)    
        break;
    case "*":
        result = num1 * num2;  
        document.write(result)      
        break;
    case "/":
        result = num1 / num2;
        document.write(result)        
        break;

    default:
        document.write("invalid Operator")
 }
