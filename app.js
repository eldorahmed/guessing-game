let randomNumber = Math.floor(Math.random() * 20) + 1;
let attempts = 0;
const maxAttempts = 10;
const gameContainer = document.getElementById("gameContainer");
const guessInput = document.getElementById("guessInput");
const resultMessage = document.getElementById("resultMessage");
const attemptsMade = document.getElementById("attemptsMade");
const attemptsLeft = document.getElementById("attemptsLeft");
const checkBtn = document.getElementById("check-btn");
let checkSound = new Audio("./sounds/check.wav");
let winSound = new Audio("./sounds/win.mp3");
let loseSound = new Audio("./sounds/lose.wav");
let startSound = new Audio("./sounds/start.wav");
let resetSound = new Audio("./sounds/reset.wav");
function gameStart() {
  startSound.play();
}
document.addEventListener("DOMContentLoaded", gameStart);
function checkGuess() {
  checkSound.play();
  let guess = parseInt(guessInput.value);
  if (isNaN(guess)) {
    resultMessage.textContent = "Enter a number!🫥";
    return;
}
  attempts++;
  attemptsMade.textContent = attempts;
  attemptsLeft.textContent = maxAttempts - attempts;

  if (guess === randomNumber) {
    resultMessage.textContent = "You win!🏆🎉";
    gameContainer.classList.add("win-effect");
    winSound.play();
    disableGame();
  } else if (attempts >= maxAttempts) {
    resultMessage.textContent = `You lost!☠️ The number was ${randomNumber}.`;
    gameContainer.classList.add("lose-effect");
    loseSound.play();
    disableGame();
  } else if (guess > randomNumber) {
    resultMessage.textContent = "Too high!😬";
  } else if (guess < randomNumber) {
    resultMessage.textContent = "Too low!😔";
  }
}

function disableGame() {
  guessInput.disabled = true;
  checkBtn.setAttribute("disabled", "true");
}

function resetGame() {
  randomNumber = Math.floor(Math.random() * 20) + 1;
  attempts = 0;
  guessInput.disabled = false;
  guessInput.value = "";
  resultMessage.textContent = "";
  attemptsMade.textContent = 0;
  checkBtn.disabled = false;
  resultMessage.textContent = "🤔";
  resetSound.play();
  gameContainer.classList.remove("win-effect");
  gameContainer.classList.remove("lose-effect");
}
