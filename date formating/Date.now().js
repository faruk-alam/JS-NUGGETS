// Date.now() static method - returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC

// Formula to Calculate the number of years since 1970/01/01. 
//  second = Date.now()/1000
//  minute = Date.now()/(1000*60);
//  hour = Date.now()/(1000*60*60); 
//  day = Date.now()/(1000*60*60*24);
//  year = Date.now()/(1000*60*60*24*365);

const now = Date.now();
console.log(now);
const second = now / 1000;
console.log(second);
const minute = now / (1000 * 60);
console.log(minute);
const hour = now / (1000 * 60 * 60);
console.log(hour);
const day = now / (1000 * 60 * 60 * 24);
console.log(day);
const year = now / (1000 * 60 * 60 * 24 * 365);
console.log(year);
