const randamNumber = Math.floor(Math.random() * 100) + 1;
console.log(randamNumber);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let previousGuesses = [];
let numGuesses = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    // console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  // to be implemented
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1 || guess > 100) {
    alert("Please enter a number between 1 and 100");
  } else {
    previousGuesses.push(guess);
    // console.log(previousGuesses);
    if (numGuesses === 10) {
      displayGuesses(guess);
      displayMessage(`Game Over! The number was ${randamNumber}`);
      endGame();
    } else {
      displayGuesses(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  //
  if (guess === randamNumber) {
    displayMessage("Congratulations! You guessed it right!");
  } else if (guess < randamNumber) {
    displayMessage("Your guess is too low!");
  } else if (guess > randamNumber) {
    displayMessage("Your guess is too high!");
  }
}

function displayGuesses(guess) {
  //
  userInput.value = "";
  console.log(guess);
  guessSlot.innerHTML += `${guess}, `;
  numGuesses++;
  remaining.innerHTML = `${11 - numGuesses}`;
}

function displayMessage(message) {
  //
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  //
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<button id="newGame">Start New Game</button>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  //
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function () {
    randamNumber = Math.floor(Math.random() * 100) + 1;
    previousGuesses = [];
    numGuesses = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `10`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}
