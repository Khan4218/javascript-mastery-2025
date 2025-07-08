🔁 Iteration & Transformation
| Method      | Purpose                                          |
| ----------- | ------------------------------------------------ |
| `forEach()` | Executes a function for each element (no return) |
| `map()`     | Transforms each element → new array              |
| `filter()`  | Filters elements based on condition              |
| `reduce()`  | Reduces array to a single value                  |
| `flat()`    | Flattens nested arrays                           |
| `flatMap()` | Like map + flat (1 level deep)                   |

🔍 Search / Find / Check
| Method          | Purpose                                   |
| --------------- | ----------------------------------------- |
| `find()`        | Finds first element that matches          |
| `findIndex()`   | Returns index of first match              |
| `some()`        | Returns true if **any** element passes    |
| `every()`       | Returns true if **all** pass              |
| `includes()`    | Checks if a value exists (for primitives) |
| `indexOf()`     | Finds index of a value (primitive)        |
| `lastIndexOf()` | Same but from the end                     |

🔧 Modify or Change Array
| Method         | Purpose                             |
| -------------- | ----------------------------------- |
| `push()`       | Add to end                          |
| `pop()`        | Remove from end                     |
| `shift()`      | Remove from start                   |
| `unshift()`    | Add to start                        |
| `splice()`     | Add/remove/change at any index      |
| `slice()`      | Copies a portion into new array     |
| `reverse()`    | Reverses array                      |
| `sort()`       | Sorts array                         |
| `fill()`       | Fill all/part of array with a value |
| `copyWithin()` | Copy part of array to another part  |

🧪 Advanced / Rare
| Method         | Purpose                                      |
| -------------- | -------------------------------------------- |
| `toSorted()`   | New (ES2023) – immutable sort                |
| `toReversed()` | New – immutable reverse                      |
| `toSpliced()`  | New – immutable splice                       |
| `at()`         | Access elements by index (supports negative) |

🔍 find() and findIndex() – Explained
🔹 find()
Purpose: Returns the first element in the array that satisfies a condition.
Syntax:
array.find(callback)
Example:
const nums = [4, 9, 16, 25, 29];

const firstLarge = nums.find(n => n > 20); 
console.log(firstLarge); // 25

Why use it?
You want the element itself, not the index, and only the first match matters.

🔹 findIndex()
Purpose: Returns the index of the first element that satisfies a condition.
Syntax:
array.findIndex(callback)
const nums = [4, 9, 16, 25, 29];

const indexLarge = nums.findIndex(n => n > 20);
console.log(indexLarge); // 3
Why use it?
You want to know where the first match occurs.

✅ Quick Comparison:

| Method        | Returns | Use when...                    |
| ------------- | ------- | ------------------------------ |
| `find()`      | Element | You need the actual value      |
| `findIndex()` | Index   | You need the position in array |














