// filter() - Returns a new array by filtering out elements based on condition, can manipulate size of 
// new array (unlike map). 
//find() - Returns single element/object,Return first match ; If no match - undefined.

let numbers = [1,2,3,4,5,6,7,8,9];
let evenNums = numbers.filter(isEven)
console.log(evenNums)


// filter()
function isEven(num) {
    return num % 2 === 0;
}
let people = [
    {name : "Russel",age: 19,position : "student"},
    {name : "Andy",age: 34,position : "driver"},
    {name : "Kamila",age: 28,position : "teacher"},
    {name : "Cristian",age: 45 ,position : "Banker"}
]

let youngPeople = people.filter((person) =>{
    return person.age < 30;
})
console.log(youngPeople)

let BANKER = people.filter((person) =>{
    return person.position === "Banker";
})
console.log(BANKER)

// find()
let findTeacher = people.find((person) =>{
    return person.position ==="teacher"
})
console.log(findTeacher)
let findOldperson = people.find((person) =>{
    return person.age > 30;
})
console.log(findOldperson)