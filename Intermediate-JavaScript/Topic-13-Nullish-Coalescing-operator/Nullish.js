// 🔧 Challenge 1: Guest Name

const name = null;
// ✅ If name is null or undefined, fallback to "Guest"
// 👉 Expected Output: "Guest"

const log = name ?? "Guest"

console.log(log);

// 🔧 Challenge 2: Default Age
const age = undefined;
// ✅ If age is nullish, use 18
// 👉 Expected Output: 18
const log2 = age ?? 18

console.log(log2);

// 🔧 Challenge 3: Safe Title
const book = { author: "John" };
// ✅ Use `??` to provide a fallback title if `book.title` is missing
// 👉 Expected Output: "Untitled"
const log3 = book.title ?? "Untitled"
console.log(log3);

// 🔧 Challenge 4: Show Notification Count
const notifications = 0;
// ✅ Should show 0, not fallback — because 0 is not nullish!
// 👉 Expected Output: 0
const log4 = notifications ?? "fallback"
console.log(log4);

// 🔧 Challenge 5: Optional Property with Fallback
const settings = { theme: null };
// ✅ Fallback to "light" only if theme is null or undefined
// 👉 Expected Output: "light"
const log5 = settings.theme ?? "light"
console.log(log5);


