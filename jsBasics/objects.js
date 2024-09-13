const jsUser = {
    name: 'sandeep',
    age: 28,
    city: "Pune"
}
console.log(`My name is ${jsUser.name} and my age is ${jsUser.age}, I use to live in ${jsUser.city}`)//My name is sandeep and my age is 28, I use to live in Pune

const x = {}  // empty object

//----------------------  Symbol -------------------------------
const myZipCode = Symbol("Pin1")
console.log(`My zip code is ${myZipCode.toString()}`)  


const Employee = {
    name: 'John Doe',
    age: 30,
    department: 'IT',
    salary: 50000,
    location:"Hazaribag",
    [myZipCode] : "XYZ"
}

console.log(Employee.name) // John Doe
console.log(Employee.age)  //30 
console.log(Employee.location) // Hazaribag
console.log(Employee[myZipCode]) // XYZ

Employee.name = "Sandeep"
Employee.age = 28
console.log(Employee.name) // Sandeep
console.log(Employee.age) // 28


//---------------------- freeze -----------------------------------

Employee.age = 29
//Object.freeze(Employee) // we cannot change and access value after freezeing function/object


Employee.location = 'Delhi'
Employee.age = 30
console.log(Employee.age) // 29
console.log(Employee.location) // Hazaribag



// -------------------- function call with Object --------------------------------
Employee.greeting = function(){
    console.log(`Hello, my name is ${this.name}`)
}
console.log(Employee.greeting()) // Hello, my name is Sandeep


//------------------------ object in-depth --------------------
const Users = new Object();  //{}    --> empty object
//Or 
const Users2 = {} // {}   --> empty object


Users.name = 'John Doe';
Users.age = 30;
Users.city = 'New York';
Users.isEmployed = true;

console.log(Users) // { name: 'John Doe', age: 30, city: 'New York', isEmployed: true }

//------------------------ assign --------------------------------
const obj1 = {1:'a', 2:'b', }
const obj2 = {4:'f', 5:'g', 6:'h'}

const obj12 = {obj1, obj2}
console.log(obj12) 
/* { obj1: { '1': 'a', '2': 'b' },
        obj2: { '4': 'f', '5': 'g', '6': 'h' }
    }
*/

const obj13 = Object.assign(obj1, obj2)
const obj14 = Object.assign({}, obj1, obj2)
console.log(obj13) //  { '1': 'a', '2': 'b', '4': 'f', '5': 'g', '6': 'h' }
console.log(obj14) // { '1': 'a', '2': 'b', '4': 'f', '5': 'g', '6': 'h' }


//-----------------  Using Spread -----------------------
const obj3 = {...obj1,...obj2}
console.log(obj3) // { '1': 'a', '2': 'b', '4': 'f', '5': 'g', '6': 'h' }
console.log(`this is spread function ${obj3}`) 
// using template literals (backticks) with interpolation (e.g., ${obj3}) will try to convert the object to a string, which can result in [object Object]

//---------------------  database intraction --------------------

const users = [
    {
    id: 1,
    email: 'foo@example.com'
},{
    id: 2,
    email: 'bar@example.com'
},{
    id: 3,
    email: 'baz@example.com'
}
]

console.log(users[1].email); // bar@example.com

console.log(Object.keys(Employee));
console.log(Object.values(Employee));
console.log(Object.entries(users));



//-----------   Object destructuring --------------------------------
const course = {
    id: 1,
    courseName: 'JavaScript',
    author: 'John Doe',
    courseDuration: '6 months'
}

console.log(course.courseName); // JavaScript
console.log(course.courseDuration); // 6months
console.log(course.courseDuration); // 6 months

const {courseName, courseDuration} = course;   // one time destructuring

console.log(course.courseName); // javascript
console.log(course.courseDuration); // 6 months

const {author: writer} = course;   // one time destructuring
console.log(course.author); // John Doe
console.log(writer); // John Doe (default value)