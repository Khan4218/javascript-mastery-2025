// 💪 Challenges: slice() & splice()

// 🧩 Challenge 1: Get a Subarray with slice()
// Task: Use slice() to extract ["cat", "dog"] from the array.

const animals = ["ant", "cat", "dog", "elephant"];
// Expected: ["cat", "dog"]

const extractAnimals = animals.slice(1, 3,)
console.log(extractAnimals);

// 🧩 Challenge 2: Remove and Store Items with splice()
// Task: Use splice() to remove "blue" and "green" from the array and store them in a new array.

const colors = ["red", "blue", "green", "yellow"];
// Expected:
// Removed: ["blue", "green"]
// Updated: ["red", "yellow"]

const removed = colors.splice(1, 2)
const updatedColors = colors
console.log(removed);
console.log(updatedColors);


// 🧩 Challenge 3: Insert Elements with splice()
// Task: Add "mango" and "grape" between "banana" and "cherry".
const fruits = ["apple", "banana", "cherry", "date"];
// Expected: ["apple", "banana", "mango", "grape", "cherry", "date"]

const addFruits = fruits.splice(2, 0, "Mango", "grape")

console.log(fruits);

// 💡 Bonus Tip:
// If you ever want to use slice() or splice() without affecting the original, always clone the array first using:

const copy = [...original]; // or original.slice()



