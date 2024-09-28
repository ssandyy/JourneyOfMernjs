//preventDefault()
//stoppropagation()
//type, timestamp
//target, toElement, srcElement, currentTarget
//clientX, ClientY, screenX, ScreenY


// Event Propagation 2 type : 1. Event Capturing and 2. Event Bubbling..


document.getElementById("photoshop").addEventListener("click", (e) => {
    alert("Hi phgototshop")
    console.log("clicked photoshop..!");
    
})

// attachEvent()
// jQuery - on

// type, timestamp, defaultPrevented
// target, toElement, srcElement, currentTarget,
// clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keyCode

document.getElementById('images').addEventListener('click', function(e){
    console.log("clicked inside the ul");
}, false)

document.getElementById('owl').addEventListener('click', function(e){
    console.log("owl clicked");
    e.stopPropagation() // to stop propagation of other element and do not get bubbled propogition
}, false)

// document.getElementById('google').addEventListener('click',function(e){
//     e.preventDefault();
//     e.stopPropagation()
//     console.log("google clicked");
// }, false)


// document.querySelector('#images').addEventListener('click', function(e){
//     console.log(e.target.tagName);
//     if (e.target.tagName === 'IMG') {
//         console.log(e.target.id);
//         let removeIt = e.target.parentNode
//         removeIt.remove()
//     } 
// })

//removeIt.parentNode.removeChild(removeIt)