let randomNumber = Math.trunc(Math.random() * 20) + 1;
console.log("random number", randomNumber);

const guessElement = document.querySelector(".guess");
console.log("guess element", guessElement);

const checkBtn = document.getElementById("check-btn");
console.log("Id", checkBtn);

checkBtn.addEventListener("click", checkGuessNumber);
const messageText = document.querySelector(".message");

let scores = 20;
const scoreElement = document.querySelector(".score");
const highScoreElement = document.querySelector(".highscore");

const number  = document.querySelector(".number");
const body = document.querySelector("body");
const resetButton = document.querySelector(".again");

function checkGuessNumber() {
    let userValue = parseInt(guessElement.value);
    console.log("userValue", userValue);
    
   if (isNaN(userValue)||userValue < 1 || userValue > 20) {
        alert ("Please enter number between 1 and 20");
        return;
    }
    if (userValue === randomNumber) {
        messageText.textContent = "Yippee! You guessed the correct number!";
        highScoreElement.textContent = scores;
         number.textContent = randomNumber;
         body.style.backgroundColor = "green";
   } else{
        const difference = Math.abs(userValue - randomNumber);
      if(difference < 2) {
        messageText.textContent = "Very close! Try again.";
       } 
        else if (userValue < randomNumber) {
          scores--; // scores = scores -1;
          scoreElement.textContent = scores;
            messageText.textContent = "Oops! Gussed Too low. Try again.";
        } else {
          scores--;
          scoreElement.textContent = scores;
            messageText.textContent = "Oops! Gussed Too high. Try again.";
        }
      }
}
// let reset = 0;
// resetButton.addEventListener('click', resetGame);
// function resetGame() {
//     //window.location.reload();
//     body.style.backgroundColor = "black";
//     scoreElement.textContent = 20;
//     highScoreElement.textContent = 0;
//     messageText.textContent = "Start guessing...";
//     number.textContent = "?";
//     guessElement.value = "";
//     randomNumber = Math.trunc(Math.random() * 20) + 1;
//     console.log("random number", randomNumber);
// }
const newElement = document.createElement("div");
newElement.textContent= "learning dom";
const mainElement = document.querySelector("main");
mainElement.appendChild(newElement);
