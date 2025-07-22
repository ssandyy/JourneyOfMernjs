const cal = {
    add (a, b) { return a + b;},
    sub: (a, b) => a - b,
    mul:function(a, b) { return a * b;},
    div: (a, b) => {return a / b;}
}

// console.log(cal.add(10, 20));
// console.log(cal.sub(10, 20));
// console.log(cal.mul(10, 20));
// console.log(cal.div(10, 20));

const results = Object.values(cal).map(fn => fn(10, 20));
console.log(results); // [30, -10, 200, 0.5]
console.log(typeof results); // [30, -10, 200, 0.5]




