// 🔧 Combo Challenge 1: Filter + Map
const users = [
  { name: "Akbar", age: 22 },
  { name: "Lana", age: 17 },
  { name: "Sarah", age: 30 },
  { name: "John", age: 15 }
]

// 👉 Your Task:
// 1. Filter only users age ≥ 18
// 2. Map them to strings like: "Akbar (22)", "Sarah (30)"

// 👉 Expected Output:
// ["Akbar (22)", "Sarah (30)"]

let filterUsers = users.filter((fill) => {
  return fill.age >= 18
})
const str = filterUsers.map((str) => {
  return `${str.name} (${str.age})`
})

console.log(str);



// 🔧 Combo Challenge 2: forEach + Condition + Property Add
const items = [
  { name: "Phone", price: 1200 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 100 }
]

// 👉 Your Task:
// 1. Use forEach
// 2. Add a property `expensive: true/false`
//    Set to true if price > 100

// 👉 Expected:
// [
//   { name: "Phone", price: 1200, expensive: true },
//   { name: "Mouse", price: 25, expensive: false },
//   ...
// ]

items.forEach((upd) => {
  if (upd.price > 100) {
    upd.expensive = true
  } else {
    upd.expensive = false
  }
})

console.log(items);

//🔧 Combo Challenge 3: filter + map + forEach (🔥)

const people = [
  { name: "Akbar", age: 22 },
  { name: "Liam", age: 16 },
  { name: "Emma", age: 18 },
  { name: "Noah", age: 20 }
]

// 👉 Your Task:
// 1. Filter only age ≥ 18
// 2. Map to: { name: "Akbar", isAdult: true }
// 3. Use forEach to print: Akbar is an adult ✅

let adults = people.filter((fil) => {
  return fil.age >= 18
})
let tagged = adults.map(p => ({
  name: p.name,
  isAdult: true
}))

const print = tagged.forEach((p) => console.log(`${p.name} is an adult`))


//🔧 Combo Challenge 3: filter + map + forEach (🔥)
// 👇 Your Task:
// You’re given an array of products.

// Filter only those with inStock: true

// Map them into strings like "Laptop costs $1200"

// Use forEach to log each string to the console
//input 

const products = [
  { name: "Laptop", price: 1200, inStock: true },
  { name: "Mouse", price: 25, inStock: false },
  { name: "Keyboard", price: 100, inStock: true },
  { name: "Monitor", price: 300, inStock: true }
];

// ✅ Expected Console Output:
// Laptop costs $1200
// Keyboard costs $100
// Monitor costs $300

products.filter(f => f.inStock).map(m => `${m.name} costs $${m.price}`).forEach(p => console.log(p))

// 🧠 LeetCode-Style Challenge: Total In-Stock Value
// You're given a list of items in a store.

const inventory = [
  { name: "Laptop", price: 1200, inStock: true },
  { name: "Mouse", price: 25, inStock: false },
  { name: "Keyboard", price: 100, inStock: true },
  { name: "Monitor", price: 300, inStock: true }
];

// ✅ Your Task:
// Use .filter(), then .map(), and finally .reduce() to calculate the total value of items in stock.
//expected outPut 
// 1600

const totalValue = inventory.filter(f => f.inStock).map(p => p.price).reduce((acc, current) => acc + current)
console.log(totalValue);

// 🎯 Next Challenge (Final Boss for This Combo):
const employees = [
  { name: "Akbar", dept: "Engineering", salary: 8000 },
  { name: "Sarah", dept: "Design", salary: 5000 },
  { name: "John", dept: "Engineering", salary: 7000 },
  { name: "Lana", dept: "Marketing", salary: 4000 }
];

// ✅ Your Task:
// Filter only "Engineering" employees

// Map to their salaries

// Reduce to calculate total payroll for Engineering dept
// expected output 15000

let totalPayroll = employees.filter(f => f.dept.includes("Engineering")).map(m => m.salary).reduce((acc, current) => acc + current)

console.log(totalPayroll);



















