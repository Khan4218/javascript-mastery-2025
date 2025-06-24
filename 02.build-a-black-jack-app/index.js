let firstCard = 10;
let secondCard = 16;

let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el")

function startGame() {

sumEl.textContent = "Sum:" + " " + sum
cardsEl.textContent = "Cards:" + firstCard + " " + secondCard

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

function newCard() {
  console.log("New Card");
  
}




