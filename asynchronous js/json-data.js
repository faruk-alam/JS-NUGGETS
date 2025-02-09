// JSON = JavaScript Object Notation
//json is data interchange format. It is lightweight and easy to understand.
// Used for interchanging data between server and web application.
// json files {key:value} or [value1,value2,value3] 

// json.stringify() - convert js object into json string.
// json.parse() - convert json string into js object.

// json.stringify() -
const names = ["Alex","cathy","jimmy","susan","tom","william"]
const jsonNames = JSON.stringify(names);
console.log(jsonNames);

const person = {
    "name": "tom",
    "age": 20,
    "hobbies": ["reading", "travelling", "swimming"]
}
const jsonPerson = JSON.stringify(person);
console.log(jsonPerson);

const people = [{
    "name": "Alex",
    "age": 30,
    "gender": "male",
    "country": "USA"
 },
 {
    "name": "John",
    "age": 25,
    "gender": "male",
    "country": "UK"
 },
 {
    "name": "Cathy",
    "age": 22,
    "gender": "female",
    "country": "Canada"
 }]
    const jsonPeople = JSON.stringify(people);
    console.log(jsonPeople);

    // json.parse() -
    const jsonPeople1 = '[{"name":"Alex","age":30,"gender":"male","country":"USA"},{"name":"John","age":25,"gender":"male","country":"UK"},{"name":"Cathy","age":22,"gender":"female","country":"Canada"}]';
    const people1 = JSON.parse(jsonPeople1);
    console.log(people1);
    
// fetch method - 
fetch("people.json").then(res => res.json()).then(data => console.log(data));



























