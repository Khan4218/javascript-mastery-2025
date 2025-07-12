🔸 Topic 3: Closures
📘 1. Explanation
✅ What is a Closure?
A closure is created when:

A function remembers and accesses variables from outside its scope, even after the outer function has finished executing.

In simple terms:

Functions “remember” the environment in which they were created.

✅ Key Characteristics
A closure allows an inner function to continue accessing variables from its outer (enclosing) function, even after the outer function is done running.
It forms a private scope, so variables aren’t accessible from outside directly.

✅ Real-world Uses of Closures
Data privacy / Encapsulation
Hide internal variables from external access.
Function factories
Create multiple functions with pre-configured behavior.
Memoization / Caching
Store previously computed results.
Event handlers
Preserve context when passing functions around.

✅ Visual Breakdown
function outer() {
  let counter = 0;

  return function inner() {
    counter++;
    return counter;
  };
}

const count = outer(); // outer() runs and returns inner()
console.log(count());  // 1
console.log(count());  // 2
Even though outer() is finished, the inner() function remembers counter — this is a closure.

✅ Key Rule
If a function accesses variables from its parent scope, it is a closure.
Closures keep their lexical scope alive as long as the returned inner function is referenced.