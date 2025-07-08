// 🧩 Challenge 1: First Long Word
// Task: Use .find() to get the first word that is longer than 5 characters.
const words = ["hi", "book", "awesome", "sky", "JavaScript"];
// Your code here
// 🧠 Expected output: "awesome"

const finding = words.find(w => w.length > 5)
console.log(finding);

// 🧩 Challenge 2: Find Failing Student
// Task: Use .findIndex() to find the index of the first student who scored less than 35.

const scores = [89, 92, 43, 21, 55];
// Your code here
// 🧠 Expected output: 3 (because 21 is the first < 35)

const firstStudent = scores.findIndex(i => i < 35)
console.log(firstStudent);

// 🧩 Challenge 3: Custom – Both Together
// Task: Given an array of users, find the name of the first user under 18, and also find their index.

const users = [
  { name: "Aarav", age: 22 },
  { name: "Sara", age: 25 },
  { name: "Kabir", age: 16 },
  { name: "Zoya", age: 17 }
];
// Your code here
// 🧠 Expected:

// Name: "Kabir"

// Index: 2

const findUser = users.find(f => f.age < 18)
const indexofUser = users.findIndex(i => i.age < 18)
console.log(`Name: ${findUser.name}`);
console.log(`Index: ${indexofUser}`);































