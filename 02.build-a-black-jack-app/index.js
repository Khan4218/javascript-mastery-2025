let firstCard = 10;
let secondCard = 10;

let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");

function startGame() {
sumEl.textContent = "Sum:" + " " + sum
if (sum <= 20) {
message = "Do you want to draw a new card?";
messageEl.textContent = message;
  
}else if (sum === 21) {
  message = "You've got Blackjack!"
  hasBlackJack = true;
  messageEl.textContent = message;
}else {
   message = "You're out of the game!"
   isAlive = false
   messageEl.textContent = message;
}

console.log(message);
}




