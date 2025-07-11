🔹 Topic 1: JavaScript Modules (ESM)
📘 1. Explanation
✅ What are JavaScript Modules?
JavaScript Modules (ESM) allow you to split your code into separate files, making it more organized, reusable, and maintainable. Each module has its own scope, which avoids polluting the global namespace.

✅ Key Concepts
Module: A JavaScript file treated as a separate scope.
import: Used to bring code into a module.
export: Used to send code out from a module.
Modules are only loaded once, and they are cached.

✅ ESM vs CommonJS
| Feature       | ESM (`import/export`)     | CommonJS (`require/module.exports`) |
| ------------- | ------------------------- | ----------------------------------- |
| Syntax        | `import`, `export`        | `require`, `module.exports`         |
| When Used     | Modern frontend + backend | Mostly Node.js (older style)        |
| Async Support | Native                    | Needs workarounds                   |
| Tree-shaking  | ✅ Supported               | ❌ Not supported                     |

✅ Example: Named & Default Exports
👉 math.js (module)
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;
export default multiply;
👉 main.js
import multiply, { add, subtract } from './math.js';

console.log(add(2, 3));       // 5
console.log(subtract(5, 2));  // 3
console.log(multiply(4, 5));  // 20

✅ How to Use ESM in Projects
In browser, use:
<script type="module" src="main.js"></script>
In Node.js, add this to package.json:
"type": "module"

✅ Refined Summary (Based on What You Wrote)
✅ We use JavaScript Modules to make our code clean, manageable, and modular—like breaking large problems into smaller reusable pieces.
✅ In the browser, we need to add type="module" to the 
<script> tag to enable ES module
syntax:html
<script type="module" src="main.js"></script>
✅ Just like components in React, we can create separate files for logic or utilities (e.g., greetings.js, math.js, etc.).
✅ To make a function available to other files, we export it using:
export function greet(name) { ... }
✅ In the main file (like main.js), we import the function using:
import { greet } from './greetings.js';
✅ We can also organize related functions in a utils/ folder for better structure.
✅ There are two types of exports:

Naed export: Use { functionName } when importing.
Default export: Import without braces, e.g., import greet from './file.js';.
✅ When calling a function, we pass arguments, and they are received inside the function as parameters
