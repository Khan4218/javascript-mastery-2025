// // 🔧 Challenge 1: Basic Object Destructuring
// // You have the following object:

// const user = {
//   name: "Akbar",
//   age: 22,
//   city: "Hyderabad"
// };

// // ✅ Your Task:
// // Use object destructuring to extract name and city, then log:
// // Akbar lives in Hyderabad
// const { name, city } = user

// console.log(`${name} lives in ${city}`);

// // 🔧 Challenge 2: Destructure with Default Value
// // Given:

// const settings = {
//   theme: "dark",
// };

// // ✅ Your Task:
// // Destructure theme and layout from the object,
// // Set default value for layout as "grid" if not present.
// // Then log:
// // Theme: dark, Layout: grid

// const { theme, layout = "grid" } = settings

// console.log(theme, layout);

// // 🔧 Challenge 3: Array Destructuring & Skip
// const colors = ["red", "blue", "green"];

// // ✅ Your Task:
// // Destructure only the first and third values and log:
// // First: red, Third: green

// const [first, , third] = colors

// console.log(first, third);

// 🔧 Challenge 1: Nested Object Destructuring
// You have a user profile from an API:
// const user1 = {
//   name: "Akbar",
//   contact: {
//     email: "akbar@example.com",
//     phone: "123-456-7890"
//   },
//   location: {
//     city: "Hyderabad",
//     country: "India"
//   }
// };
// // ✅ Your Task:
// // Destructure the name, email, and city — then log:
// // Akbar's email is akbar@example.com and lives in Hyderabad.

// const { name, contact: { email }, location: { city } } = user1

// console.log(`${name} emai is ${email} and lives is ${city}.`);

// // 🔧 Challenge 2: Function Parameter Destructuring
// // You're writing a logger function:
// const product = {
//   title: "Laptop",
//   price: 1200,
//   specs: {
//     ram: "16GB",
//     storage: "512GB SSD"
//   }
// };

// // ✅ Your Task:
// // Write a function logProduct that takes the product object and destructures title, price, and ram from it — then logs:
// // Laptop costs $1200 and has 16GB RAM.

// function logProduct({ title, price, specs: { ram } }) {
//   console.log(`${title} costs ${price} and has ${ram} RAM.`);

// }

// logProduct(product)

// // 🔧 Challenge 3: Array of Objects Destructuring in Loops
// // You get a list of users:
// const users = [
//   { name: "Akbar", age: 22 },
//   { name: "Lana", age: 30 },
//   { name: "John", age: 25 }
// ];

// // ✅ Your Task:
// // Loop through the array and destructure each name and age. Log:
// // Akbar is 22 years old.
// // Lana is 30 years old.
// // John is 25 years old.

// users.forEach(({ name, age }) => {
//   console.log(`${name} is ${age} years old.`);
// })

// 💀Advanced Destructuring 

// 🔧 Challenge 1: Rename & Default
// You're given a user object:
const user = {
  username: "Akbar",
  country: "India"
};

// ✅ Your Task:
// Destructure username as name, and set a default value of "Hyderabad" for city.
// Then log:

// Akbar lives in Hyderabad, India

const { username: name, city = "Hyderabad", country } = user

console.log(`${name} lives in ${city}, ${country}`);

// 🔧 Challenge 2: Use Rest to Separate

const settings = {
  theme: "dark",
  layout: "grid",
  showSidebar: true
};

// ✅ Your Task:
// Destructure theme, and group the rest into a restSettings object.
// Then log:
// "Theme: dark"
// { layout: "grid", showSidebar: true }

const { theme, ...restSetting } = settings

const { layout, showSidebar } = restSetting

console.log(`Theme: ${theme}, layout:${layout} , showSidebar:${showSidebar}`);


// 🔧 Challenge 3: Destructure in Function Params with Nested Object
// You have a product object:
const product = {
  name: "Laptop",
  price: 1200,
  specs: {
    ram: "16GB",
    cpu: "Intel i7"
  }
};

// ✅ Your Task:
// Write a function that destructures name, price, and cpu from the argument and logs:

// Laptop costs $1200 and runs on Intel i7

function destructure({ name, price, specs: { cpu } }) {
  console.log(`${name} costs ${price} and runs on ${cpu}`);


}

destructure(product)

























