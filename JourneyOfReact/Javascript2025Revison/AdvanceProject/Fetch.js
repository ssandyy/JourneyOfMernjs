fetch('https://api.github.com/users/ssandyy789')
.then((response)=>{
    return response.json()  //convert the api data that is in string into Json formate
})
.then((data)=>{
    console.log(data);
    console.log(data.location); 
})
.catch((error)=> console.log(error))