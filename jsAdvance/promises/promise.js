// const promise1 = new Promise();

const promise1 = new Promise(function (resolve, reject){
    setTimeout(function(){
        console.log("Hi..! this is promise 1");
    }, 5000)
    // resolve()
})

promise1.then(() => {
    console.log('this is then function of promise1 ');
})

// OR  make in one 

new Promise(function (resolve, reject){
    setTimeout(function(){
        console.log("Hello..! this is promise2");
          resolve()
    }, 3000)
  
}).then(() => { console.log("this is for anonymous promise, 'then' function after resolve()..!");})



const promise3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:"Sandy", password: "123456"})
    })
});

promise3.then(function(userDetails){
    console.log(userDetails);
    console.log(userDetails.username);
    console.log("this is promise3");
    
});


const promise4 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if (!error) {
            resolve({username:"Sandeep", age:25})
        } else {
            reject("There is error in promise4, please check..!");
        }
    }, 1000);
});

promise4.then((user) => {
    console.log(user);
    return user.username;
}).then((uname) => {
    console.log(uname);
    
}).catch(function(err){
    console.log(err);
}).finally(() => {
    console.log("finally block of promise 4");
})