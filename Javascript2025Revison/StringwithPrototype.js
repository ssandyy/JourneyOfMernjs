const myName = new String("  Mutu swami china swami aier  ");
/*
prototypes:
charAt
charCodeAt
concat
includes
indexOf
lastIndexOf
match
repeat
replace
slice
split
startsWith
substring
toLowerCase
toUpperCase
trim
trimStart
trimEnd
*/

Examples:
// charAt(index): Returns the character at the specified index.
console.log(myName.charAt(1)); // "u"

// charCodeAt(index): Returns the Unicode of the character at the specified index.
console.log(myName.charCodeAt(1)); // 117

// concat(string2, string3, ..., stringN): Concatenates two or more strings.
console.log(myName.concat(" is", " a", " character")); // "Mutu swami china swami aier is a character"

// includes(searchString, position): Determines whether one string may be found within another string.
console.log(myName.includes("swami")); // true

// indexOf(searchValue, fromIndex): Returns the index within the string of the first occurrence of the specified value.
console.log(myName.indexOf("swami")); // 5

// lastIndexOf(searchValue, fromIndex): Returns the index within the string of the last occurrence of the specified value.
console.log(myName.lastIndexOf("swami")); // 18

// match(regexp): Retrieves the matches when matching a string against a regular expression.
console.log(myName.match(/swami/g)); // ["swami", "swami"]

// repeat(count): Constructs and returns a new string which contains the specified number of copies of the original string.
console.log(myName.repeat(2)); // "Mutu swami china swami aierMutu swami china swami aier"

// replace(searchValue, newValue): Returns a new string with some or all matches of a pattern replaced by a replacement.
console.log(myName.replace("swami", "Swami")); // "Mutu Swami china swami aier"

// slice(beginIndex, endIndex): Extracts a section of a string and returns it as a new string.
console.log(myName.slice(5, 10)); // "swami"

// split(separator, limit): Splits a String object into an array of strings by separating the string into substrings.
console.log(myName.split(" ")); // ["Mutu", "swami", "china", "swami", "aier"]

// startsWith(searchString, position): Determines whether the calling string starts with the characters of a specified string.
console.log(myName.startsWith("Mutu")); // true

// substring(indexStart, indexEnd): Returns the part of the string between the start and end indexes.
console.log(myName.substring(5, 10)); // "swami"

// toLowerCase(): Returns the calling string value converted to lower case.
console.log(myName.toLowerCase()); // "mutu swami china swami aier"

// toUpperCase(): Returns the calling string value converted to upper case.
console.log(myName.toUpperCase()); // "MUTU SWAMI CHINA SWAMI AIER"

// trim(): Removes whitespace from both ends of a string.
console.log(myName.trim()); // "Mutu swami china swami aier"

// trimStart(): Removes whitespace from the beginning of a string.
console.log(myName.trimStart()); // "Mutu swami china swami aier"

// trimEnd(): Removes whitespace from the end of a string.
console.log(myName.trimEnd()); // "Mutu swami china swami aier"