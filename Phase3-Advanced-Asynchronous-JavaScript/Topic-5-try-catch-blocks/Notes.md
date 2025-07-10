🔸 try / catch — Advanced Error Handling in Asynchronous JS
🔸 What is it?
It’s a control structure that lets you handle errors gracefully instead of crashing your app.

try {
  // code that might throw an error
} catch (error) {
  // handle the error
}

🔸 Example 1: Synchronous Error Handling
try {
  const x = y + 1; // y is undefined
} catch (err) {
  console.log("Error caught:", err.message);
}

✅ Output:
Error caught: y is not defined

defined

🔸 Example 2: Asynchronous without await ❌
try {
  fetch("https://dummyjson.com/quotes/random")
    .then(res => res.json())
    .then(data => console.log(data));
} catch (err) {
  console.log("Will not catch here:", err.message);
}

⚠️ Won’t catch because the error happens outside the try block (inside a .then()).

🔸 Example 3: Asynchronous with await ✅

async function getData() {
  try {
    const res = await fetch("https://dummyjson.com/quotes/random");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log("Caught with try/catch:", err.message);
  }
}
getData();

✅ This will catch:

Network errors

JSON parsing errors

Server issues (only if thrown manually)

🧠 Key Rule

| If you're using…       | Can you use try/catch?                                 |
| ---------------------- | ------------------------------------------------------ |
| `.then().catch()`      | ❌ catch block **won’t** catch unless inside `.catch()` |
| `await` inside `async` | ✅ YES — `try/catch` works beautifully                  |
