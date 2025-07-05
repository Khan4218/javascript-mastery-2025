🔹 What is .forEach()?
.forEach() is a higher-order function that:

Executes a callback function once for each item in an array.

It does not return anything (undefined).

It's mainly used for side effects, like console.log(), DOM updates, etc.

🧠 Syntax

array.forEach(function(item, index, array) {
  // your logic
})

//with arrow function 

array.forEach((item, index, array) => {
  // your logic
})

✅ Basic Example

const names = ["Akbar", "Sarah", "Liam"];

names.forEach((name, index) => {
  console.log(index + " → " + name);
});

//output 
0 → Akbar
1 → Sarah
2 → Liam

⚠️ Important Notes:
.forEach() doesn’t return a new array (unlike .map() or .filter()).

You use it when you want to do something with each item, not build a new array.

You can’t chain .forEach() with .map() or .filter() because it doesn’t return anything.
