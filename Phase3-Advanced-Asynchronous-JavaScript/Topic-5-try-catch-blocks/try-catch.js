// 🔹 Challenge 1: Error-Handled Fetch
// Task:
// Create an async function that fetches from a broken/invalid URL.
// // Use try/catch to log a custom error message if the fetch fails.
// 🔧 Expected behavior:
// If fetch fails, catch the error and log:
// "❌ Failed to fetch data: <error message>"

// async function errorHandle() {
//   try {
//     const response = await fetch("https://myname.com")
//     const data = await response.json()
//     console.log(data);


//   } catch (err) {
//     console.log("❌ Failed to fetch data:", err.message);

//   }

// }

// errorHandle()

// 🔹 Challenge 2: Fallback on Failure
// Task:
// Try fetching from a fake API endpoint.
// If it fails, use a default fallback quote instead and log it.

// 📌 Bonus: Only log the fallback message, don't log the error message itself.

// Ready when you are — your fallback quote is:
// "Stay curious!" - Unknown

// async function fakeAPI() {
//   try {
//     const response = await fetch("https://FakeApi.com")
//     const data = await response.json()
//     console.log(data);

//   } catch {
//     console.log(`⚠️ Using fallback: 'Stay curious!' - Unknown`);


//   }
// }

// fakeAPI()

// 🔹 Challenge 3: Optional Error Display
// Task:
// Fetch a quote from this working API:
// https://dummyjson.com/quotes/random

// Display the quote like this:
// "One day or day one. You decide." - Unknown
// But if it fails, log:
// ❌ Couldn't fetch a quote right now.
// Don’t log error details, only that message.

// async function quotes() {
//   try {
//     const response = await fetch("https://dummyjson.com/quotes/random")
//     const data = await response.json()
//     console.log(`${data.quote} - ${data.author}`);

//   } catch {
//     console.log("❌ Couldn't fetch a quote right now.");

//   }


// }
// quotes()

// 🔹 Challenge 4: Loading Indicator (Final One!)
// Task:
// Log "⏳ Loading..." before fetching.
// Then show the quote or a friendly failure message.
// So:
// Before fetch: log "⏳ Loading..."
// If success: log "✅ <quote> - <author>"
// If fail: log "❌ Couldn't load quote. Try again later."
// 🧠 This simulates real app behavior — loading > success or error.
// Let’s see your final run!

async function quotes() {
  try {
    console.log("Loading...");
    const response = await fetch("https://dummyjson.com/quotes/random")
    console.clear()
    const data = await response.json()
    console.log(`${data.quote} - ${data.author}`);
  } catch {
    console.log("❌ Couldn't load quote. Try again later.");

  }


}
quotes()