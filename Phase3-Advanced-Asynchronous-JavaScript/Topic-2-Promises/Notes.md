🔸 Promises in JavaScript

🔍 What Is a Promise?
A Promise is a placeholder for a value that’s not ready yet — like an "I owe you" for data.

Imagine:
"I promise I’ll give you the data — either success ✅ or error ❌."

✅ Promises Have 3 States:
| State       | Meaning                           |
| ----------- | --------------------------------- |
| `pending`   | Still waiting (in progress)       |
| `fulfilled` | Resolved successfully (`.then()`) |
| `rejected`  | Failed with an error (`.catch()`) |

🧠 Syntax:

const promise = new promise((resolve, reject) => {
if(success) {
  resolve("Data is here")
}else {
  reject("Something went wrong")
}
})

🔁 Using .then() and .catch()
You consume a promise using:

promise
  .then(result => {
    console.log("Success:", result);
  })
  .catch(error => {
    console.log("Error:", error);
  });

🧪 Example 1: Successful Promise

const myPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Data loaded");
  }, 1000);
});

myPromise.then(data => console.log(data));
// Output after 1s: "Data loaded"

❌ Example 2: Rejected Promise
const failPromise = new Promise((_, reject) => {
  reject("Failed to load");
});

failPromise.catch(err => console.log(err));
// Output: "Failed to load"

🧠 Summary:
Promises are used to handle asynchronous operations

You either resolve (success) or reject (error)

Use .then() for success, .catch() for errors