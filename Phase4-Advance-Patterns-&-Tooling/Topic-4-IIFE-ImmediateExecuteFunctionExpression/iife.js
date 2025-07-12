// 💻 IIFE Challenges – JavaScript

// 🔹 Challenge 1: One-Time Setup
// Create an IIFE that runs once and logs:
// "App initialized"

// It should not define any variables in the global scope.
(function () {
  const appStatus = "App initialized"
  console.log(appStatus);

}())

// 🔹 Challenge 2: Private Counter with IIFE
// Use an IIFE to create a counter with a private count variable.
// It should return an object with:
// increment() – increases the count by 1
// get() – returns the current count

const counter = (function () {
  let count = 0
  return {
    increaseCount: () => {
      return count++
    },

    getCount: () => {
      return count
    }

  }

}())

console.log(counter.increaseCount());
console.log(counter.getCount());



// //   🔹 Challenge 3: Only Run Once
// // Create an IIFE that returns a function.
// // The returned function should log "This runs only once" the first time it's called.
// // On subsequent calls, it should do nothing.

const runFunc = (function () {
  let hasRun = false;
  return function runOnce() {
    if (!hasRun) {
      console.log("This runs only once");
      hasRun = true;

    }

  }


}())

runFunc()
runFunc()
runFunc()
