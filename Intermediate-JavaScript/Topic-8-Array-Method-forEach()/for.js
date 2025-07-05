// ✅ Challenge 1: Print Names
const names = ["Akbar", "Sarah", "Liam"];

// Expected:
// Akbar
// Sarah
// Liam

const print = names.forEach((name) => {
  console.log(name);

})

// ✅ Challenge 2: Log items with index
const fruits = ["Apple", "Banana", "Mango"];

// Expected:
// 0: Apple
// 1: Banana
// 2: Mango
fruits.forEach((name, index) => {
  console.log(index + ": " + name);

})

// ✅ Challenge 3: Total Price (without using reduce)
const prices = [10, 20, 30];
let total = 0;

// Expected: 60
const toalPrice = prices.forEach((number) => {
  total += number
})

console.log(total);

// 🧠 Challenge 1: Print Developer Names
const devs = [
  { name: "Akbar", role: "Frontend" },
  { name: "Sarah", role: "Backend" },
  { name: "John", role: "Fullstack" }
];

// ✅ Expected:
// Akbar is a Frontend developer
// Sarah is a Backend developer
// John is a Fullstack developer

devs.forEach((devname) => {
  console.log(`${devname.name} is a ${devname.role} developer`);

})

// 🧠 Challenge 2: Log Expensive Products

const products = [
  { name: "Laptop", price: 1200 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 100 }
];

// ✅ Expected:
// Laptop costs $1200
// Keyboard costs $100
// (Skip products below $100)

products.forEach((productName) => {
  console.log(`${productName.name} costs $${productName.price}`);

})

// 🧠 Challenge 3: Add a New Property
// You need to mark students as "pass" if their score is ≥ 50.
const students = [
  { name: "Ava", score: 80 },
  { name: "Liam", score: 45 },
  { name: "Noah", score: 60 }
];

// ✅ Add a new property `status: "pass"` or `"fail"` to each object.
students.forEach((stud) => {
  if (stud.score >= 50) {
    stud.status = "Pass"
  } else {
    stud.status = "Fail"
  }
})

console.log(students);

//🔧 Challenge 1: Add Discounted Price

const items = [
  { name: "Phone", price: 1000 },
  { name: "Tablet", price: 800 },
  { name: "Watch", price: 200 }
];

// ✅ Add a new property `discountPrice` with 10% off the original price.
// Expected Output:
// [
//   { name: "Phone", price: 1000, discountPrice: 900 },
//   ...
// ]

items.forEach((dis) => {
  dis.discountPrice = dis.price - dis.price / 10
})

console.log(items);

//🔧 Challenge 2: Tag Adults Only
const people = [
  { name: "Akbar", age: 22 },
  { name: "Lana", age: 17 },
  { name: "John", age: 30 }
];

// ✅ Add a new property `isAdult: true/false` based on age ≥ 18
// Expected:
// Akbar => true, Lana => false, John => true
people.forEach((ad) => {
  if (ad.age >= 18) {
    ad.isAdult = true
  } else {
    ad.isAdult = false
  }
})

console.log(people);

//🔧 Challenge 3: Grade Students

const results = [
  { name: "Sarah", marks: 95 },
  { name: "Mike", marks: 67 },
  { name: "Emma", marks: 45 }
];

// ✅ Add a new property `grade: "A" | "B" | "F"`
// if marks ≥ 90 → "A"
// if marks ≥ 50 → "B"
// else → "F"

results.forEach((upd) => {
  if (upd.marks >= 90) {
    upd.grade = "A"
  } else if (upd.marks >= 50) {
    upd.grade = "B"
  } else {
    upd.grade = "F"
  }
})

console.log(results);


