✂️ slice() vs splice() – Explained

These two methods seem similar, but they do very different things:
| Method     | Modifies original? | Returns       | Use for...                         |
| ---------- | ------------------ | ------------- | ---------------------------------- |
| `slice()`  | ❌ No               | New array     | Copying part of array              |
| `splice()` | ✅ Yes              | Removed items | Adding/removing/replacing elements |

🔹 slice(start, end)
Purpose: Returns a shallow copy of a portion of the array.

Does NOT modify the original array.

end is exclusive (not included).

const fruits = ["apple", "banana", "cherry", "date"];
const sliced = fruits.slice(1, 3);
console.log(sliced); // ["banana", "cherry"]

🔹 splice(start, deleteCount, ...items)
Purpose: Changes the original array by:

removing,

replacing,

or inserting elements.
const colors = ["red", "green", "blue", "yellow"];
const removed = colors.splice(1, 2); // remove 2 items at index 1
console.log(removed); // ["green", "blue"]
console.log(colors);  // ["red", "yellow"]

✅ You can also insert or replace:
colors.splice(1, 0, "purple"); // insert "purple" at index 1
colors.splice(2, 1, "black");  // replace 1 item at index 2 with "black"
