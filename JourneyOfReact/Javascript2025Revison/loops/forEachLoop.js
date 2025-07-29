// forEach
const arr = ["hi", "hello", 999, "bye-bye"]

arr.forEach(function (items) {
    console.log(items);
})
// hi
// hello
// 999
// bye-bye


arr.forEach((itemz) => console.log(itemz));
// hi
// hello
// 999
// bye-bye


function arrRef(itemx) {
    console.log(itemx);
}
arr.forEach(arrRef) // just pass refrence not function call
// hi
// hello
// 999
// bye-bye



arr.forEach((items, index, arrays) => {
    console.log(`items: ${items}, index: ${index}, arrayDetails: ${arrays} `);
})
// items: hi, index: 0, arrayDetails: hi,hello,999,bye-bye
// items: hello, index: 1, arrayDetails: hi,hello,999,bye-bye
// items: 999, index: 2, arrayDetails: hi,hello,999,bye-bye
// items: bye-bye, index: 3, arrayDetails: hi,hello,999,bye-bye



//===== Array of Objects  ==============
const Employee = [
    {
        ename: "sandeep",
        position: "CFO",
        age: 28
    },
    {
        ename: "sandy",
        position: "COO",
        age: 30
    },
    {
        ename: "sandeep",
        position: "CO",
        age: 31
    }
]

Employee.forEach((item) => {
    console.log(item.ename);
    console.log(item.position);
    console.log(item.age);
    //====
    console.log(`Employee name: ${item.ename}, position:${item.position}, age is ${item.age}`);

})
// sandeep
// CFO
// 28
// sandy
// COO
// 30
// sandeep
// CO
// 31

// Employee name: sandeep, position:CFO, age is 28
// Employee name: sandy, position:COO, age is 30
// Employee name: sandeep, position:CO, age is 31