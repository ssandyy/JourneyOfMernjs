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

// Or method-2  nameless promise
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("asyn promise-2 ");
        resolve()
    }, 3000);
}).then(function(){
    console.log("async promise-2 resolved..!");
})


//=====================================================================

const promiseTwo = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({userName: "Sandeep", age: 30}) // use can use to manupulate data from database
    }, 3000)
})
promiseTwo.then(function(userData){
    console.log(userData);
    console.log(userData.userName);
    console.log(userData.age);
})

//========== use of 'reject' and catch, finally   ====================

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(()=>{
        let error = true
        if(!error){
            resolve({userName: "Sandeep", age: 30, city: "Noida"})
        }else{
            reject('error: Something went wrong, please check again..!')
        }

    }, 1000)
})
promiseThree.then((userData2) => {
    console.log(userData2); // if error is true -> error: Something went wrong, please check again..!
}).catch((error)=>console.log(error))
.finally(()=> console.log("something happend either resolve or rejected..!"))


//===========================  call of resolve using async -await instead of '.then()'  ==================================================

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(()=>{
        let error = true
        if(!error){
            resolve({userName: "Sandeep", age: 30, city: "Noida", state:"Uttar Pradesh"})
        }else{
            reject('error: Something went wrong..!')
        }
    }, 4000)
})
async function consumePromiseFive(){
    try{
        const response = await promiseFour
        console.log(response);
    }catch(error){
        console.log(error);
    }
}
consumePromiseFive()

// =========================================================================================================