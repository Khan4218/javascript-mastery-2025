// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards

let firstCard = 1;
let secondCard = 10;

let sum = firstCard + secondCard;


// Write the conditional according to these rules:

// if less than or equal to 20 -> "Do you want to draw a new card? 🙂"
// else if exactly 21 -> "Wohoo! You've got Blackjack! 🥳"
// else -> "You're out of the game! 😭"

if (sum <= 20) {
  console.log("Do you want to draw a new card? 🙂");
  
}else if (sum === 21) {
  console.log("Wohoo! You've got Blackjack! 🥳");
  
}else {
   console.log("You're out of the game! 😭");
   
}