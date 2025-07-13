🧠 What Is Memoization?
Memoization is an optimization technique used to cache the results of expensive function calls, so that future calls with the same arguments return the result instantly from memory, without redoing the work.

📦 Real-World Analogy
Imagine you ask someone:
“What's 12 × 12?”
They calculate and say: “144”.
Now if you ask again, they remember and say:
“Already told you: 144!”
That’s memoization — no re-calculation, just a stored answer.

✅ Why Use It?
Avoids redundant calculations
Speeds up apps with repeated function calls
Super useful in recursion (e.g., Fibonacci, factorial)
Used internally by frameworks (like React memo, lodash.memoize)

⚙️ Syntax: Simple Memoization Wrapper
function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    }
    const result = fn.apply(this, args);
    cache[key] = result;
    return result;
  };
}

📚 You Now Know:
✅ Definition & purpose
✅ Analogy
✅ Where it's used
✅ Basic syntax of a memoizer