// 🔹 What is a Callback Function?
// A callback is a function passed as an argument to another function.

function logGreeting() {
  console.log("Hello Akbar!")
}

function greetUser(callback) {
  callback() // call the callback
}

greetUser(logGreeting) // 👉 "Hello Akbar!"

// 💡 The callback is not executed immediately — it’s "called back" later.

// ✅ Real World Analogy
function cook(food, callback) {
  console.log(`Cooking ${food}...`)
  callback()
}

cook("Biryani", function () {
  console.log("Biryani is ready! 🍽️")
})

// ✅ Arrow Function as Callback
const printName = name => {
  console.log(`Hello, ${name}`)
}

function welcome(callback) {
  callback("Akbar")
}

welcome(printName) // 👉 "Hello, Akbar"

//forEach recap 

const fruits = ["Apple", "banana", "Mango"]

fruits.forEach(function (fruits, index) {
  console.log(index, fruits);

})

//🔁 Challenge: Print All Names with Their Index
// You are given the following array:

const devs = ["Akbar", "Sarah", "Mike", "Lana"]

for (let i = 0; i < devs.length; i++) {
  console.log(devs[i]);

}
//using forEach
devs.forEach(function (name, index) {
  console.log(index, name);

})

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


//💡 Beginner Callback Challenge #1: Call Me Back!
// 🧠 Task:
// Create a function called doSomething that takes a callback function and calls it inside.

// Out put ====> I’m being called back!

const doSomething = (callBack) => {
  callBack()


}

const saySomething = () => {
  console.log("i am being called back!");

}

doSomething(saySomething)

//💡 Beginner Callback Challenge #2: Greeting Machine
// 🧠 Task:
// Write a function processName that takes a name and a callback. The callback should greet the name.
//output ==> Hello, Akbar!
function processName(name, callback) {
  callback(name) // 👈 Give the name to the callback
}

function greet(name) {
  console.log("Hello, " + name + "!")
}

processName("Akbar", greet)


//🧠 Your Turn (Again)
// Try writing both:

// A function doTask(cb) that logs "Running..." and then runs cb(), which logs "Task done!"

// A function displayGreeting(name, cb) that logs:

//output ====> Good Morning, Akbar!

const doTask = (cb) => {
  console.log("running");

  cb()

}

const Task = () => {
  console.log("Task done!");

}

doTask(Task)

// A function displayGreeting(name, cb) that logs:

//output ====> Good Morning, Akbar!

const displayGreeting = (name, callBack) => {
  callBack(name)
}

const greeting = (name) => {
  console.log("Godd Morning" + name + "!");

}

displayGreeting("Akbar", greeting)

//💻 Callback Mini Challenge: runTask
// 🧠 Goal:
// Write a function runTask(taskName, callback) that:

// Logs "Starting: taskName"

// Runs the callback to log task details

// Logs "Finished: taskName"
//output
// Starting: Cleaning Room
// 🧹 Sweeping and dusting...
// Finished: Cleaning Room


function runTask(taskName, callback) {
  console.log("starting: " + taskName);

  callback()

  console.log("Finished: " + taskName);

}

runTask("Cleaning Room", function () {
  console.log("🧹 Sweeping and dusting...")
})
