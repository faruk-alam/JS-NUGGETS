// destructing - Extract value from array or object and assign to variables in a convenient way.
//             [] - to perform destructuring on array
//             {} - to perform destructuring on object

// swap two variables of an array

let a = 100;
let b = 200;
//console.log(a);
//console.log(b);
 [a, b] = [b, a];
console.log(a);
console.log(b);

// swap two elements of an array

let colors = ["red", "green", "blue", "yellow", "pink"];
//console.log(colors);
[colors[0], colors[3]] = [colors[3], colors[0]];
console.log(colors);

// assigning array elements to variables

let subjects = ["math", "english", "science", "social", "Morality"];
let [sub1, sub2, sub3, ...restsubs] = subjects;
console.log(sub1);
console.log(sub2);
console.log(sub3);
console.log(restsubs);

// Extracting values from an object
let person1 = {
    name: "John",
    age: 25,
    gender: "male",
    occupation: "developer",
    salary: 50000
}

let person2 = {
    name: "Mike",
    age: 30,
    gender: "male",
}

//let {name, age, gender, occupation, salary} = person1;
let {name, age, gender, occupation = "teacher", salary = 30000} = person2;
console.log(name);
console.log(age);
console.log(gender);
console.log(occupation);
console.log(salary);

// destructure in function parameters - 
let student1 = {
    name : "Alex",
    Age : 23,
    subject : "math",
    cgpa : 3.60,
}
let student2 = {
    name : "Johny",
    Age : 25,
    subject : "english",
    cgpa : 4.80,
}
function displayStudent({name, Age, subject, cgpa}){
    console.log(name);
    console.log(Age);
    console.log(subject);
    console.log(cgpa);
}
displayStudent(student1);
