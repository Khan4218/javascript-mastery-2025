let firstCard = 10;
let secondCard = 16;
let cards = [firstCard, secondCard,] 
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

  cardsEl.textContent = "Cards: "
  sumEl.textContent = "Sum:" + " " + sum

  for (i = 0; i < cards.length ; i ++) {
    cardsEl.textContent += cards[i] + " "
  }

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
    
     let card = 6;
     sum += card
     cards.push(card)
     console.log(cards);
     
     renderGame();

}




