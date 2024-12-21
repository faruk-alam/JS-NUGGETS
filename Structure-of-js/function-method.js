// power/ exponent of a number
var powerOfnum = (base,expo) =>{
    var result = 1;
    for(var count = 0;count < expo;count++ )
        result *= base;
        return result;
    }
console.log(powerOfnum(5,5));
 
// squire of a number
let squireOfnumber = num =>{
    return num * num;
}
console.log(squireOfnumber(5));

// sum of some numbers by using map()

let nums = [1,2,5,7,10,14,20]
let sum = 0;
nums.map((number)=>{
    sum += number
})
console.log(sum)


