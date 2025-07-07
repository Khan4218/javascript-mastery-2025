// 🔧 Challenge 1: Age Checker
const age = 20;
// ✅ Log "Adult" if age ≥ 18, else "Minor"
const result = age >= 18 ? "Adult" : "Minor"
console.log(result);

// 🔧 Challenge 2: Even or Odd
const number = 10;
// ✅ Log "Even" if even, else "Odd"

const eO = number % 2 === 0 ? "Even" : "Odd"
console.log(eO);

// 🔧 Challenge 3: Discount Checker
const isMember = false;
// ✅ Log "You get a 10% discount!" if true, else "No discount for you!"
const discount = isMember ? "You get a 10% discount!" : "No discount for you!"
console.log(discount);

// 🔧 Challenge 4: Login Status
const user = "Akbar";
// ✅ Log "Welcome back!" if user exists, else "Please log in"
const loginStatus = user ? "Welcome back!" : "Please log in"

console.log(loginStatus);

// 🔧 Challenge 5: Score Grader
const score = 90;
// ✅ Log:
// "A" if score ≥ 90
// "B" if score ≥ 70
// else "C"
// Use **nested ternary**
const scoreGrader = score >= 90 ? "A" : score >= 70 ? "B" : "C"
console.log(scoreGrader);



