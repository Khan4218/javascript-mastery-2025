//Boolean Data Type

// let hasDiscountCode = true;

// function discountcode() {
//     if (hasDiscountCode) {  //instead of hasDiscountCode it is "" it will be false bcoz empty string is a falsy value
//       console.log("discount applied to food order");
//       hasDiscountCode = false
//     }else {
//         console.log("no discount code available");

//     }
// }

// discountcode();
// discountcode();



// console.log(4 === 3)  // flase
// console.log(5 > 2)    // true
// console.log(12 > 12)  // false
// console.log(3 < 0)    // false
// console.log(3 >= 3)   // true
// console.log(11 <= 11) // true
// console.log(3 <= 2)   // false



//Arrays i.e list of ordered items

// let featuredPosts = [
//     "Check out my Netflix clone",
//     "Here's the code for my project",
//     "I've just relaunched my portfolio"
// ]

// // Create an array that lists your i.e. experience, education, licenses, skills or similar
// // The items of the array should be strings
// let myExperience = ["Front End Developer Fresher", "USIT Recruiter at Transend It solutions"]
// //Make the following appear in log
// //we use index to log specific items
// console.log(myExperience[0]);
// console.log(myExperience[1]);
// console.log(myExperience[2]);


// // Array - ordered list of items - coposite / complex data type

// // Create an array that describes yourself. Use the three primitive data types you've learned
// // It should contain your name (string), your age (number), and whether you like pizza (boolean)
// let name = "Mir Akbar Ali Khan"
// let age = 23
// let likePizza = true
// let aboutMe = [name, age, likePizza ]

// console.log(aboutMe[1]);

// Loops

// Count to ten!

// We need to specify...

// Where should we START counting?
// Where is the FINISH line?
// What's the STEP SIZE we should use?

// //    START           FINISH       STEP SIZE
// for ( let count = 10;  count < 21;  count += 1 )  {

//     console.log(count)

// }

// for (let i = 0; i < 6; i += 1) {
//     console.log(i)
// }

// Create a for loop that counts from 10 to 100 in steps of 10
// Use console.log to log out the numbers

// for (let i = 0 ; i < 101; i += 10) {
//    console.log(i);

// }
// let messages = [
//     "Hey, how's it going?",
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately.",
//     "Same here!",
//     "Great to hear",
//     "👋"
// ]

// // DRY - Don't repeat yourself
// // console.log(messages[0])
// // console.log(messages[1])
// // console.log(messages[2])
// // console.log(messages[3])

// for (let i = 0; i < messages.length; i += 1) {
//    console.log(messages[i]);

// }

// let cards = [7, 3, 9]

// // Create a for loop that logs out all the cards in the array
// // Use cards.length to specify how long the loop should run

// for (let i = 0 ; i < cards.length; i ++) {

//     console.log(cards[i]);

// }

// Returning  values in a function

// let playerFirstTime = 102
// let playerSecondTime = 107



// function getFastestRaceTime() {
//     if (playerFirstTime < playerSecondTime) {
//         return playerFirstTime
//     } else if (playerSecondTime < playerFirstTime) {
//         return playerSecondTime
//     } else {
//     }
// }


// let fastestRace = getFastestRaceTime()
// console.log(fastestRace);


// // Write a function that returns the total race time
// // Call/invoke the function and store the returned value in a new variable
// // Finally, log the variable out

// function totalRaceTime() {
//     return playerFirstTime + playerSecondTime;
// }

// let totalTime = totalRaceTime();
// console.log(totalTime);

//MAth.random

// let randomNumber = Math.random()

// console.log(randomNumber)


/* 

What does Math.random() do?

Your answer: generates a random number between 0 and 1 everytime the method runs

*/

// let randomNumber = Math.random() * 6

// console.log(randomNumber)


/* 

In which range will our randomNumber be now?

From:0
To:5.9999.....

*/

//Math.floor()

let flooredNumber = Math.floor(4.045)

console.log(flooredNumber)


/* 

What does Math.floor() do to positive numbers?

Your answer: removes the decimals

*/







