//shallow copy : Share the same reference of properties
// Deep copy : Share the diffrent reference of properties

let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

console.log(days);  // ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
console.log(days.length) // 7
console.log(days.push('Sunnyday')); //8
console.log(days); // ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sunnyday']
console.log(days.pop()) // Sunnyday
console.log(days); // ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']



// -------------------  Slice and Splice  ---------------------------------------------
const sliceFun = days.slice(1, 4)
console.log(sliceFun) // [ 'Mon', 'Tue', 'Wed' ]
console.log("sliceVar", days) // sliceVar ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
console.log(days) // ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const spliceFun = days.splice(1, 4)
console.log(spliceFun) // [ 'Mon', 'Tue', 'Wed', 'Thu' ]
console.log("spliceVar", days) // spliceVar ['Sun', 'Fri', 'Sat']
console.log(days) // [ 'Sun', 'Fri', 'Sat' ]

// -------------------  Concat  ---------------------------------------------
console.log(days) // [ 'Sun', 'Fri', 'Sat' ]
days = days.concat('Mon', 'Tue', 'Wed')
console.log(days)

// ------------------- Join --------------------------------
const mixture = days.join(', ')
console.log(`this is join function ${mixture}`)
//console.table(typeof mixture, typeof days)
console.log(`Type of mixture: ${typeof mixture}`); // string
console.log(`Type of days: ${typeof days}`);  // object

// ------------------- spread (...) --------------------------------
console.log(days) // [ 'Wed', 'Tue', 'Mon', 'Sat', 'Fri', 'Sun' ]
console.log(months) //
const spreadVar = [...days, ...months]
console.log(`This is using spread function ${spreadVar}`) //This is using spread function Sun,Fri,Sat,Mon,Tue,Wed,Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec



// -------------------  Reverse  --------------------------------
console.log(days) // [ 'Sun', 'Fri', 'Sat', 'Mon', 'Tue', 'Wed' ]
days.reverse()
console.log(days) // [ 'Wed', 'Tue', 'Mon', 'Sat', 'Fri', 'Sun' ]


//----------------------  Flat --------------------------------
const arr1 = [1, 4, 3, 5, 6, 7, 8, 9, ['S', 'A', 'M', [2, 4, 5, 6]], 10, 11, 12];

const level1 = arr1.flat(1); // Flattens the array to depth 1
const level2 = arr1.flat(2); // Flattens the array to depth 2
const level3 = arr1.flat(3); // Flattens the array to depth 3
const levelInfinite = arr1.flat(Infinity); // Completely flattens the array

console.log('Original array:', arr1);
console.log(`This is level 1: ${level1}`);
console.log(`This is level 2: ${level2}`);
console.log(`This is level 3: ${level3}`);
console.log(`This is level Infinite: ${levelInfinite}`);

//----------------------  From -----------------------------------
console.log(Array.from("Sandeep"));// ['S', 'a', 'n', 'd', 'e', 'e', 'p']
console.log(Array.from("Sandeep", (x) => x.toUpperCase()));// ["S", "A", "N", "D", "E", "P"]
console.log(Array.from([1, 2, 3, 4, 5], (x) => x * 2));// [2, 4, 6, 8, 10]
console.log(Array.from({name: 'Sandeep'})); // []

//-------------------- of --------------------------------
const score1 = 200, score2 = 300, score3 = 400, score4 =500

console.log(score1, score2, score3, score4); // 200 300 400 500
console.log(Array.of(score1, score2, score3, score4)); // [200, 300, 400, 500]

//-------------------- entries --------------------------------
const obj = { name: 'Sandeep', age: 28, city: 'Pune' }
console.log(Object.entries(obj)); // [ ['name', 'Sandeep'], ['age', 28], ['city', 'Pune'] ]

//-------------------- values --------------------------------
console.log(Object.values(obj)); // [ 'Sandeep', 28, 'Pune' ]

//-------------------- keys --------------------------------
console.log(Object.keys(obj)); // [ 'name', 'age', 'city' ]