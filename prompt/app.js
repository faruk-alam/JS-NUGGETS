// Easy way -
// let givenName = window.prompt("What is your name ?")
// console.log(givenName)


// professional way - 
const submit = document.getElementById("submit")
submit.addEventListener("click", () => {
   let userInput = document.getElementById("inputText").value ;
    document.getElementById("myText").textContent = userInput
})

