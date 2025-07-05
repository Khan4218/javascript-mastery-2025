// 🔧 Mini Coding Challenge: HOF Practice
// 💡 Task:
// Create a function transformWord(word, fn) that:

// Takes a word and a function as arguments

// Logs the result of calling fn(word) //output ===> hello-world

const transformWord = (word, fn) => {
  return console.log(fn(word))

}

transformWord("Hello World", text => text.toUpperCase().split(" ").join("_")) //with arrow func
// function toDashCase(text) {
//   return text.toUpperCase().split(" ").join("_")
// } //without arrow func

// 💪 Callback & HOF Mini Challenges
// 🧩 Challenge 1: Welcome Machine
// Create a runWelcome(callback) function that logs "Welcome!", and then runs the callback.

//outPut =>>>>> Welcome!
// Have a great day!

function runWelcome(msge, callBack) {
  console.log(msge);
  callBack();
}


runWelcome("Welcome!", () => console.log("Have a great day!"))

// 🧩 Challenge 2: Math Handler
// Write a calculate(a, b, operation) function.
// You can pass in different math functions like add or multiply as the operation.
//example 
// calculate(3, 4, add) // ➤ 7
// calculate(5, 2, multiply) // ➤ 10

function calculate(a, b, operation) {
  console.log(operation(a, b))

}

const add = (x, y) => x + y
const multiply = (x, y) => x * y

calculate(3, 5, add)
calculate(9, 6, multiply)

