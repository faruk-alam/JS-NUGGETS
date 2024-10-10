// string slicing - creating a substring from a portion of another sting
// syntax : string.slice(start,end)

let fullname = "Abrar Hossain"
let firstName = fullname.slice(0,6)
console.log(firstName);
let lastName = fullname.slice(6)
console.log(lastName)

let email = "abcxyz@kissmail.com"
let userName = email.slice(0,email.indexOf("@"))
console.log(userName)
let domainName = email.slice(email.indexOf("@"))
console.log(domainName)