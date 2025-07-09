// 🔹 Challenge 1: Delayed Hello
// Create a Promise that resolves after 2 seconds with the message:

// "Hello, Akber"
// ✅ Expected Output: Hello, Akber

const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Hello, Akber")
  }, 2000)
}).then(res => console.log(res))

//so here we are using promise to log hello akber after 2 sec
//to delay we use setTimeout 2000 for 2 sec
//we use .then to log message after 2 sec
//here i think .then is a callback func

// 🔹 Challenge 2: Validate Input with Promise
// Create a function called checkInput that:
// Takes one parameter: input
// Returns a Promise
// If input is truthy (non-empty), it resolves with "Valid input: [value]"
// If input is falsy (like "", null, undefined), it rejects with "No input provided"

const checkInput = (input) => {
  return new Promise((resolve, reject) => {
    if (input) {
      resolve(`Valid input: ${input}`)
    } else {
      reject(`No input provided`)
    }
  })
}
checkInput(true).then(res => console.log(res)).catch(err => console.log(err))
//Code explanation
//what i did here is i created a func checkInput i will take a parameter input
//i created a new Promise which will take 2 param resolve or reject  if true resolve will work if false reject will work
//while calling the func i will pass a argument which will be the param input
//the i used if else condition if input or which we pass as a argument when calling the func
//if input is true .then to log the message if false we use catch to catch the error

// 🔹 Challenge 3: Chain .then() Steps

// ✅ Task:
// Create a Promise that resolves with a number (start with 5)
// Chain 3 .then() calls:
// First .then: multiply by 2
// Second .then: add 10
// Third .then: log the final resul
// 🎯 Expected Output: 20

new Promise((resolve) => {
  resolve(5)

}).then(first => { return first * 2 }).then(sec => { return sec + 10 }).then(third => console.log(third))

//code explanation
//created a promise with a param resolve
//resolve starts with initial 5
//used .then chain if resolve is truthy then the 3 .then chains will get executed
//at first .then the result is shifted to sec and sec to third params great use of a callback func

// 🔹 Challenge 4: Fake API Request (Random Outcome)
// ✅ Task:
// Create a function called fakeAPI() that:
// Returns a Promise
// After 2 seconds, it:
// ✅ Resolves with "Data fetched successfully" 50% of the time
// ❌ Rejects with "API error" the other 50%
// Use Math.random() to randomly decide whether it should succeed or fail

const fakeAPI = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNum = Math.random()
      console.log(randomNum);
      randomNum < 0.5 ? resolve("Data fetched successfully") : reject("API error")
    }, 2000)
  })
}
fakeAPI().then(res => console.log(res)).catch(err => console.log(err))
//code Explanation
//created a func fakeApi which returns a promise
//used Math.random to get a random num between o and 1 used a ternery to decide what should be logged
//use setTimeout to delay the func for 2 sec till that time we get the Api
//once we get the Api used .then and .catch to log resolve and reject 

// 🔹 Challenge 5: delay(ms) Utility Function
// ✅ Task:
// Create a function called delay(ms) that:
// Returns a Promise
// Resolves after ms milliseconds (using setTimeout)
// When resolved, logs "Waited X ms" (use the actual ms value passed

const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Waited ${ms * 0.001} seconds`)
    }, ms)
  })
}

delay(2000).then(res => console.log(res))

//code Explanation
//created a func delay passing a param ms and returns a promise
//inside the promise using a setTimeout to delay the promise for ms passed in argument wehn calling the fun
//instead of hardcoding seconds in set Timeout func i used the param passed in fun
//to get the ms in sec i multiplied it with 0.001 and displayed in sec 




