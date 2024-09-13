const flatNo = 123
const age = 28
const balance = 123456.789
const weight = 72.38


console.log(flatNo, age, balance, weight) //123 28 123456.789 72.38
console.log(typeof balance) //number
console.log(typeof weight) //number
console.log(typeof age) //number
// Note : no concept of double/ float in javascript


//--------------toFixed() worked form first digit of number after decimal --------------------------------------------------
console.log(balance); //123456.789
console.log(balance.toFixed(1)); //123456.8
console.log(balance.toFixed(2));  //123456.79
console.log(balance.toFixed(3));  //123456.789
console.log(balance.toFixed(4));  //123456.7890


//--------------toPrecision() worked form first digits of number ------------------------------
console.log(weight); //72.38
console.log(weight.toPrecision(1)); //7e+1
console.log(weight.toPrecision(2)); //72
console.log(weight.toPrecision(3)); //72.4   (do roundoff here)
console.log(weight.toPrecision(4)); //72.38
console.log(weight.toPrecision(5)); //72.380  (if no digit then it add 0)

// -------    Math  functions -------
let x = Math.PI;  //3.141592653589793
console.log(x);
console.log(Math.round(x)); //3
console.log(x.toFixed(2)); //3.14

console.log(Math.sqrt(25)); //5
console.log(Math.pow(2, 5)); //32
console.log(Math.abs(-10)); //10       (use to make -ve to +ve)
console.log(Math.floor(10.78965)); //10    (it ignore the value if any digit after decimal)
console.log(Math.ceil(10.3)); //11      (it increase the value by 1 if any digit after decimal)
console.log(Math.max(10, 5, 8, 2)); //10
console.log(Math.min(10, 5, 8, 2)); //2
console.log(Math.round(Math.random() * 5)); //random number between 0 and 5
console.log(Math.floor(Math.random() * 5)); //1