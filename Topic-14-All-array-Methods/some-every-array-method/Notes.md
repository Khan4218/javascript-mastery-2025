🔍 some() and every() – Explained
These two are great when you want to check conditions across elements in an array and get a true/false result.
🔹 some()
Purpose: Checks if at least one element satisfies the condition.

Returns: true or false

Syntax:
array.some(callback)
Example:
const nums = [3, 7, 9, 12];
const hasEven = nums.some(n => n % 2 === 0);
console.log(hasEven); // true

✅ Think of it as: “Does some of the array pass this test?”

🔹 every()
Purpose: Checks if all elements satisfy the condition.

Returns: true or false
Syntax:

array.every(callback)
Example:

const nums = [2, 4, 6, 8];
const allEven = nums.every(n => n % 2 === 0);
console.log(allEven); // true

✅ Think of it as: “Does every element pass the test?”

⚠️ Important Difference:

| Method    | Returns | True when...             |
| --------- | ------- | ------------------------ |
| `some()`  | Boolean | **At least one** is true |
| `every()` | Boolean | **All** must be true     |

























