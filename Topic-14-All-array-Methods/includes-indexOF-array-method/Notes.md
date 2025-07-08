🔎 includes() and indexOf() – Explained
These two work best when you're dealing with primitive values (like strings, numbers, booleans) — not objects.

🔹 includes()
Purpose: Checks if an array contains a specific value.

Returns: true or false

Syntax:

array.includes(valueToFind)

Example:

const fruits = ["apple", "banana", "orange"];
console.log(fruits.includes("banana")); // true
console.log(fruits.includes("mango"));  // false

🔁 Optional second argument: starting index

fruits.includes("apple", 1); // false

🔹 indexOf()
Purpose: Returns the first index of a value in the array. If not found, returns -1.

Syntax:
array.indexOf(valueToFind)
Example:
const nums = [10, 20, 30, 20];
console.log(nums.indexOf(20)); // 1
console.log(nums.indexOf(40)); // -1

🔁 Also supports a second argument: starting index
nums.indexOf(20, 2); // 3

✅ Summary Table:

| Method       | Returns       | Use when...                              |
| ------------ | ------------- | ---------------------------------------- |
| `includes()` | `true/false`  | You want to **check existence**          |
| `indexOf()`  | index or `-1` | You want to **find where it is located** |



















