// const promiseOne = new Promise(funtion(resolve, reject){ });  // new promise created

const promiseOne = new Promise(function(resolve, reject) {
    // do an async task
    // DB calls, cryptography network
    //resolve is align with '.then'

    setTimeout(function(){
        console.log('Asyn task is completed..!');

        resolve() //this will invole the promise call by using '.then'
        
    }, 2000)
});

promiseOne.then(function(){
    console.log("Promise one consumed"); // this will invoke by 'resolve()'
})

// Or method-2 
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("asyn promise-2 ");
        resolve()
    }, 3000);
}).then(function(){
    console.log("async promise-2 resolved..!");
})