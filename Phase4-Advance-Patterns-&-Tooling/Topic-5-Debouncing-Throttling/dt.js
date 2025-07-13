// 💻 Challenges – Debouncing & Throttling
// 🔹 Challenge 1: Debounced Search
// Create a function that simulates calling an API for a search feature.
// Use a debounce wrapper that delays the function call by 500ms.
// If the function is called again before 500ms, reset the timer.
// Log: "Searching for [term]" when the function finally runs.
// 🧠 Tip: You can simulate typing with multiple debouncedSearch("...") calls in quick succession.
// function debounce(func, delay) {
//   let timer;
//   return function (...args) {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       func.apply(this, args)
//     }, delay)
//   }


// }
// function search(term) {
//   console.log("Searching For:", term);


// }

// const debounceSearch = debounce(search, 500)
// debounceSearch("A")
// debounceSearch("Ab")
// debounceSearch("Abc")

// I created a debounce() function that takes a real function (like search) and a delay in ms. Inside it, I use a timer variable that stays in closure.
// Every time the debounced function is called, it clears any previous timer and starts a new setTimeout(). This way, the actual function (search) only runs once — after the user stops typing for 500ms.
// I wrapped my search() function using debounce(search, 500) to delay its execution.

// 💻 Challenge 2: Throttled Scroll Logger
// 🔹 Objective:
// Simulate a situation where a scroll handler is firing rapidly, and you want to limit it using throttling.
// ✅ Requirements:
// Create a function (e.g. logScroll) that logs something like:
// "Scroll event fired at [timestamp]"
// Use a custom throttle() function that:
// Accepts a function and a limit (in milliseconds)
// Ensures the passed function is only allowed to run once per limit
// Simulate multiple scroll events (like calling the function in a loop or using setInterval

// function throttling(func, limit) {
//   let lastCall = 0;
//   let count = 0;
//   return function (...args) {
//     const now = Date.now()
//     if (now - lastCall >= limit) {
//       func.apply(this, args)
//       lastCall = now
//       count++
//       if (count > 5) {
//         clearInterval(intervalId)
//       }

//     }

//   }
// }

// function timeStamp(time) {
//   console.log("Scroll Event Fired At:", time);

// }
// const funcThrottling = throttling(timeStamp, 2000)
// funcThrottling(Date.now())

// const intervalId = setInterval(() => {
//   funcThrottling(new Date().toLocaleTimeString())
// }, 100)

// 💻 Challenge 3: Button Spam Blocker (Throttling in UI)
// 🧠 Scenario:
// You have a button like “Submit” or “Like” — and users are clicking it too fast (spam clicking it). You want to throttle the clicks so that:
// ✅ Only 1 click is allowed every 2 seconds
// ❌ All rapid clicks in between are ignored
// ✅ You can still click again after 2 seconds
// 🔧 Requirements:
// Create a throttle() function (you already have it!)
// Create a handleClick() function that logs:
// "Button clicked at HH:MM:SS"
// Throttle handleClick to only allow 1 call every 2 seconds.
// Bind it to a real or simulated button click (in JS).

function throttling(func, limit) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now()
    if (now - lastCall >= limit) {
      func.apply(this, args)
      lastCall = now

    }

  }
}

const handleClick = () => {
  console.log("Button Clicked At:", new Date().toLocaleString());

}

const funcThrottling = throttling(handleClick, 2000)

const btnEl = document.getElementById("click-btn")
btnEl.addEventListener("click", funcThrottling)







