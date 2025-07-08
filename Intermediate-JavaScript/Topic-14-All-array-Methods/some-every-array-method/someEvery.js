// 💪 Challenges: some() & every()

// 🧩 Challenge 1: Check for Negative Numbers
// Task: Use .some() to check if the array contains any negative numbers.

const numbers = [3, 7, -2, 8, 10];
// Expected output: true

const Negative = numbers.some((num) => {
  return num < 0
})

console.log(Negative);

// 🧩 Challenge 2: All Adults?
// Task: Use .every() to check if all users are 18 or older.
const people = [
  { name: "Ali", age: 20 },
  { name: "Noor", age: 22 },
  { name: "Ravi", age: 17 }
];
// Expected output: false
const adults = people.every(p => p.age > 18)
console.log(adults);

// 🧩 Challenge 3: Mixed Logic
// Task: Given an array of exam scores, check:

// If some students failed (score < 40)

// If every student passed (score >= 40)

const scores = [45, 60, 39, 90];
// Expected:
// Some failed? true
// Everyone passed? false
const someFailed = scores.some(s => s < 40)
console.log(someFailed);
const EveryStudentPasses = scores.every(e => e >= 40)
console.log(EveryStudentPasses);


















