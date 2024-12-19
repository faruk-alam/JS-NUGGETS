// some() array method checks if some element in the array pass the test/rule,if passes,return true else false.
let scores = [45,39,56,91,12,27]
let isOver50 = scores.some((score) => score > 50)
console.log(isOver50);

let countries = ['India', 'UAE', 'UK', 'China', 'Russia']
let isIncludeUSA = countries.some((country) => country === 'USA');
console.log(isIncludeUSA);
