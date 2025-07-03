// // If possible, use const. If not, use let.

// // Which variables below should be changed from let to const?

// // The customer wants to order some stuff. Here are the details:
// const basePrice = 520
// const discount = 120
// let shippingCost = 12
// let shippingTime = "5-12 days"

// // Whops! Turns out the shipping will be a bit more complex
// shippingCost = 15
// shippingTime = "7-14 days"

// // Calculating the full price
// const fullPrice = basePrice - discount + shippingCost

// // Finally, notifying the customer
// console.log("Total cost: " + fullPrice + ". It will arrive in " + shippingTime)

// //innerHtml practice

// // Use .innerHTML to render a Buy! button inside the div container

// const containerEl = document.getElementById("container")
// console.log(containerEl);

// containerEl.innerHTML = "<button onclick='buy()'> Buy! </button>"

// // When clicked, render a paragraph under the button (in the container)
// // that says "Thank you for buying!"

// function buy() {
//   containerEl.innerHTML += "<p> Thank You For Buying!</p>"
// }


// // 1. Turn the myLeads string into an array
// myLeads = JSON.parse(myLeads)
// // 2. Push a new value to the array
// myLeads.push("www.lindein.com")
// // 3. Turn the array into a string again
// myLeads = JSON.stringify(myLeads)
// // 4. Console.log the string using typeof to verify that it's a string
// console.log(typeof myLeads);


// // truthy and falsy value 

// // const credits = 0

// // if (credits) {
// //     console.log("Let's play 🎰")
// // } else {
// //     console.log("Sorry, you have no credits 😭")
// // }

// // truthy
// // falsy

// // false
// // 0
// // ""
// // null -> how you as a developer signalize emptiness
// // undefined -> how JavaScript signalizes emptiness
// // NaN

// let currentViewers = null

// currentViewers = ["jane", "nick"]

// currentViewers = null

// if (currentViewers) {
//   // do something , e.g. notify the live streamers
//   console.log("we have viewers")
// }

// //undefined
// // let currentViewers

// // console.log(currentViewers)  //output undefined


//functions parameters practice
// const welcomeEl = document.getElementById("welcome-el")

// // Give the function a parameter, greeting, that replaces "Welcome back"
// function greetUser(greeting) {
//   welcomeEl.textContent = `${greeting}, Per Harald Borgen 👋`
// }

//using multiple parameters and arguments
// greetUser("Hello")

// const welcomeEl = document.getElementById("welcome-el")

// function greetUser(greeting, name, emoji) {
//   // Rewrite the expression using template literals
//   welcomeEl.textContent = `${greeting}, ${name} ${emoji}`
// }

// greetUser("Howdy", "James", "👋")


//practice parameters with numbers 

// Create a function, add(), that adds two numbers together and returns the sum

function add(num1, num2) {
  return num1 + num2;
}

console.log(add(3, 4)) // should log 7
console.log(add(9, 102)) // should log 111