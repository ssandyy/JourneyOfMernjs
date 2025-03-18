
// Q1: 
let count = 0;
const nums = [0, 1, 2, 3, 4]
nums.forEach(num => {
    if (num) {                  // here num=0 will not work!
        count = count + 1;
    }
})
console.log(count); // 4

// Q2:
const arr = [2,3,4,5]; 
arr.slice(0,1);
console.log(arr); // [2,3,4,5]   as there is no change in original array

// Q3:
console.log(arr.slice(0,1)); //2   (as slice take initial value but skip the last value)

//Q4:
arr.unshift(8);
console.log(arr); // [8,2,3,4,5]   as unshift take place at begning

// Q5:
arr.splice(0,1);
arr.unshift(8);
console.log(arr); // [8,2,3,4,5]   as spice is not effected on original again unshift will take in effect 


//Q6:
const obj = {
    a: 1,
    b:2,
    c:3,
    "a":6,
    b:7
}
console.log(obj); // {a:6, b:7, c:3}     as internally key and value both act as string format

// Q7:
console.log(!"hello"); // false   as here '!' convert string into falsy value
console.log(+false); // 0 

// Q8:
console.log(""==false); // true
console.log(""===false); //false

// Q9:
console.log(NaN== NaN); //false
console.log(NaN === NaN); //fase
// example 
// console.log(undefined + null);
// console.log(undefined + 1); 

// Q 10
console.log(typeof typeof 1000); // string


// Q11
const arr2 = [2,5,8,7,6,9]
arr2[10]=100;
console.log(arr2); // [ 2, 5, 8, 7, 6, 9, <4 empty items>, 100 ]

// Q12
// function name() {
//     "use strict"
//     xyz =100;
//     console.log(xyz);
// }
// console.log(name());  // ReferenceError: xyz is not defined

// Q13
function name2() {
    var abc =100;
    console.log(abc);
}
console.log(name2());// 100 \n undefined


// Q14
// var xyz = 1+abc;
// abc = 100;
//console.log(xyz); // ReferenceError: abc is not defined
//console.log(abc);  //ReferenceError: abc is not defined

// Q15
var wxyz = 1+abcd;
var abcd = 100;
console.log(abcd);  //100
console.log(wxyz);  //NaN

// Q 16
