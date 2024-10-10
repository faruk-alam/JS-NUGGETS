// method chaining - calling one method after another method in one contineous line of code.

let userName = prompt("Enter your username : ")

//      No Method Chaining
    // userName = userName.trim()
    // let firstLetter = userName.charAt(0)
    // firstLetter = firstLetter.toUpperCase()
    // let restLetter = userName.slice(1)
    // restLetter = restLetter.toLowerCase()
    // userName = firstLetter + restLetter;

    //        Method chaining

    userName = userName.trim().charAt(0).toUpperCase() + userName.trim().slice(1).toLowerCase()
 
 
    console.log(userName)
