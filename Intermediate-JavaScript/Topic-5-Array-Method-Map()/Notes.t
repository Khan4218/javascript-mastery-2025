🔹 Array.prototype.map() – Mastering map() in JavaScript
✅ What is map()?
map() is an array method that transforms each element in an array and returns a new array with the transformed values.

const newArray = originalArray.map((element, index, array) => {
  // return something to build newArray
})

element → Current element

index → Index of current element

array → The entire original array (rarely used)

Returns → A new array with the same length, but with transformed values.

🔁 Example:
const nums = [1, 2, 3, 4]

const doubled = nums.map(num => num * 2)

console.log(doubled) // ➤ [2, 4, 6, 8]

⚠️ Important:
map() does not modify the original array.

Always returns a new array

Great for transforming data in a clean, readable way

🧠 Key Differences Between map() vs forEach():

| Feature       | `map()`           | `forEach()`               |
| ------------- | ----------------- | ------------------------- |
| Returns value | ✅ Yes → New Array | ❌ No                      |
| Use case      | ✅ Transform data  | ✅ Just run logic per item |
| Chainable     | ✅ Yes             | ❌ No                      |

🔁 Recap on .map():
Takes a callback function

Returns a new array

Great for transforming data

Does not mutate the original array

📘 Advanced .map() Mastery Guide

✅ 1. What .map() really does
It creates a new array by calling a callback function on each element of the original array.

It does not mutate the original array.

const arr = [1, 2, 3];
const doubled = arr.map(x => x * 2);
console.log(doubled); // [2, 4, 6]

✅ 2. Syntax with full parameters

array.map((element, index, array) => {
  // use element, index, array here
});
Example:

const names = ["Akbar", "John", "Sarah"];

const tagged = names.map((name, i) => `${i + 1}. ${name}`);
console.log(tagged); // ["1. Akbar", "2. John", "3. Sarah"]

✅ 3. Returning Objects

const nums = [1, 2, 3];

const wrapped = nums.map(n => ({ num: n }));
console.log(wrapped); // [{num: 1}, {num: 2}, {num: 3}]
🧠 Use () around {} when returning an object directly in arrow functions!

✅ 4. Real-World Case: Format Usernames

const users = ["akbar", "sarah", "john"];

const capitalized = users.map(name => name[0].toUpperCase() + name.slice(1));
console.log(capitalized); // ["Akbar", "Sarah", "John"]

✅ 5. map() vs forEach()

Feature	.map()	.forEach()
Returns value	✅ New array	❌ undefined
Chainable	✅ Yes	❌ No
Purpose	Transform data	Just iterate/do side effects

✅ 6. Chaining map()

const nums = [1, 2, 3];

const chained = nums
  .map(x => x * 2)
  .map(x => x + 1);  // [3, 5, 7]

✅ 7. map() inside objects / data structures

const users = [
  { name: "Akbar", age: 22 },
  { name: "Sarah", age: 25 }
];

const namesOnly = users.map(user => user.name);
console.log(namesOnly); // ["Akbar", "Sarah"]


📘 .map() Overview — Recap in Rows & Columns Format

| 🧠 Concept                     | ✅ Explanation                                                           | 💡 Example                                   |
| ------------------------------ | ----------------------------------------------------------------------- | -------------------------------------------- |
| **Basic Syntax**               | `.map()` creates a new array by transforming each element.              | `nums.map(n => n * 2)`                       |
| **Returns a New Array**        | Does **not** modify original array — returns a transformed copy.        | `const newArr = oldArr.map(...)`             |
| **Callback Function**          | `.map()` takes a function as an argument (callback).                    | `arr.map(item => ...)`                       |
| **Receives 3 Parameters**      | `(item, index, array)`                                                  | `arr.map((item, idx, arr) => ...)`           |
| **Returning Objects**          | Return object using `({ ... })`                                         | `arr.map(name => ({ name, role: "dev" }))`   |
| **Chaining `.map()`**          | You can use multiple `.map()` calls in a chain.                         | `arr.map(x => x*2).map(x => "Score: " + x)`  |
| **Use with Template Strings**  | Easily build formatted strings.                                         | ``arr.map(n => `Score: ${n}`)``              |
| **2D Arrays (Rows × Columns)** | Nest `.map()` inside `.map()` to transform grids.                       | `grid.map(row => row.map(col => col + "✅"))` |
| **Practical Use Cases**        | Rendering HTML, transforming API data, adding emoji, formatting prices. | `products.map(p => "$" + p.toFixed(2))`      |

✅ Your Quiz Results
| Q# | Your Answer | Correct? | Explanation                                                                                |
| -- | ----------- | -------- | ------------------------------------------------------------------------------------------ |
| 1  | B           | ✅        | `.map()` returns a new array with each value doubled.                                      |
| 2  | B           | ✅        | Index is `0,1,2`; result is `["0a", "1b", "2c"]`.                                          |
| 3  | A           | ✅        | You **must wrap object in `()`** when returning implicitly in arrow functions.             |
| 4  | B           | ✅        | Only `.map()` returns a new array, `.forEach()` does not.                                  |
| 5  | B           | ✅        | Doubled values → `4, 6`, then prefixed with `Num:`.                                        |
| 6  | A           | ✅        | Template strings work as expected.                                                         |
| 7  | B           | ❌        | You answered **C**, but correct is **B**: Nested `.map()` modifies 2D array properly.      |
| 8  | C           | ✅        | You said **B**, but correct is **C**. Without `return`, each callback returns `undefined`. |
| 9  | A           | ✅        | Capitalization logic is correct.                                                           |
| 10 | B           | ✅        | Prefix emoji using string concat: `["👋 Mike", "👋 Lana"]`.                                |
