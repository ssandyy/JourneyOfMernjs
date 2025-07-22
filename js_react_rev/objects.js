function greet() {
    console.log(`Hello ${this.name}, you are now ${this.age} years old`);
}

function greet2() {
    console.log(`Hello ${this.name}, you are now ${this.age} years old, and your collage is ${this.collage}`);
}

const person = {
    name: "John",
    age: 30,
    collage: "MIT",
    greet // calling the greet function make this variable act as function and this keyword will be the object that call the function
}

const employee = {
    name: "John",
    age: 30,
    collage: "IIT",
    greet4 : function() {
        console.log(`Hello ${this.name}, you are now ${this.age} years old, and your collage is ${this.collage}`);
    }
}


const student = {
    name: "Jane",
    age: 20,
    collage: "Harvard",
    greet2,
    greet
}

person.greet();
student.greet2();

greet2(person);
greet2(student);

employee.greet4();


const obj1 = new 
