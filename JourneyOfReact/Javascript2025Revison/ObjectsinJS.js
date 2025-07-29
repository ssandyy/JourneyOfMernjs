//----  singleton object  ---------
// Object.create

const msg = new Object();




//Non- Singleton 
//------- Object Litteral  ----------
const name = {}
// OR 

const JsUser = {
    name: "sandy",
    age: 28,
    collage: "NMiet",
    phone: +918540829289,
    email: "ssandyy@gmail.com"

}

//Note: we can call object in two way 1. using '.' and 2. using '[]'


console.log(JsUser.age);
// console.log(JsUser[age]); // error
console.log(JsUser["age"]);  // working as internally it is  "age": "28"



//Symbol -> primitive Data type!
const smb = Symbol("key1")

const JsUser2 = {
    name: "sandy",
    age: 28,
    collage: "NMiet",
    phone: +918540829289,
    email: "ssandyy@gmail.com",
    "loggedin": false, 
    smb: "mySymbol",         // string
    [smb]: "myLegalSymbol"  // sybmol
}

console.log(JsUser2);



JsUser2.greeting = function() {
    console.log("Hello User 2 ");
}

JsUser2.greetingTwo = () => {
    console.log(`Hello ${JsUser2.name}, This is Greeting Two..! `);
}

console.log(JsUser2.greeting);// [Function (anonymous)]
console.log(JsUser2.greeting());
console.log(JsUser2.greetingTwo());




// we can also freeze our object "Object.freeze"
JsUser2.age = 30;
console.log("Before Object Freezing: "+JsUser2.age);

Object.freeze(JsUser2)
JsUser2.age = 72;
console.log("After Object Freezing:" +JsUser2.age); 

