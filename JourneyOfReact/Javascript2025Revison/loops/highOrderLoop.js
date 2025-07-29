// for - in 
// for - off

// these are mostly array-object specific loop


const arr = [1,2,3,4,5]
const arrS = [1,"sds",3, "g",5]

for (const i of arr) {
    console.log(i);
    
}
for (const j in arrS) {
    console.log(j);
}

//============  for-of with Map ====================
const mapz = new Map();
mapz.set("IN", "India")
mapz.set("USA", "America")
mapz.set("CN", "Canada")
mapz.set("FR", "France")

console.log(mapz);
// Map(4) {
//     'IN' => 'India',
//     'USA' => 'America',
//     'CN' => 'Canada',
//     'FR' => 'France'
//   }

for (const key of mapz) {
    console.log(key);
}
// [ 'IN', 'India' ]
// [ 'USA', 'America' ]
// [ 'CN', 'Canada' ]
// [ 'FR', 'France' ]


for (const [key, value] of mapz) {
    console.log(key, ":-", value);
}
// IN :- India
// USA :- America
// CN :- Canada
// FR :- France


//============  for-of with Object =================
const myObj = {
    'game1': 'NFS',
    'game2': 'pubg',
    'game3': 'CS-GO',
    'game4': 'CoC'
}
console.log(myObj); // { game1: 'NFS', game2: 'pubg', game3: 'CS-GO', game4: 'CoC' }

// for (const [key, value] of myObj) {
//     console.log(key, ":-:", value);                 // TypeError: myObj is not iterable
// }

//------------------------------------------------------------------------------------------------------------------------------
//===============   for-in  =============================
const myObj2 = {
    game1: 'NFS',
    game2: 'pubg',
    game3: 'CS-GO',
    game4: 'CoC'
}

for (const key in myObj) {
    console.log(key);  // { game1: 'NFS', game2: 'pubg', game3: 'CS-GO', game4: 'CoC' }

    console.log(myObj[key]); 
    // game1
    // NFS
    // game2
    // pubg
    // game3
    // CS-GO
    // game4
    // CoC

    console.log(`${key} is shortcut for ${myObj2[key]}`);
    // game1 is shortcut for NFS
    // game2 is shortcut for pubg
    // game3 is shortcut for CS-GO
    // game4 is shortcut for CoC
    
}

