// timestamps - milliseconds since 1970/01/01
// 1s = 1000ms

// Date.now()
// console.log(Date.now());

//new Date.getTime()
// console.log(new Date().getTime());

// new Date().valueOf()
// console.log(new Date().valueOf());

// console.log("Starting......")

// setTimeout(() => {
//     console.log(Date.now());
//     console.log(new Date().getTime());
//     console.log(new Date().valueOf());

// }, 1000);

// create or get date
// let now = Date.now();
// const currentDate = new Date();
// const futureDate = new Date(now + 1000 * 60 * 60 * 24 );
// console.log(currentDate);
// console.log(futureDate);

// difference between dates 
const firstDate = new Date;
const firstDateINms = firstDate.getTime();
const secondDate = new Date(2025, 0, 19);
const secondDateINms = secondDate.getTime();
console.log(firstDateINms);
console.log(secondDateINms);

const timeDiff = secondDateINms - firstDateINms;
console.log(timeDiff);

const diffInHours = timeDiff / (1000*60*60);
console.log(diffInHours);