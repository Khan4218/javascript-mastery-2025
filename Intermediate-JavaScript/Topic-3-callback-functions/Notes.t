//callBack function Quiz

// 🧠 Callback Quiz (5 Questions)
// ✅ Q1: What is a callback function in JavaScript?
// A) A function that returns another function
// B) A function that is immediately invoked
// C) A function passed as an argument to another function
// D) A built-in JavaScript method

// ✅ Q2: What will this code log?
// js
// Copy
// Edit
// function sayHello(name) {
//   console.log("Hello, " + name)
// }

// function greetUser(callback) {
//   callback("Akbar")
// }

// greetUser(sayHello)
// A) Hello, undefined
// B) Hello, Akbar
// C) sayHello is not a function
// D) No output

// ✅ Q3: Which of these uses a callback?
// A) Math.random()
// B) console.log("Hi")
// C) setTimeout(() => console.log("Waited!"), 1000)
// D) let x = 5 + 3

// ✅ Q4: Can arrow functions be used as callbacks?
// A) No
// B) Yes
// C) Only inside loops
// D) Only inside objects

// ✅ Q5: What is the benefit of using a callback?
// A) Makes code slower
// B) Allows async or delayed execution
// C) Avoids writing functions
// D) Converts functions into strings

//My Answers
// 1. C //A function that is passed as an argument to another function
// 2.Hello Akbar // because we are passing the sayHello function as an agrument to greetUser it takes  also takes name as a param now
// 3.C. setTimeout is using a callback arrow function
// 4.B. Yes
// 5.B. Allowys async and delayed execution because we can call them later

//🔥 Boom! Akbar, you're on fire! Here's your Callback Quiz Score:

// | Question | Your Answer   | Correct? | Explanation                                                    |
// | -------- | ------------- | -------- | -------------------------------------------------------------- |
// | Q1       | C             | ✅ Yes    | Callback = function passed as an argument.                     |
// | Q2       | "Hello Akbar" | ✅ Yes    | Perfect breakdown! Callback invoked with `"Akbar"`.            |
// | Q3       | C             | ✅ Yes    | `setTimeout` uses a callback to delay execution.               |
// | Q4       | B             | ✅ Yes    | Arrow functions **can** be used as callbacks.                  |
// | Q5       | B             | ✅ Yes    | Callbacks enable **async behavior** and **non-blocking code**. |

🧠 What is a Callback?
A callback is a function passed as an argument to another function to be executed later.
function greet(name, callback) {
  callback(name)
}

function sayHello(name) {
  console.log("Hello, " + name)
}

greet("Akbar", sayHello)


🔧 Why Use Callbacks?
🔁 Reuse logic

🎯 Customize behavior

🕐 Handle tasks after something finishes (like user clicks, data loads)

💻 Real Examples Recap


✅ 1. Basic Callback

function run(callback) {
  callback()
}

run(() => console.log("I’m a callback!"))


✅ 2. DOM Example

btn.addEventListener("click", () => {
  console.log("Clicked!")
})

✅ 3. Custom Task Callback

function runTask(taskName, callback) {
  console.log("Starting: " + taskName)
  callback()
  console.log("Finished: " + taskName)
}

runTask("Cleaning Room", function () {
  console.log("🧹 Sweeping and dusting...")
})

🧪 Challenges You Solved

✅ Beginner 1: Call Me Back

function doSomething(cb) {
  cb()
}
function saySomething() {
  console.log("I’m being called back!")
}
doSomething(saySomething)

✅ Beginner 2: Greeting Machine

function processName(name, callback) {
  callback(name)
}
function greet(name) {
  console.log("Hello, " + name + "!")
}
processName("Akbar", greet)

✅ Real-World Mini Project: runTask

function runTask(taskName, callback) {
  console.log("starting: " + taskName)
  callback()
  console.log("Finished: " + taskName)
}
runTask("Cleaning Room", function () {
  console.log("🧹 Sweeping and dusting...")
})