🔸 Topic 2: import / export in Detail
📘 1. Explanation
JavaScript's import and export syntax allows you to share functions, variables, and classes between files. This is the foundation of modular programming in ES6+.
✅ Types of Export
🔹 1. Named Exports
You can export multiple values from a single file.
Must use the same name during import.
Example: math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
Importing:
import { add, subtract } from './math.js';
You can also export after declaration:
const divide = (a, b) => a / b;
export { divide };

🔹 2. Default Export
You can only have one default export per file.
You can import it with any name.
Example: math.js

const multiply = (a, b) => a * b;
export default multiply;
Importing:
import multiply from './math.js';

Even if the original name was multiply, you could do:
import m from './math.js'; // Still works

✅ Mixing Named and Default Exports
// greetings.js
export const sayHello = (name) => `Hello, ${name}`;
export default function sayBye(name) {
  return `Goodbye, ${name}`;
}
// main.js
import sayBye, { sayHello } from './greetings.js';

console.log(sayHello("Akbar")); // Hello, Akbar
console.log(sayBye("Akbar"));   // Goodbye, Akbar

✅ Renaming Imports (Aliasing)
You can rename imports using as:
import { add as addition } from './math.js';
console.log(addition(2, 3)); // 5

✅ Re-exporting from Other Modules
You can chain exports:
// utils.js
export * from './math.js';

✅ Summary Table
| Feature        | Syntax                                  |
| -------------- | --------------------------------------- |
| Named Export   | `export const x = 1;` or `export { x }` |
| Named Import   | `import { x } from './file.js'`         |
| Default Export | `export default x`                      |
| Default Import | `import x from './file.js'`             |
| Rename Import  | `import { x as y } from './file.js'`    |
| Re-export      | `export * from './file.js'`             |
