🔸 Topic 4: IIFE (Immediately Invoked Function Expressions)
📘 1. Explanation
✅ What is an IIFE?
An IIFE is a function that:
Is defined and immediately executed.
Has its own private scope.
Is often used to avoid polluting the global scope.
💡 Syntax:
(function () {
  // code here runs immediately
})();
or with arrow functions:
(() => {
  // code here runs immediately
})();

🔐 Why Use IIFE?
| Use Case          | Description                                              |
| ----------------- | -------------------------------------------------------- |
| ✅ Scope isolation | Avoids putting variables in global scope                 |
| ✅ Run-once logic  | Useful for setup code, configuration, bootstrapping      |
| ✅ Data privacy    | Keeps internal variables inaccessible from outside       |
| ✅ Module pattern  | Was commonly used before `import/export` modules existed |

🔄 Behind the Scenes
(function greet() {
  const name = "Akbar";
  console.log(`Hello, ${name}`);
})();
✅ Immediately runs
✅ name is not accessible outside
✅ This is a closure too — but self-contained
⚠️ Common Mistake:
function() {}(); // ❌ SyntaxError
Functions must be wrapped in parentheses to be treated as an expression.