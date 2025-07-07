// //vvariable const and let and template strings practice
// // SETTING THE STAGE
// const player = "Per"
// const opponent = "Nick"
// const game = "AmazingFighter"
// let points = 0
// let hasWon = false

// // PLAYING THE GAME
// points += 100
// hasWon = true

// // ANNOUNCING THE WINNER
// if (hasWon) {
//   console.log(`${player} got  ${points} points and won the ${game} game!`)
// } else {
//   console.log(`The winner is ${opponent} ! ${player} lost the game`)
// }

// // Go through all variables and decide if they should be let or const
// // Change the console logs to use template strings instead of double quotes

// // log out items in an array practice

// let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]

// // Create a function that takes a single parameter, an array,
// // and logs all the items of the array to the console.
// // Call the function while passing in myCourses as an argument

// function renderCourses(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);

//   }

// }
// renderCourses(myCourses)

// //save to localStorage practice

// // Save a value to localStorage
// // Delete your code and refresh the page
// // Fetch your value from localStorage and log it out

// // let store = localStorage.setItem("name", "Akbar Khan")

// let fetchLocalStorage = localStorage.getItem("name")
// console.log(fetchLocalStorage);


// //addEventListener and object in a array

// let data = [
//   {
//     player: "Jane",
//     score: 52
//   },
//   {
//     player: "Mark",
//     score: 41
//   }
// ]

// // Fetch the button from the DOM, store it in a variable
// // Use addEventListener() to listen for button clicks
// // Log Jane's score when the button is clicked (via data)

// let buttonEl = document.getElementById("btn-el")
// buttonEl.addEventListener("click", function () {
//   console.log(data[0].score);

// })


// //Generate Sentence
// // The generateSentence(desc, arr) takes two parameterer: a description and an array.
// // It should return a string based upon the description and array.

// // Example 1: if you pass in "largest countries",and ["China", "India", "USA"],
// // it should return the string: "The 3 largest countries are China, India, USA"

// // Example 2: If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// // "The 2 best fruits are Apples, Bananas"

// // Use both a for loop and a template string to solve the challenge


// function generateSentence(desc, arr) {
//   let baseLine = `The ${arr.length} best ${desc} are `
//   const lastIndex = arr.length - 1
//   for (let i = 0; i < arr.length; i++) {
//     if (i === lastIndex) {
//       baseLine += arr[i]
//     } else {
//       baseLine += arr[i] + ","
//     }


//   }
//   return baseLine;

// }

// let sentence = generateSentence("Mountains", ["Mount Everest", "K2"])

// console.log(sentence);

//render images 

// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

// const imgs = [
//   "images/hip1.jpg",
//   "images/hip2.jpg",
//   "images/hip3.jpg"
// ]

// const containerEL = document.getElementById("container")


// function renderImages() {
//   let imgDom = ""
//   for (let i = 0; i < imgs.length; i++) {
//     imgDom += `
//     <img alt="Employes images" src="${imgs[i]}" class="team-img"/>   
// `
//   }

//   containerEL.innerHTML = imgDom
// }

// renderImages();

//rouding decimals 

// Challenge:
// Round the price in the button down to two decimal places.
// Don't know which method to use? Google it!

const totalPrice = "420.69235632455"
const btn = document.getElementById("purchase-btn")
const prizeNum = Number("420.69235632455")
btn.textContent = `Buy  €${prizeNum.toFixed(2)}`

//convert string to number challenge 



