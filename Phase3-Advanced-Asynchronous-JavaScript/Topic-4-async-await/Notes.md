Topic: async / await
🔹 Why Use It?
Instead of chaining .then().then().catch(), we can write asynchronous code like synchronous — clean and readable.

✅ Syntax Breakdown
async function getData() {
  try {
    const response = await fetch("https://dummyjson.com/quotes/random");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Something went wrong:", error);
  }
}
async → Makes a function return a Promise

await → Pauses execution until Promise resolves

try/catch → Catches errors like .catch() does

🧠 Summary
| Feature        | `then/catch` | `async/await`                |
| -------------- | ------------ | ---------------------------- |
| Style          | Chain-based  | Code block-based             |
| Error Handling | `.catch()`   | `try/catch`                  |
| Readability    | OK           | ✅ Cleaner & easier to follow |
