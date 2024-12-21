// The prompt() is a method of the window object.
// The prompt() shows a dialog that prompts the user to enter a text 
//and wait until the user submit or cancel the dialog.
// The prompt() returns a string containing a string entered by the user 
// or null if the user did not enter anything.


// let lang = prompt('What is your favorite programming language?');

// let feedback = lang.toLowerCase;
 
// if (feedback === "javascript") {
//     alert("Great")
// } else {
//     alert("Not so bad")
    
// }

// let feedback = lang.toLowerCase() === 'javascript' ? `It's great!` :
//     `It's ${lang}`;

// alert(feedback);

let age = Number(prompt("Enter your age"))
let response = age  >= 18 ? "You are permitted to Enter":"Sorry,you should be 18+ ";
alert(response);