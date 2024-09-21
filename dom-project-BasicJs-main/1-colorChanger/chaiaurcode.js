const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");

buttons.forEach(function(b){
    console.log(b);
    
    b.addEventListener('click', function(b){
        //console.log(b)
        body.style.backgroundColor = b.target.id  // target/srcElement (bothr hold value in id)
    })
})