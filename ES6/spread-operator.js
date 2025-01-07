// spread operator - three consecutive dots (...)
// spread operator(...) - spread out elements of an iterable like an array or string 
// spread operator(...) - allows an iterable to spread/expand individually inside a receiver

// Split into single items and COPY them
const udemy = 'udemy';
const letters = [...udemy];
console.log(letters);

const boys = ['john', 'peter', 'bob'];
const girls = ['susan', 'anna', 'kate'];
const bestFriend = 'arnold';
const friends = [...boys, ...girls, bestFriend];
console.log(friends);

// ES2018 - ES8
// Object spread operator
const person = {name: 'john', job: 'developer'};
const newPerson = {...person, city: 'chicago',name: "katty"};
console.log(person);
console.log(newPerson);