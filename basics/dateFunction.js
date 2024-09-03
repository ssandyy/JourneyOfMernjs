
let myDate = new Date();
console.log(myDate); //2024-09-03T10:04:47.761Z

console.log(myDate.toISOString().split('T')); // [ '2024-09-03', '10:25:11.438Z' ]
console.log(myDate.toISOString().split('T')[0]); // 2024-09-03

let myCurrentDate = new Date()

console.log(myCurrentDate.toLocaleString()); // 9/3/2024, 11:33:10 AM
console.log(Date.now())  // miliseconds from 1970 to today
console.log(myCurrentDate.toDateString()) // human readable formate  (Tue Sep 03 2024)
console.log(myCurrentDate.toLocaleDateString()) // (09/03/2024)

//----------------------------------------------------------------------
// npm install date-fns
// import { format } from 'date-fns';
// let indianFormat = format(myCurrentDate, 'dd/MM/YYYY')
// console.log(indianFormat) // 03/09/2024
//----------------------------------------------------------------------


// Example: Subtract 10 days from today's date
let tenDaysAgo = new Date(myCurrentDate.getTime() - 10 * 24 * 60 * 60 * 1000); // 10 day * 24 hr * 60 min * 60 sec
//OR
let tendayBefore = new Date();
tendayBefore.setDate(tendayBefore.getDate()-10)
console.log(tenDaysAgo.toLocaleString()) // 9/23/2024, 11:33:10 AM
console.log(`ten days ago ${tendayBefore.toLocaleDateString()}`) // 10 day * 24 hr * 60 minutes}`

let todaysDate = Date.now();
console.log(`Today's date: ${new Date(todaysDate).toUTCString()}`) // Today's date: Tue, 03 Sep 2024 18:37:31 GMT