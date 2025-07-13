// 💻 Challenge 1: Memoized Fibonacci
// 🧠 Objective:
// Create a memoized version of the Fibonacci function using a closure or memoize utility.
// 🧪 Requirements:
// The function should return the n-th number in the Fibonacci sequence.
// Use memoization to avoid redundant recursive calls.
// Print:
// The result of fib(10) → Should be 55
// Verify memoization by observing speed improvement (optional: count function calls)
// 📝 Expected Output:
// js
// Copy cod
// fib(10) // 5

function memoized(fn) {
  let cache = {};
  return function (...args) {
    let key = JSON.stringify(args)
    if (cache[key]) {
      return cache[key]
    }
    const result = fn.apply(this, args)
    cache[key] = result
    return result
  }
}

function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

const memo = memoized(fib)

console.log(memo(19));
console.log(memo(30));

