// forEach - javascript iteration method is used to iterate over the elements of an array and apply an 
// specified function (callback) to each element.

// array.forEach(callback)
// element,index ,array are provided.

let numbers = [1,2,3,4,5]
numbers.forEach((num)=>{
    console.log(num)
})
numbers.forEach(double);
numbers.forEach(displayd);
function double(element,index,array) {
    array[index] = element * 2; 
}
function displayd(element) {
    console.log(element)

}
numbers.forEach(triple);
numbers.forEach(displayt);


function triple(element,index,array) {
    array[index] = element * 3; 
}

function displayt(element) {
    console.log(element)
}