🔗 What Is Chaining Promises?
When one asynchronous task finishes, and you want to run another task based on its result, you can chain .then() methods.
🧠 Basic Structure:
fetch(url)
  .then(res => res.json())
  .then(data => {
    // do something with data
    return data.id
  })
  .then(id => {
    // do something with the id
  })
  .catch(err => {
    // handle any error in the chain
  })

Each .then() passes its result to the next.

If any part fails, .catch() handles the error.

📦 Real Example:

fetch("https://dummyjson.com/quotes/random")
  .then(res => res.json())
  .then(data => {
    console.log(`✅ Quote: ${data.quote}`);
    return data.author;
  })
  .then(author => {
    console.log(`🖊️ Author: ${author}`);
  })
  .catch(err => {
    console.log("❌ Error:", err.message);
  });

✅ Benefits:
Cleaner than nesting callbacks.

Easier to debug.

Helps structure steps logically.