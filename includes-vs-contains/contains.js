// contains() array method check if an array includes a certain value among its entries, returning true or 
// false as appropriate.
// It is completely different from includes() method. contains() method use in a different purpose.

const container = document.querySelector('.container');
const heading = document.querySelector('h1');
let isContainedHeading = container.contains(heading);
console.log(isContainedHeading);