🔹 What is the Ternary Operator?
It’s a shorthand for if...else — used to assign values or perform actions based on a condition.

Syntax:
condition ? expressionIfTrue : expressionIfFalse

🔹 Basic Example:
const age = 18;
const status = age >= 18 ? "Adult" : "Minor";
console.log(status); // "Adult"
It’s especially useful for quick decisions in variable assignments, return statements, or inline rendering (like in React).

✅ When to Use Ternary?
You want a short and clean if-else.

You're doing conditional assignment or output.

Not ideal for multiple conditions or complex logic.

🧠 Imagine this:
You’re checking if someone is old enough to vote:

✅ With if...else:
let age = 20;
let result;

if (age >= 18) {
  result = "Eligible";
} else {
  result = "Not eligible";
}

console.log(result); // "Eligible"

✅ With a Ternary Operator (shorthand):
let age = 20;
let result = age >= 18 ? "Eligible" : "Not eligible";

console.log(result); // "Eligible"

📊 VISUAL: How Ternary Works

| Expression    | Result if True | Result if False  |
| ------------- | -------------- | ---------------- |
| `age >= 18 ?` | `"Eligible"`   | `"Not eligible"` |

🔄 Another example:

let score = 85;

let grade = score >= 90
  ? "A"
  : score >= 75
    ? "B"
    : "C";

console.log(grade); // "B"
let score = 85;

let grade = score >= 90
  ? "A"
  : score >= 75
    ? "B"
    : "C";

console.log(grade); // "B"
✅ This is called a nested ternary (should be used carefully).



















































