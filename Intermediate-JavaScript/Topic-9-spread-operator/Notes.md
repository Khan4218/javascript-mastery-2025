🔹 Topic: Spread Operator (...)
The spread operator (...) is a powerful feature in JavaScript used to:

Expand arrays/objects into individual elements

Copy arrays or objects

Merge arrays or objects

Pass multiple arguments to functions

🔧 Syntax
const nums = [1, 2, 3];
console.log(...nums);  // Output: 1 2 3

✅ Common Uses:
1. Copy an array (shallow copy)
const original = [1, 2, 3];
const copy = [...original];

console.log(copy); // [1, 2, 3]

2. Merge arrays
const a = [1, 2];
const b = [3, 4];
const merged = [...a, ...b];

console.log(merged); // [1, 2, 3, 4]

3. Add new elements to an array
const base = [2, 3];
const full = [1, ...base, 4];

console.log(full); // [1, 2, 3, 4]

4. Copy or extend objects
const user = { name: "Akbar", age: 22 };
const updatedUser = { ...user, age: 23, city: "Delhi" };

console.log(updatedUser); 
// { name: 'Akbar', age: 23, city: 'Delhi' }

5. Convert strings to arrays
const word = "hello";
const letters = [...word];

console.log(letters); // ['h', 'e', 'l', 'l', 'o']

⚠️ Note:
Spread does shallow copy, not deep copy.

Only works with iterables like arrays, strings, and objects.

🔍 Shallow Copy vs Deep Copy
🧪 Shallow Copy
A shallow copy copies only the top-level of an object or array.
If the object has nested objects/arrays, the nested references are still shared.
const original = {
  name: "Akbar",
  scores: [90, 85]
};

const copy = { ...original }; // shallow copy

copy.name = "Liam";             // ✅ affects only copy
copy.scores[0] = 100;           // ⚠️ affects original too!

console.log(original.scores);  // [100, 85]
⚠️ scores array was copied by reference, not by value.

🧬 Deep Copy
A deep copy creates a completely new clone, including all nested objects or arrays.
Changes in the copy won't affect the original at any level.

Example using structuredClone() (modern way):
const original = {
  name: "Akbar",
  scores: [90, 85]
};

const deepCopy = structuredClone(original); // ✅ deep copy

deepCopy.scores[0] = 100;

console.log(original.scores); // [90, 85]

✅ Summary Table
| Feature          | Shallow Copy                 | Deep Copy                                  |
| ---------------- | ---------------------------- | ------------------------------------------ |
| Top-level copy   | ✅                            | ✅                                          |
| Nested copy      | ❌ (references shared)        | ✅ (fully independent)                      |
| Methods          | `...spread`, `Object.assign` | `structuredClone`, libraries like `lodash` |
| Safe for nested? | ❌                            | ✅                                          |

