const form = document.querySelector("form");

form.addEventListener('submit', function(event){
    event.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results');

    if(isNaN(height) || height < 0 || weight <0 || isNaN(weight)){
        result.innerHTML = `please enter valid data in number..! height = ${height} and weight= ${weight}`;
    }else{
        const bmi = weight / Math.pow(height / 100, 2);
        result.innerHTML = `<span>${bmi.toFixed(2)}</span>`;
        if (bmi > 24.9) {
            result.innerHTML = `your bmi is ${bmi}, you are Overweight`;
        } else if(bmi >= 18.6 && bmi <= 24.9) {
            result.innerHTML = `your bmi is ${bmi}, you are fit..!`;
        }else{
            result.innerHTML = `your bmi is ${bmi}, you are underweight`;
        }
    }
    
})