
// const bgColor = Math.round(Math.random()*10); // can also use floor/ceil to remove decimal values
// console.log(bgColor);

const randomColor = () => {
    const hex = '0123456789ABCDEF'        // 16 diffrent values used in color combination 
    let color = '#'                     //because hex code starts with suffix '#'
    for(let i=0; i<6; i++){             //because color hexcode cointains 6 digits with # e.g  #fff333
        color = color+hex[Math.floor(Math.random()*16)]; // concate string with randomnum  
//note 'ceil' will include 16 which may cause undefined error --> floor = 0 to 15 and ceil = 1 to 16
 // since color hexcode is of 6digit if alpha numberic so we have to make it random 
    }
    return color;
    //console.log(color);
};
let intervalcount;

const startChangeColor = () => {
    if(!intervalcount){
        intervalcount = setInterval(changeColor, 1000)
    }
        function changeColor() {
            document.body.style.backgroundColor = randomColor();
            console.log('start'+ randomColor());
        }
}

const stopChangeColor = () => {
    if(intervalcount){
        clearInterval(intervalcount);
        intervalcount = null;
        console.log('stop');
    }
}


document.querySelector("#start").addEventListener('click', startChangeColor) 
document.querySelector("#stop").addEventListener('click', stopChangeColor)