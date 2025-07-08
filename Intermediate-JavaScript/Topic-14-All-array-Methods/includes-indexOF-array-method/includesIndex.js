// 💪 Challenges: includes() & indexOf()
// 🧩 Challenge 1: Check for Banned Word
// Task: Check if the array contains the word "spoiler" using .includes().

const words = ["review", "article", "spoiler", "summary"];
// Expected: true
const banned = words.includes("spoiler")
console.log(banned);

// 🧩 Challenge 2: Get the First Match Index
// Task: Use .indexOf() to get the index of the number 7.
const nums = [1, 3, 7, 8, 7, 5];
// Expected: 2
const indexOfNums = nums.indexOf(7)
console.log(indexOfNums);

// 🧩 Challenge 3: Combined Use
// Task: Given an array of tags, first check if "urgent" exists. If it does, get its index.

const tags = ["todo", "important", "urgent", "personal"];
// Expected:
// Found? true
// Index: 2
const checkTags = tags.includes("urgent")
console.log(`Found? ${checkTags}`);

const getIndex = checkTags ? tags.indexOf("urgent") : "Not Found"
console.log(`Index: ${getIndex}`);





























