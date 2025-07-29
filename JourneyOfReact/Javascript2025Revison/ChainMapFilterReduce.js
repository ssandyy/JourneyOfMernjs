const array1 = [1, 2, 3, 4, 5, 6, 7]

const firstData = array1
                        .map((props) => props * 10) // [ 10, 20, 30, 40, 50, 60, 70 ]
                        .map((props) => props+2) // // [ 12, 22, 32, 42, 52, 62, 72 ]
                        .filter((props) => props%2 ==0) // [ 12, 22, 32, 42, 52, 62, 72 ]
                        .filter((props) => props >= 40) //[ 42, 52, 62, 72 ]

console.log(firstData);


//  ------------------  map vs flatMap  -------------------------------

const array2 = [1, 2, 3, 4, 5, 6, 7]

const arr2String = array2.map((props) => [props, " s "]);
console.log(arr2String);

//--------   O/P   ---------
// [
//     [ '1 s ' ],
//     [ '2 s ' ],
//     [ '3 s ' ],
//     [ '5 s ' ],
//     [ '6 s ' ],
//     [ '7 s ' ]
//   ]


const arr3String = array2.flatMap((props) => [props, " s "]);
console.log(arr3String);
// O/P
// [
//     1, ' s ', 2, ' s ',
//     3, ' s ', 4, ' s ',
//     5, ' s ', 6, ' s ',
//     7, ' s '
//   ]



//  ------------------  reduce  -------------------------------
const reduceData = array1.reduce(function(accum, currentVal) {
    console.log(`accoumulator: ${accum} and current value: ${currentVal}`);
    return accum+currentVal;
// accoumulator: 2 and current value: 1
// accoumulator: 3 and current value: 2
// accoumulator: 5 and current value: 3
// accoumulator: 8 and current value: 4
// accoumulator: 12 and current value: 5
// accoumulator: 17 and current value: 6
// accoumulator: 23 and current value: 7
},2)
console.log(reduceData); //30


// Or using arrow function..!
const reduceData2 = array1.reduce((accum, currentVal) => accum+currentVal, 2)
console.log(reduceData2 + 5); //35


//------------    reduce real time example like take data from database 

const employee = [
    {
        ename: "Sandeep",
        designation:"Owner",
        age:30
    },
    {
        ename: "dilip",
        designation:"CEO",
        age: 28
    },
    {
        ename: "Goura Devi",
        designation:"CFO",
        age: 45
    },
    {
        ename: "Jas",
        designation:"VP",
        age: 28
    },
    {
        ename: "Bas",
        designation:"Developer",
        age: 32
    }
]

const designationWiseFilter = employee.reduce((acc, curVal) => {curVal+acc},2)