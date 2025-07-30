const mapz = new Map();
mapz.set("IN", "India")
mapz.set("USA", "America")
mapz.set("CN", "Canada")
mapz.set("FR", "France")




console.log(mapz);


//O/p
// Map(4) {
//     'IN' => 'India',
//     'USA' => 'America',
//     'CN' => 'Canada',
//     'FR' => 'France'
//   }

for (const key of mapz) {
    console.log(key);
}

//O/p
// [ 'IN', 'India' ]
// [ 'USA', 'America' ]
// [ 'CN', 'Canada' ]
// [ 'FR', 'France' ]


for (const [key, value] of mapz) {
    console.log(key, ":-", value);
}

//O/p
// IN :- India
// USA :- America
// CN :- Canada
// FR :- France