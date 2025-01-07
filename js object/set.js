// set object - stores a collection of unique values of any type.

// new set() - creates a new set object.
// add(value) - adds a new element to the set.
// delete(value) - removes an element from the set.
// has(value) - returns true if the value exists in the set.
// size - returns the number of elements in the set.
// clear() - removes all elements from the set.

// itarators 
// entries();
// keys();
// values();
// forEach();

const set1 = new Set();

let ranNum = 300;

set1.add(100);
set1.add(200);
set1.add(ranNum);
set1.add(400);
set1.add(500);

let result = set1.delete(900)
let isValue = set1.has(400);
console.log(result);
console.log(set1);
