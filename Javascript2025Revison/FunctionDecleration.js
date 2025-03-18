function Number1(num1){
    return num1;
}
console.log(Number1(2));

const Number2 = function (z) {
    return z;
}
console.log(Number2(4)); //4



// ==== Arrow fuction
const Number3 = (d) => {
    return d+2;
}
console.log(Number3(23)); //25


// ==== Arrow fuction without return
const add = (num1, num2) => num1+num2;
console.log(add(2,8)); //10