// 🔹 Challenge 1: Simple Math Chain
// Task:
// Chain three .then() calls:
// Start with a resolved promise of 2
// Multiply it by 3
// Add 10
// Log the final result
// 🧠 Expected output: 16
// Implement this using chaining only.

Promise.resolve(2)
  .then(ch1 => { return ch1 * 3 })
  .then(ch2 => { return ch2 + 10 })
  .then(ch3 => console.log(ch3))

// 🔹 Challenge 2: Delayed Greeting
// Task:
// Create a delay(ms) function that returns a promise and resolves after ms milliseconds.
// Chain it to:
// Wait 2 seconds
// Then log: "Hello after 2 seconds!"
// 🧠 Expected: after 2 sec, logs the message.

const delay = function () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello after 2 seconds!")
    }, 2000)
  })
}

delay().then(msge => console.log(msge))


// 🔹 Challenge 3: Conditional Chain
// Task:
// Use a boolean to simulate user login.
// Chain promises to:
// If logged in, return "Welcome back!"
// If not, throw an error
// Use .catch() to log: "Access denied" if error occurs
// Try both cases

const isUser = true

new Promise((resolve, reject) => {
  isUser ? resolve("Welcome back!") : reject("Access denied")
}).then(login => console.log(login)).catch(err => console.log(err))


// 🔹 Challenge 4: Chain with Fetch
// Task:
// Fetch a random quote from:
// https://dummyjson.com/quotes/random
// Use .then() chaining (no async/await), and log the quote and author.
// Handle errors with .catch().

fetch("https://dummyjson.com/quotes/random")
  .then(response => { return response.json() })
  .then(data => {
    console.log(`Quote: ${data.quote}`)
    return data.author
  })
  .then(author => { `${console.log(`Author: ${author}`)}` })
  .catch(err => console.log(`Error: ${err}`))