// // 🔥 Combo Challenge: Filter + Map Developers
// // You are given a list of employees:

// const employees = [
//   { name: "Akbar", role: "developer", salary: 5000 },
//   { name: "Sarah", role: "designer", salary: 4000 },
//   { name: "John", role: "developer", salary: 6000 },
//   { name: "Mike", role: "manager", salary: 7000 }
// ];

// // 🧩 Your Task:
// // Filter only the employees with the role "developer".

// // Map the result to return a new array of strings like:
// ["Akbar earns $5000", "John earns $6000"]

// let developerEmp = employees.filter(emp => emp.role === "developer")
// const about = developerEmp.map(res => `${res.name} earns $${res.salary} `)

// console.log(about);

// // 🧩 Challenge: Active Students with Honors

// const students = [
//   { name: "Akbar", active: true, score: 88 },
//   { name: "Sarah", active: false, score: 92 },
//   { name: "John", active: true, score: 79 },
//   { name: "Lana", active: true, score: 95 }
// ];

// // ✅ Your Tasks:
// // Filter only the active students.

// // Map them to return a string like:
// // Akbar has a score of 88
// // John has a score of 79
// // Lana has a score of 95
// // 💡 Expected Output:
// [
//   "Akbar has a score of 88",
//   "John has a score of 79",
//   "Lana has a score of 95"
// ]

// let activeStud = students.filter(stud => stud.active === true)
// const aboutstud = activeStud.map(ab => `${ab.name} has a score of ${ab.score}`)
// console.log(aboutstud);

// 🧠 Challenge: High-Scoring Active Developers
// You’re given an array of team members:
const team = [
  { name: "Akbar", role: "developer", active: true, score: 88 },
  { name: "Sarah", role: "designer", active: true, score: 92 },
  { name: "John", role: "developer", active: false, score: 79 },
  { name: "Lana", role: "developer", active: true, score: 95 },
  { name: "Mike", role: "manager", active: true, score: 70 }
];

// ✅ Your Task:
// Filter only the active developers

// Only include those with score >= 85

// Map the result to return:["Akbar (88)", "Lana (95)"]

let activeDevelopers = team.filter(dev => dev.active === true && dev.score >= 85)
const aboutActiveDeveloper = activeDevelopers.map(dev => `${dev.name} (${dev.score})`)
console.log(aboutActiveDeveloper);


// 🧩 Challenge: Premium Product Labels
// You're given an array of products:
const products = [
  { name: "Laptop", price: 1200, inStock: true },
  { name: "Mouse", price: 25, inStock: false },
  { name: "Keyboard", price: 75, inStock: true },
  { name: "Monitor", price: 300, inStock: true },
  { name: "USB Cable", price: 10, inStock: false }
];

// ✅ Your Task:
// Filter products that:

// Are inStock

// Have a price greater than or equal to 100
// Map them to strings like:
"Laptop - $1200"
"Monitor - $300"

let checkInstock = products.filter(stock => stock.inStock === true && stock.price >= 100)
const aboutStock = checkInstock.map(des => `${des.name} - $${des.price}`)
console.log(aboutStock);
