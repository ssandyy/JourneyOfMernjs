const clock = document.querySelector('#clock');

// Update the clock every second
setInterval(function(){
    const timeNow = new Date();
    clock.innerHTML = timeNow.toLocaleTimeString();
}, 1000); 