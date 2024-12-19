// includes(array) - Check if the item is in an array.it is useful for conditional statemant
// .includes(array) method case sensetive as well.

let groceryItem = ["suger","milk","Honey","Salt"];
let randomItem = "Milk";
let isIncluded = groceryItem.includes(randomItem)
if(!isIncluded){
    console.log("you are telling true")
}
else{
    console.log("you are telling lie")
}