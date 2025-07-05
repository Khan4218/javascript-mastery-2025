// ✏️ Quick Quiz (3 Qs):
// Q1: What does this return?

const nums = [10, 20, 30];
const result = nums.map(n => n + 1);
console.log(result);
// A. [11, 21, 31]   //ans
// B. [10, 20, 30]    
// C. Error

// Q2: What is the main difference between map() and forEach()?
// A. map() modifies the original array  
// B. map() returns a new array, forEach() doesn't //ans
// C. forEach() is faster

const prices = [100, 200, 300];
const withTax = prices.map(price => price + 10);
console.log(withTax); // [110, 220, 330]

// A. price * 1.1  //ans
// B. price + 10
// C. price - 10

// ✅ Now: Mini Challenge – map() Practice
// 🧩 Challenge: Add “👋” to Every Name
// Write a greetAll(names) function that adds "👋 " before each name in an array.

const names = ["Akbar", "Sarah", "John"];

// Expected output:
["👋 Akbar", "👋 Sarah", "👋 John"]

const nameEmo = names.map(name => "👋" + name)
console.log(nameEmo);

// 🔥 Mini Challenge 2: Square All Numbers
// Given an array of numbers, return a new array with each number squared.
const nums1 = [2, 4, 6];

// Expected output:
[4, 16, 36]

const squared = nums1.map(num => num * num)
console.log(squared);

// 🔁 Recap on .map():
// Takes a callback function

// Returns a new array

// Great for transforming data

// Does not mutate the original array

// 🧩 Challenge: Format Product Prices
// You’re given an array of product prices in numbers. You need to return a new array where each price is formatted as a string like $xx.xx.

const prices1 = [9.99, 15.5, 4, 100];

const newPrice = prices1.map(pricestr => `$${pricestr.toFixed(2)}`)

console.log(newPrice);

//Advance .map methods 

// 🧩 Challenge 1: Capitalize Names
const names1 = ["akbar", "john", "sarah"];
//expected output 
["Akbar", "John", "Sarah"]

const capitalized = names1.map(names => names.charAt(0).toUpperCase() + names.slice(1))
console.log(capitalized);

// 🧩 Challenge 2: Return Object for Each Product
// Given:
const products = ["Pen", "Pencil", "Notebook"];

//expected Output 
[
  { name: "Pen", price: 10 },
  { name: "Pencil", price: 10 },
  { name: "Notebook", price: 10 }
]

const arrOfObj = products.map(item => ({
  name: item,
  price: 10
}))

console.log(arrOfObj);

// 🧩 Challenge 3: Chain .map() Twice
// Given:

const scores = [5, 10, 15];
//expected output 
["Score: 10", "Score: 20", "Score: 30"]

const chained = scores.map(scores => scores * 2).map(str => "Score: " + str)
console.log(chained);

// You're officially a .map() ninja 🥷
