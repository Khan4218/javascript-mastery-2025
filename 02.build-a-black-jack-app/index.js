let firstCard = 10;
let secondCard = 16;
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el")

function startGame() {
  renderGame();
}

function renderGame() {

sumEl.textContent = "Sum:" + " " + sum
cardsEl.textContent = "Cards:" + cards[0] + " " + cards[1]

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

}

function newCard() {
    
  // 1. Create a card variable, and hard code its value to a number (2-11)
     let card = 6;
  // 2. Add the new card to the sum variable
     sum += card
  // 3. Call startGame()
     renderGame();
}




