let string = "arraydotcom";
let makeArray = Array.from(string);
console.log(makeArray)

const listItem = document.querySelectorAll(".arraylist")
// console.log(listItem);
const arrayList = Array.from(listItem);
const specialItem = arrayList.find((item) => item === listItem[3]).textContent
console.log(arrayList);
console.log(specialItem)
