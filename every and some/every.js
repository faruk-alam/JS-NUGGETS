// every() - array method checks if every element in the array pass the test/rule,if passes,return true else false.

let subjectMark = [54,35,11,48,70,66]
let isPassed = subjectMark.every((mark) => mark >= 30)
console.log(isPassed)

let animal = ['dog', 'cat', 'rat', 'ant', 'cow']
let isanimalof3caracter = animal.every((animal) => animal.length === 3);
console.log(isanimalof3caracter)