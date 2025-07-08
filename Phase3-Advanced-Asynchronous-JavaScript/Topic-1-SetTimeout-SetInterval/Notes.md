🔸 Lesson 1: setTimeout & setInterval
🕒 What is Asynchronous Code?
JavaScript runs top to bottom, but sometimes you want to:

Delay something (like show a message after 3 seconds)

Repeat something (like a ticking clock)
That's where setTimeout() and setInterval() come in.

🔹 1. setTimeout()
Runs a function once after a delay (in milliseconds)

setTimeout(() => {
  console.log("⏳ This runs after 2 seconds");
}, 2000);

🔹 2. setInterval()
Runs a function repeatedly every X milliseconds

setInterval(() => {
  console.log("⏲️ Tick Tock every 1 second");
}, 1000);

⚠️ Notes:
The delay is not blocking → JS keeps executing the rest of the code

You can clear timers:

const id = setInterval(...);
clearInterval(id);


🔸 Deep Dive: setTimeout() and setInterval()
1. setTimeout(fn, delay)
Runs a function once after a delay (in ms)
setTimeout(() => {
  console.log("Ran after 2 seconds");
}, 2000);

🧠 Key Concepts
✅ setTimeout() is non-blocking
console.log("start");
setTimeout(() => console.log("timeout"), 0);
console.log("end");

🧠 Even with 0ms, it runs after all synchronous code:
start
end
timeout

✅ You can cancel it using clearTimeout(id)
const id = setTimeout(() => {
  console.log("This won't run");
}, 1000);

clearTimeout(id);

2. setInterval(fn, delay)
Runs a function repeatedly every delay ms.
const intervalId = setInterval(() => {
  console.log("Ping");
}, 1000);
🛑 Cancel with:
clearInterval(intervalId);

⚠️ Common Pitfalls
1. setTimeout inside loops
for (var i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Output after 1s: 4 4 4 (not 1 2 3)
✅ Fix with let (block scope):
for (let i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 1000);
}

2. Recursive setTimeout vs setInterval
They seem similar but behave differently:
// setInterval
setInterval(() => {
  console.log("tick");
}, 1000);

// Recursive setTimeout
function repeat() {
  console.log("tick");
  setTimeout(repeat, 1000);
}
repeat();

🧠 Recursive setTimeout is more precise for long tasks
(setInterval may skip/overlap if a task takes too long)

3. Real Use-Cases
| Use-Case                      | Use Which?                                            | Why                      |
| ----------------------------- | ----------------------------------------------------- | ------------------------ |
| Delay a UI element            | `setTimeout()`                                        | One-time delay           |
| Auto-save every 5 seconds     | `setInterval()`                                       | Repeating regularly      |
| Polling a server every 10 sec | `setInterval()` or `setTimeout(recursive)`            | Based on accuracy needed |
| Stop after 3 attempts         | `setInterval()` + counter or recursive `setTimeout()` | Controlled stopping      |
