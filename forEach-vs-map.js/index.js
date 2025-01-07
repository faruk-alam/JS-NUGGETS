// difference between forEach and map - 

// forEach is used to iterate over an array, map is used to create a new array by transforming each element 
// of an array.

// forEach() method receives a function as an argument and executes it once for each array element.map method 
// receives a function as a parameter. Then it applies it on each element and returns an entirely new array 
// populated with the results of calling the provided function. 

// map() is chainable. This means that you can attach reduce(), sort(), filter() and so on after performing 
// a map() method on an array.That's something We can't do with forEach() because, as you might guess, 
// it returns undefined.

//As always, the choice between map() and forEach() will depend on your use case. If We plan to change, 
// alternate, or use the data, you should pick map(), because it returns a new array with the transformed 
// data.But, if we won't need the returned array,we don't use map() - instead use forEach() or even a for 
// loop.

// returning value -
const myArray = [1, 2, 3, 4, 5];
const newArray1 = myArray.map((item) => {
    return item * 2;
});
console.log(newArray1);

const newArray2 = myArray.forEach((item) => {
    return item * 2;
})
console.log(newArray2);

const objectArray = [
    { name: "Rahul", age: 21 },
    { name: "Rohit", age: 23 },
    { name: "Raj", age: 25 }  
]
const newObjectArray1 = objectArray.map((item) => {
    return item.name;
})
console.log(newObjectArray1);

const newObjectArray2 = objectArray.forEach((item) => {
    //return item.name; // undifined
    console.log(item.name);
})

//Ability to chain other methods
const priceList = [100, 200, 300, 400, 500];
const newPrice1 = priceList.map(price => price * 2).reduce((acc, price) => acc + price,0);
console.log(newPrice1);

const newPrice2 = priceList.forEach(price => price * 2).reduce((acc, price) => acc + price,0); // typeerror
console.log(newPrice2);  // typeerror