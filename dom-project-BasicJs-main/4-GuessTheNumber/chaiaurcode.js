
const randomNum = (parseInt(Math.random() * 10) + 1);

console.log(randomNum);

const submit = document.querySelector("#subt")
const guessField = document.querySelector('#guessField');
const result = document.querySelector(".lastResult")
const gussesDone = document.querySelector(".guesses");
const resultArea = document.querySelector('.resultParas')
const lowOrHigusses = document.querySelector('.lowOrHi')


let previousGuess = []
let start = true
let defaultGuess = 1
let maxTry = 5

if (start) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guessRoll = parseInt(guessField.value);
        validate(guessRoll);
    })
}

function validate(guess) {
    if (isNaN(guess)) {
        alert(`Please enter valid number to win between 1 to 10`)
    } else if (guess > 10) {
        alert(`please enter lesser number...!`);
    } else if (guess < 1) {
        alert(`please enter higher number..!`);
    } else {
        checkGuess(guess)
    }
}

function checkGuess(guess) {
    if (guess === randomNum) {
        result.textContent = `Congratulation you win the game..!`;
        endGame();
    } else {
        console.log(`sorry this is not the lucky number..!`);
        guessDisplay(guess)
    }
}

function messageDisplay() { }


function guessDisplay(guess) { 
    if(previousGuess.length < maxTry){
        previousGuess.push(guess)
        gussesDone.textContent = previousGuess.join(', ');
        messageDisplay(guess);
    }else{
        result.textContent = `Sorry Game over, The Lucky number was ${randomNum}.`;
        endGame();
    }
}

function newGame() { 
    start = true;
    previousGuess = []; // Reset the guesses
    result.textContent = '';
    gussesDone.textContent = '';
    lowOrHi.textContent = '';
    guessField.value = '';
}

function endGame() { 
    start =false;
    submit.disabled = true; 
    const restartBtn = document.createElement('button');
    restartBtn.textContent = 'Start New Game';
    resultArea.appendChild(restartBtn);
    restartBtn.addEventListener('click', function() {
        newGame();
        submit.disabled = false;
        resultArea.removeChild(restartBtn); // Remove the restart button
    });
}






















