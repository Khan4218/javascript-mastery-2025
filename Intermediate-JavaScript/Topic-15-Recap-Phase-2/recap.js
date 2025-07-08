// 💻 Phase 2: Final Coding Challenge Pack
// This is your full revision set: real-world style mini-problems covering all 13 topics.
// 🔹 1. this Keyword – Context Check
const person = {
  name: "Akber",
  greet() {
    return `Hi, I'm ${this.name}`;
  }
};
// 🧠 Expected: "Hi, I'm Akber"

const displayNAme = person.greet()
console.log(displayNAme);

// 🔹 2. Arrow Function – One-liner Function

// Convert to arrow function:
// function square(n) {
//   return n * n;
// }
// 🧠 Rewrite using arrow

const square = n => n * n

console.log(square(1));

// 🔹 3. Callback Function – Logger

function greet(name, callback) {
  const message = `Hello, ${name}`;
  callback(message);
}

function callback(message) {
  console.log(message);

}
// Call greet() and pass a function that logs the message;
greet("Akbar", callback)


// 🔹 4. Higher-Order Function – Filter with Custom Logic

function filterData(arr, testFn) {
  const result = [];
  for (let item of arr) {
    if (testFn(item)) {
      result.push(item);
    }
  }
  return result;
}
// Use it to filter even numbers from [1, 2, 3, 4, 5, 6]

function testFn(item) {
  return item % 2 === 0

}

const evens = filterData([1, 2, 3, 4, 5, 6], testFn)
console.log(evens);


// 🔹 5. Array Method – map()
const prices = [10, 20, 30];
// Use map to add tax (10%) to each item
// 🧠 Expected: [11, 22, 33]

const addTax = prices.map((price) => {
  const tax = price / 100 * 10 + price
  return tax
})
console.log(addTax);

// 🔹 6. Array Method – filter()

const words = ["hi", "hello", "bye", "goodbye"];
// Filter out words longer than 3 letters
// 🧠 Expected: ["hi", "bye"]

const longerWords = words.filter(f => f.length < 4)

console.log(longerWords);

// 🔹 7. Array Method – reduce()

const donations = [100, 50, 25];
// Get total donations using reduce()
// 🧠 Expected: 175
const totalDonation = donations.reduce((acc, curr) => {
  return acc + curr
})

console.log(totalDonation);

// 🔹 8. Array Method – forEach()

const tasks = ["eat", "code", "sleep"];
// Use forEach to log: "I need to eat", "I need to code", ...

const schedule = tasks.forEach((task) => {
  console.log(` I need to ${task}`);
})


// 🔹 9. Spread Operator – Merge Objects
const base = { name: "Zara" };
const extra = { age: 20 };
// Merge into a new object
// 🧠 Expected: { name: "Zara", age: 20 }

const newObj = { ...base, ...extra }
console.log(newObj);

// 🔹 10. Destructuring – Extract from Object
const user = { id: 1, username: "mir_akber" };
// Extract `username` using destructuring

const { username } = user

console.log(username);

// 🔹 11. Ternary Operator – Access Check

const age = 17;
const canVote = age >= 18 ? "Yes" : "No";
// 🧠 Expected: "No"
console.log(canVote);

// 🔹 12. Optional Chaining – Safe Access
const data = { user: { profile: { email: "me@example.com" } } };
// Log the email using optional chaining
console.log(data.user?.profile?.email);

// 🔹 13. Nullish Coalescing – Default Fallback
const input = null;
const finalValue = input ?? "default";
// 🧠 Expected: "default"
console.log(finalValue);




