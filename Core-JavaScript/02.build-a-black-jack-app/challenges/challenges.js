//challenge 1 if else statement
// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases

// let age = 22

// // if less than 21 -> "You can not enter the club!"
// // else            -> "Welcome!"

// if(age < 21){
//    console.log("You can not enter the club");

// }else{
//     console.log("welcome!");

// }

//challenge 2

// Check if the person is elegible for a birthday card from the King! (100)

// let age = 101

// // if less than 100    -> "Not elegible"
// // else if exactly 100 -> "Here is your birthday card from the King!"
// // else                -> "Not elegible, you have already gotten one"

// if (age < 100) {
//     console.log("Not elegible");

// }else if (age === 100) {
//    console.log("Here is your birthday card from the King!");

// }else {
//     console.log("Not elegible, you have already gotten one");

// }

//Arrays Challenge

// let cards = [7, 4]
// cards.push(6)
// //console.log(cards)

// // Push the newMessage to the messages array, and then log out the array

// let messages = [
//     "Hey, how's it going?",
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately."
// ]

// let newMessage = "Same here!"

// messages.push(newMessage)
// console.log(messages);

// // How can you remove the last item in an array? Try to google it!

// messages.pop()

// console.log(messages);

//for Loop and arrays and DOM challenge

// let sentence = ["Hello", "my", "name", "is", "Per"]
// let greetingEl = document.getElementById("greeting-el")

// // Render the sentence in the greetingEl paragraph using a for loop and .textContent

// for (i = 0; i < sentence.length; i ++) {
//   greetingEl.textContent += " " + sentence[i]

// }


// Create a function, rollDice(), that returns a random number between 1 and 6

// function rollDice() {
//   let randomNumber = Math.floor(Math.random() * 6) + 1
//   return randomNumber

// }
// console.log(rollDice());

//Our new card feature or button is broken bcoz i can click a new card before starting the game and i can go on adding new cards to fix that i need more conditional operators and i need to learn it 

//Objects challenge

// Create an object that represents an airbnb castle listing.
// It should contain at least one boolean, one string, one number, and one array
// Log out at least two of the keys using the dot notation

let castleListing = {
  isOpen: true,
  castleName: "SanGusto Abbey",
  rating: 4,
  specifications: ["4 Bedrooms", "1 Bed room", "2 Beds", "Private half bath "]

}

console.log(castleListing.castleName);
console.log(castleListing.specifications);
