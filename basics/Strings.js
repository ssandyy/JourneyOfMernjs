const stdName = "Sandeep"
const stdNick = "   Sandy  "
const age = 85
const getName = new String('Sandeep kumar Yadav')



console.log(getName)   // [String: 'Sandeep kumar Yadav']
console.log(stdName)  // Sandeep
console.log(age)     // 85
console.log(getName.length) //19
console.log(getName[0])     // S
console.log(stdName.charAt(5)) //e
console.log(getName.toUpperCase()) // SANDEEP KUMAR YADAV
console.log(getName.toLowerCase()) // sandeep kumar yadav
console.log(getName.startsWith('Sandeep')) // true
console.log(getName.endsWith('Yadav'))    //true
console.log(stdName.slice(1,5))           //ande
console.log(getName.replace('Sandeep', 'Sandy'))  //Sandy kumar Yadav
console.log(stdNick.trim())   // "   Sandy  "   to  "Sandy"
console.log(stdNick.trimStart())  // "   Sandy  "   --> "Sandy  "
console.log(stdNick.trimEnd())  // "   Sandy  "   --> "   Sandy"
console.log(getName.split(' ').join(',')) //replace all space with ,
console.log(getName.includes('kumar'))  // check if it contains the substring    yes--> true ||  No --> false
console.log(stdName.concat(",", stdNick, "!"))  // Sandeep,   Sandy  !
console.log((getName+ ", ").repeat(3).slice(0, -1))  // Sandeep kumar Yadav, Sandeep kumar Yadav, Sandeep kumar Yadav
