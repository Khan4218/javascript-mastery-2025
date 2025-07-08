🔃 sort() and reverse() – Explained
These methods are used to rearrange elements in an array — either alphabetically/numerically or by flipping the order.

🔹 sort()
Purpose: Sorts the array in-place (modifies the original) based on Unicode values by default.
Syntax:
array.sort()

⚠️ Default behavior (be careful!)
const nums = [100, 20, 3];
nums.sort();
console.log(nums); // [100, 20, 3] → wrong!

✅ To sort numbers correctly, use a compare function:
nums.sort((a, b) => a - b); // ascending
nums.sort((a, b) => b - a); // descending

🔹 reverse()
Purpose: Reverses the array in-place — last becomes first, and vice versa.
Syntax:
array.reverse()
Example:
const letters = ["a", "b", "c"];
letters.reverse(); 
console.log(letters); // ["c", "b", "a"]


                                    ✅ Summary Table:

| Method      | Modifies original? | Purpose                                |
| ----------- | ------------------ | -------------------------------------- |
| `sort()`    | Yes                | Sorts elements (custom sort if needed) |
| `reverse()` | Yes                | Reverses array order                   |

















































