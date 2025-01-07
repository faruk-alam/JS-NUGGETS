// object - a collection of related properties,and a property is an association between a name (or key) and
// a value.
// can represent real-world things, like a car, a house, a person, or a dog.
// syntax : const objectName = { key: value, key: value, key: value, function() {} };
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isMarried: false,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};
const person2 = {
    firstName: "Jane",
    lastName: "Doe",
    age: 25,
    isMarried: true,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

// accessing object properties
console.log(person.firstName);
console.log(person["lastName"]);
console.log(person.fullName());
console.log(person.age)
console.log(person.isMarried)

console.log(person2.firstName);
console.log(person2["lastName"]);
console.log(person2.fullName());
console.log(person2.age)
console.log(person2.isMarried)

// adding new properties
person.gender = "male";
console.log(person);

// deleting properties


delete person.isMarried;
console.log(person);


//