const arra1 = ["as", "df", "gh", "ij"];
const arra2 = [12, 23, 34, 45, 56];
console.log(arra1.concat(arra2)); // concat operator
const arrS = arra2.concat(arra1);
console.log(arrS);


const arrZ = [...arra2, ...arra1];
console.log(...arra1, ...arra2); // spreed operator
console.log(arrZ);


const heros = ["superman", "Batman", "WonderWomen", [arra1, [1, 2, 3, [arra2]]]]
console.log(heros);
console.log(heros.flat(4));



// =================== interview Question ===============
const a = {};
const b = {key: "b"}
const c = {key: "c"}

a[b] = 123
a[c] = 456
console.log(a[b]);  // o/p: 456 

//===================================
