🔸 Topic 5: Debouncing & Throttling
🧠 Why Do We Need These?
When users interact with your app (like typing, resizing the window, or scrolling), events can fire dozens or hundreds of times per second.
This can overwhelm your app, cause lag, and waste performance.
That’s where debounce and throttle come in.

⚙️ Debouncing
"Wait until the user stops doing something before reacting."

🔁 How it works:
You delay the function execution.
If the user triggers the event again before the delay ends, the timer resets.
The function only runs once after a pause.

📦 Example use cases:
Search box input
Auto-save while typing
Window resize events

⚙️ Throttling
"Run the function at regular intervals, ignoring extra triggers in between."

🔁 How it works:
You run the function immediately (or after a delay).
Then ignore further triggers until a wait time has passed.
Useful for limiting how often a function runs.

📦 Example use cases:
Scroll tracking
Button click spam prevention
API calls every X ms

🔍 Key Difference:

| Debounce                     | Throttle                          |
| ---------------------------- | --------------------------------- |
| Delays execution             | Executes at intervals             |
| Resets timer on each trigger | Ignores triggers during wait time |
| Best for "after user stops"  | Best for "limit frequency"        |

⚙️ 1. Debouncing
💻 Syntax:
function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer); // cancel previous timer
    timer = setTimeout(() => {
      func.apply(this, args); // call after delay
    }, delay);
  };
}
⚙️ 2. Throttling
💻 Syntax:
function throttle(func, limit) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}
