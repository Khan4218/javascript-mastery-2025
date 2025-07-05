// 🧩 Challenge: Sum of Scores
// You're given an array of numbers representing scores:
const scores = [10, 20, 30, 40];
// 👉 Your Task:
// Use .reduce() to calculate the total score.
// 💡 Expected Output: 100

const totalScore = scores.reduce((acc, curr) => acc + curr)
console.log(totalScore);

// 🧩 Challenge 2: Total Price Calculator

const cart = [
  { item: "Laptop", price: 1200 },
  { item: "Mouse", price: 25 },
  { item: "Keyboard", price: 75 }
];
// ✅ Your Task:
// Use .reduce() to calculate the total price of all items in the cart.

// 💡 Expected Output:
// 1300

const totalPrice = cart.reduce((acc, cur) => {
  return acc + cur.price
}, 0)
console.log(totalPrice);

// 🧠 Challenge: Count Total Occurrences

// You have an array of tags used in blog posts:

const tags = ["js", "css", "js", "html", "js", "css"]

// ✅ Your Task:
// Use .reduce() to return an object showing how many times each tag appears:
// {
//   js: 3,
//   css: 2,
//   html: 1
// }

const repeating = tags.reduce((acc, cur) => {
  if (acc[cur]) {
    acc[cur] += 1
  } else {
    acc[cur] = 1
  }

  return acc


}, {})

console.log(repeating);

// 🧩 Challenge: Find the Highest Score
// You’re given an array of students with their scores.
// Use .reduce() to find the student object with the highest score.

const students = [
  { name: "Akbar", score: 87 },
  { name: "Sarah", score: 92 },
  { name: "John", score: 78 },
  { name: "Lana", score: 95 },
];


// ✅ Expected Output:

// { name: "Lana", score: 95 }

const topScorer = students.reduce((acc, curr) => {
  if (curr.score > acc.score) {
    return curr
  } else {
    return acc
  }
});


console.log(topScorer);

// 🧩 Challenge: Count Votes
// You're given an array of votes for different candidates. Use .reduce() to count how many votes each candidate received.
const votes = ["Akbar", "Sarah", "Akbar", "Lana", "Sarah", "Akbar"];

// ✅ Expected Output:
// {
//   Akbar: 3,
//   Sarah: 2,
//   Lana: 1
// }

const countVotes = votes.reduce((acc, current) => {
  if (acc[current]) {
    acc[current] += 1;
  } else {
    acc[current] = 1;
  }

  return acc
}, {})

console.log(countVotes);

