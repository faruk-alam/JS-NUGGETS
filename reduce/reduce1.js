// reduce() -  Reduce the elements of an array to a single value.
// iterates, call-back function
// Reduce to a single value;number,array or object
// 1st parameter - ("acc") - total of all calculation
// 2nd parameter - ("curr") -current iteration/value


let prices = [23,6,9,15,35,10,25]
let TOTAL = prices.reduce(sum)

function sum(acc,num) {
    return acc + num;
}
console.log(TOTAL)
let staff = [
    {name : "Russel",age: 19,position : "clark", salary : 100},
    {name : "Andy",age: 34,position : "driver", salary : 430},
    {name : "Kamila",age: 28,position : "Manager", salary :600 },
    {name : "Cristian",age: 45 ,position : "Assistant",salary : 250 },
]

let totalSalary = staff.reduce((total,person) =>{
    total += person.salary
    return total
},0);
console.log(totalSalary)