// there are three method to convert objects into array :
// object.keys() - convert object property name into array.
// object.values() - convert object property value into array.
// object.entries() - convert object property name and value both into array.

const person = {
    name: "Rahul",
    age: 21,
    gender: "male"
}

// object.keys() - convert object property name into array.
const keys = Object.keys(person);
console.log(keys);

// object.values() - convert object property value into array.
const values = Object.values(person);
console.log(values);

// object.entries() - convert object property name and value both into array.
const entries = Object.entries(person);
// console.log(entries);

// map method
const newEntries = entries.map((item) =>{
    console.log(item);
})