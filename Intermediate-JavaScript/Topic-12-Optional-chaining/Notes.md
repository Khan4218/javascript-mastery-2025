🔍 What is Optional Chaining ?.?
Optional chaining allows you to safely access deeply nested properties without getting an error if something is undefined or null.

🧠 Problem Without It:

const user = {};
console.log(user.profile.name); // ❌ Error: Cannot read property 'name' of undefined

✅ With Optional Chaining:
const user = {};
console.log(user.profile?.name); // ✅ Output: undefined (no crash!)

✅ Use Cases:
| What you want to access | How you use it       |
| ----------------------- | -------------------- |
| Nested object property  | `user.profile?.name` |
| Optional function call  | `user.sayHi?.()`     |
| Optional array access   | `arr?.[0]`           |

🚨 When to Use:
Accessing optional API data

Accessing UI configs that may not exist

Preventing "undefined" or "null" crashes































