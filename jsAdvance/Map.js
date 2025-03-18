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