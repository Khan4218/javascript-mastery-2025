✅ Topic 4: Higher-Order Functions (HOFs)
🚀 What Is a Higher-Order Function?
A Higher-Order Function (HOF) is a function that either:

✅ Takes another function as an argument, or

✅ Returns a function

🔹 Basic Example (Takes a Function):

function greetUser(name, formatter) {
  return formatter(name)
}

function toUpper(text) {
  return text.toUpperCase()
}

console.log(greetUser("akbar", toUpper)) // Output: AKBAR

🔹 Real Example (Array + HOF):

const names = ["Akbar", "Sarah", "Mike"]

names.forEach(function(name) {
  console.log("Hello, " + name)
})

🧠 forEach() is a Higher-Order Function because it accepts a function as an argument!

🔍 Difference Between Higher-Order Function vs Callback Function
| Concept                         | Description                                                                                                                       |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| **Higher-Order Function (HOF)** | A function that **receives another function** as a parameter or **returns another function**. It's the one **in control**.        |
| **Callback Function**           | A function that is **passed into another function** (usually the HOF) to be **executed later**. It’s the **guest** or **worker**. |

📦 Think of It Like:

🔧 HOF = The toolbox

🪛 Callback = The tool you put inside the toolbox


// Higher-Order Function
function greetUser(callback) {
  // Callback is called inside
  callback("Akbar")
}

// Callback Function
function sayHello(name) {
  console.log("Hello, " + name)
}

// Passing sayHello as a callback
greetUser(sayHello)
//output Hello, Akbar

🧠 Summary:

| Term     | Role                                                           |
| -------- | -------------------------------------------------------------- |
| HOF      | The **function that uses** another function (e.g. `greetUser`) |
| Callback | The **function that is passed** in (e.g. `sayHello`)           |

Both are core to JavaScript — but the HOF uses the callback.

✅ Quiz: 3 Quick Questions (Answer in A/B/C)
🧠 Q1:
What makes a function a Higher-Order Function?

A. It returns a string
B. It calls itself
C. It takes another function as an argument or returns one

🧠 Q2:
In the code below, which one is the callback function?

js
Copy
Edit
function doTask(fn) {
  fn()
}

function logDone() {
  console.log("Task complete!")
}

doTask(logDone)
A. doTask
B. logDone
C. fn

🧠 Q3:
Which statement is true?

A. Callbacks are a type of HOF
B. HOFs are passed into callbacks
C. HOFs use callback functions internally

//My answers
1. c
2.C logDone is passes as an argument and  doTask is recieving it as a param and calling it n the body fn()
3.C

| Question | Your Answer                         | Correct ✅ | Explanation                                                   |
| -------- | ----------------------------------- | --------- | ------------------------------------------------------------- |
| Q1       | C                                   | ✅         | A Higher-Order Function takes or returns another function     |
| Q2       | C *(and your reasoning is perfect)* | ✅         | `logDone` is the callback; `fn` is the parameter receiving it |
| Q3       | C                                   | ✅         | HOFs **use** callback functions internally                    |
