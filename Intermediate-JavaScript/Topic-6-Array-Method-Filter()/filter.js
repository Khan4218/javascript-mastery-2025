// 🧩 Challenge 1: Filter Even Numbers

const numbers = [3, 6, 9, 12, 15, 18];
// 👉 Expected Output: [6, 12, 18]

const evens = numbers.filter(num => num % 2 === 0)
console.log(evens);

// 🧩 Challenge 2: Filter Strings Longer Than 5 Characters
const words = ["React", "Node", "Express", "MongoDB", "API"];
// 👉 Expected Output: ["Express", "MongoDB"]

const longWords = words.filter(w => w.length > 5)
console.log(longWords);

// 🧩 Challenge 3: Get Only Active Users
const users = [
  { name: "Akbar", active: true },
  { name: "John", active: false },
  { name: "Lana", active: true }
];
// 👉 Expected Output: [ { name: "Akbar", active: true }, { name: "Lana", active: true } ]

const activeUsers = users.filter(user => user.active)
console.log(activeUsers);

// 🧩 Challenge 1: Filter Numbers Greater Than 50

const nums = [12, 55, 78, 34, 99, 21];
// 👉 Expected Output: [55, 78, 99]

const greaterThanNum = nums.filter(num => num > 50)
console.log(greaterThanNum);

// 🧩 Challenge 2: Remove Falsy Values

const mixed = [0, "Akbar", "", false, 42, null, "JS"];
// 👉 Expected Output: ["Akbar", 42, "JS"]
const truthy = mixed.filter(Boolean)
console.log(truthy);

// 🧩 Challenge 3: Filter Objects by Role

const team = [
  { name: "Sarah", role: "developer" },
  { name: "Mike", role: "designer" },
  { name: "Akbar", role: "developer" }
];
// 👉 Expected Output: [{ name: "Sarah", role: "developer" }, { name: "Akbar", role: "developer" }]

const developer = team.filter(team1 => team1.role == "developer")
console.log(developer);

// 🧩 Challenge 4: Get Students Who Passed
const students = [
  { name: "Ava", score: 80 },
  { name: "Liam", score: 45 },
  { name: "Noah", score: 60 }
];
// 👉 Expected Output: [{ name: "Ava", score: 80 }, { name: "Noah", score: 60 }]

const passed = students.filter(stud => stud.score > 50)
console.log(passed);

// 🧩 Challenge 5: Filter Nested Tags
const posts = [
  { id: 1, tags: ["js", "react"] },
  { id: 2, tags: ["python"] },
  { id: 3, tags: ["js", "node"] }
];
// 👉 Filter posts that include the tag "js"
// 👉 Expected Output: [{ id: 1, tags: ["js", "react"] }, { id: 3, tags: ["js", "node"] }]
const nesttag = posts.filter(fil => fil.tags.includes("js"))
console.log(nesttag);

//includes practice and filter 

// ✅ Challenge: Filter posts that include the "react" tag

const posts1 = [
  { id: 1, tags: ["js", "react"] },
  { id: 2, tags: ["html", "css"] },
  { id: 3, tags: ["react", "node"] },
  { id: 4, tags: ["python"] }
];

// 👉 Expected Output:
[
  { id: 1, tags: ["js", "react"] },
  { id: 3, tags: ["react", "node"] }
]

const filterPost = posts1.filter(fil => fil.tags.includes("react"))
console.log(filterPost);
