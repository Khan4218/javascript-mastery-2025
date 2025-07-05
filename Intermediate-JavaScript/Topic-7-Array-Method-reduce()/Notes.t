🧠 What is .reduce()?
.reduce() is used to boil down an array into a single value — like a sum, a product, a string, or even an object or another array.

📦 Basic Syntax
const result = array.reduce((accumulator, currentValue) => {
  // logic
  return updatedAccumulator
}, initialValue)
| Term           | Description                                                                 |
| -------------- | --------------------------------------------------------------------------- |
| `accumulator`  | Stores the result so far                                                    |
| `currentValue` | The current item in the array                                               |
| `initialValue` | (Optional) The starting value for `accumulator`. Commonly 0 or `[]` or `{}` |

🔢 Example 1: Sum of numbers

const numbers = [10, 20, 30]

const total = numbers.reduce((acc, num) => {
  return acc + num
}, 0)

console.log(total) // ➤ 60

🔍 Breakdown:
| Iteration | `acc` | `num` | Returned Value |
| --------- | ----- | ----- | -------------- |
| 1         | 0     | 10    | 10             |
| 2         | 10    | 20    | 30             |
| 3         | 30    | 30    | 60             |

🔄 Arrow Function Shortcut

const total = numbers.reduce((acc, num) => acc + num, 0)

✅ Real-world Use Cases
Sum of prices

Count frequency of items

Convert array into an object

Flatten nested arrays
