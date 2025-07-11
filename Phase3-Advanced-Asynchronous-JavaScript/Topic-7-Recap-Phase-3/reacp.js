// 🔹 Challenge 1: Delayed Greeting
// Log "Hello, Akber!" after 2 seconds.
// Expected: (after 2 seconds)
// Hello, Akber!

setTimeout(() => console.log("Hello, Akber!"), 2000)

// 🔹 Challenge 2: Hydration Reminder
// Log "💧 Drink Water" every 3 seconds, but stop after 5 times.
// Expected:
// 💧 Drink Water
// 💧 Drink Water
// 💧 Drink Water
// 💧 Drink Water
// 💧 Drink Water
let count = 0;
const logNumber = setInterval(() => {
  count++
  console.log("💧 Drink Water");
  if (count === 5) {
    clearInterval(logNumber)
  }
}, 3000)

// 🔹 Challenge 3: Simulated API Check
// Write a function checkStatus(isOnline) that returns a Promise.
// If isOnline is true, resolve with "🟢 Online"
// If false, reject with "🔴 Offline"
// Then call it and log the result
// Expected:
// 🟢 Online  (if true)
// 🔴 Offline (if false)
// const isOnline = true
const checkStatus = (isOnline) => {
  return new Promise((resolve, reject) => {
    isOnline ? resolve("🟢 Online") : reject("🔴 Offline")
    return promise
  })
}
checkStatus(true).then(res => console.log(res)).catch(err => console.log(err))

// 🔹 Challenge 4: Random Quote App
// Using async/await, fetch and log a random quote from:
// https://dummyjson.com/quotes/random
//format 
// "Quote: XYZ"  
// "Author: ABC"

async function getQuotes() {
  try {
    const response = await fetch("https://dummyjson.com/quotes/random")
    const data = await response.json()
    console.log(`${data.quote} - ${data.author}`);

  } catch (err) {
    console.log("Error:", err.message);

  }
}

getQuotes()


