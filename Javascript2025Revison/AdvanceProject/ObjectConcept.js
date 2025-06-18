function MultipleBy5(num) {
    return num*5;
}

//we can also do object attachment in function
MultipleBy5.power = 2

console.log(MultipleBy5(7)); //35
console.log(MultipleBy5.power); //2
console.log(MultipleBy5.prototype); //{}


// =========================================

// Simple function returning an object
function createUser(username, score) {
    return { username, score };
}
const user2 = createUser("sandy", 100);
console.log(user2); // { username: 'sandy', score: 100 }


// Constructor function (needs "new" because using 'this')
function User(username, score) {
    this.username = username;
    this.score = score;
}
const user1 = new User("sandy", 100);
console.log(user1); // { username: 'sandy', score: 100 }



function createUser(username, score){
    this.score = score
    this.username = username
}

console.log(createUser("sandy", 100));// undefine  (as we are calling function with 'this' without 'new')
console.log(new createUser("sandy", 100));// 


createUser.prototype.increment = () => {
    this.score++
}
createUser.prototype.printMe = () => {
    console.log("Hi");
}

const incre = new createUser("this is print", 1000);
incre.printMe() //Hi