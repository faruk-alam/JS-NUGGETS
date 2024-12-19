// function - a reusable block of code that is used to perform a specific task.
//           Once we declare a function, we can call it as many times as we want.
//           call a function to execute the code inside it.

// function declaration

// function birthdayGreeting() {
//     console.log("Happy Birth Day to you");
//     console.log("Happy Birth Day to dear");
//     console.log("you are 18 years old")
// }
// birthdayGreeting();
// To send data to a function, we need to use matching set of argueemnts and parameters.

function birthdayGreeting(name,age) {
    console.log("Happy Birth Day to you");
    console.log("Happy Birth Day to "+ name);
    console.log("you are "+ age + " years old")
}
birthdayGreeting("Rahul",18);

// function can return a value using the return statement.
function add(a,b){
    return a + b;
}
console.log(add(2,3));

function isValidEmail(email){
    if(email.includes('@')){
        return true;
    }else{
        return false;
    }
}
console.log(isValidEmail("ques@ert"));