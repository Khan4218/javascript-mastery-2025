// 🔹 Challenge 1: Basic Fetch with async/await
// ✅ Task:
// Use async/await to fetch a random quote from:
// https://dummyjson.com/quotes/random

// async function quotes() {
//   try {
//     const response = await fetch("https://dummyjson.com/quotes/random")
//     const data = await response.json()
//     console.log(`${data.quote} - ${data.author}`);
//   } catch (err) {
//     console.log("Failed", err);
//   }


// }

// quotes()

// 🔹 Challenge 2: Button-Triggered Quote Fetch
// ✅ Task:
// Make a function that fetches a random quote only when the user clicks a button.
//🔹 Challenge 3: Show Quote in the DOM
// ✅ Task:
// Update your app so that the fetched quote appears inside a <div> on the page — not just in the console.
// const buttonEl = document.getElementById("btn-el")
// const quoteEl = document.getElementById("quote-box")
// buttonEl.addEventListener("click", () => {


//   async function getQuote() {
//     try {
//       quoteEl.innerHTML = "Loading..."
//       const response = await fetch("https://dummyjson.com/quotes/random")
//       const data = await response.json()
//       quoteEl.innerHTML = `${data.quote} - ${data.author}`
//     } catch (err) {
//       quoteEl.innerHTML = `Failed to fetch quote: ${err.message}`
//     }

//   }

//   getQuote()

// })

// 🔹 Final Challenge: Fetch Multiple Quotes (Bonus Level 🧠)
// ✅ Task:
// On button click, fetch 5 random quotes using:https://dummyjson.com/quotes
// Show any 5 quotes (not just 1) on the page.
// Format:
// "Quote one" — Author
// "Quote two" — Author
// ...
const buttonEl = document.getElementById("btn-el")
const quoteEl = document.getElementById("quote-box")
let count = 0
buttonEl.addEventListener("click", () => {
  async function quotes() {
    try {
      const response = await fetch("https://dummyjson.com/quotes")
      const data = await response.json()
      // const randomIndex = Math.floor(Math.random() * data.quotes.length)
      const array = data.quotes
      for (let i = 1; i < 6; i++) {
        const finalQuote = array[i]
        count++
        quoteEl.innerHTML += `Quote ${i} :<ul>${finalQuote.quote} - ${finalQuote.author} </ul>`

      }



    } catch (err) {
      quoteEl.innerHTML = `⚠️ Failed to fetch quotes: ${err.message}`;

    }

  }
  quotes()
})

