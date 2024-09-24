
const randomNum = (parseInt(Math.random() * 10) + 1);

//console.log(randomNum);

const submit = document.querySelector("#subt")
const guessField = document.querySelector('#guessField');
const result = document.querySelector(".lastResult")
const gussesDone = document.querySelector(".guesses");
const remainingTry = document.querySelector('.remainingTry')
const lowOrHigusses = document.querySelector('.lowOrHi')
const resultArea = document.querySelector(".resultParas")


let previousGuess = []
let start = true
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
        alert(`Please enter valid lucky number between 1 to 10 to win the jackpot..!`)
    } else if (guess > 10) {
        // alert(`please enter lesser number...!`);
        lowOrHigusses.textContent = `please enter lower number..!`;
    } else if (guess < 1) {
        // alert(`please enter higher number..!`);
        lowOrHigusses.textContent = `please enter higher number..!`;
    } else {
        checkGuess(guess)
    }
}

function checkGuess(guess) {
    if (guess === randomNum) {
        guessDisplay(guess)
        result.textContent = `Congratulation you win the game..!`;
        endGame();
    } else {
        guessDisplay(guess)
        result.textContent = `sorry this is not the lucky number..!`
        
    }
}

function guessDisplay(guess) {
    if (previousGuess.length >= maxTry) {
        result.textContent = `Sorry, Game over! The Lucky number was ${randomNum}`;
        endGame();
    } else {
        previousGuess.push(guess);
        gussesDone.textContent = previousGuess.join(', ');
        remainingTry.textContent = `${maxTry - previousGuess.length}`;
        
        if (previousGuess.length === maxTry) {
            result.textContent = `Sorry, Game over! The Lucky number was ${randomNum}`;
            endGame();
        }
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






















