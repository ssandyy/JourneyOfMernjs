// var(deprecated because of it allows global access) let and const    3 way to define 
// number/string/ boolean/undefined/null

let x =10;
const y = 5;
let name2 = "Sandeep";

console.table([x, y, name2]) 
/*
─────────┬───────────┐
│ (index) │ Values    │
├─────────┼───────────┤
│ 0       │ 10        │
│ 1       │ 5         │
│ 2       │ 'Sandeep' │
└─────────┴───────────┘
*/
//OR 
console.log(x) //10
console.log(y) //5
console.log(name2) // 'Sandeep'