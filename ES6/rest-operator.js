// rest operator - three consecutive dots (...)
// rest operator -collects/gehthers items.
// rest operator - replacement important,be careful with the same name.
// rest operator - rest when we define a function,spread when we call a function.
// rest operator - always use at the end of the parameter.

//array- 
const fruits = ['apple', 'orange', 'banana', 'grapes', 'mango'];
// const [first] = fruits;
// console.log(first);
const [first,second,...restitems] = fruits;
console.log(first,second,restitems);

//object
const person = {name: 'john', lastName: 'smith', job: 'developer'};
const {job,...rest} = person;
console.log(job,rest);

