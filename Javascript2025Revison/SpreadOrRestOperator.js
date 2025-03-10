function Number1(num1){
    return num1;
}
console.log(Number1(2)); // 2
// But what if we pass more argument in 1 passed parament function
console.log(Number1(21,31,41)); // 21


// to handle additional argument  we use spread/rest operator and it store rest/additional parameter

function Number2(...num1){
    return num1;
}
console.log(Number2(21,31,41)); // [ 21, 31, 41 ]


function Number3(val1, val2, ...num1){
    return num1;
}
console.log(Number3(21,31,41,51,61,71,81)); //[ 41, 51, 61, 71, 81 ]  -> here val1=21, val2=31 and rest all value store in ...num1


//===========   with Object   ===============
const user = {
    username: "sandy",
    age:28,
    company: "Google"
}
console.log(`my name is ${user.username} and age is ${user.age}, working with ${user.company}`);


//===========   Object with  Function  ===============
function handleObject(props) {
    console.log(`my name is ${props.username} and age is ${props.age}, working with ${props.company}`);
}
handleObject(user);
// or direct object pass , no need to declear object seperatly
handleObject({
    username: "sandy",
    age:28,
    company: "Google"
})


// ============= Object with Array  ==================
const array1  = [100,200,300,400,500]

function returnSecondVal(getSecVal){
    return getSecVal[1]; // index 1 = value in second position
}
console.log(returnSecondVal(array1));  // 200

// Or   direct object pass , no need to declear object seperatly
console.log(returnSecondVal([100,200,300,400,500])); // 200