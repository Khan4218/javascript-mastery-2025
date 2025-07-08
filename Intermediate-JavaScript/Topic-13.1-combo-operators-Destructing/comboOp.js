// Awesome! Let's practice some combo challenges using:

// ✅ ?? (nullish coalescing)

// ✅ ?. (optional chaining)

// ✅ Destructuring

// ✅ Ternary (? :)

// 🔧 Challenge 1: Destructuring + Nullish Coalescing

const user = {
  name: "Akbar",
  preferences: {
    theme: null
  }
};

// ✅ Your Task:
// Destructure `theme` from `preferences`, and if it's null, default to `"light"`
// Log: "Theme is light"

const { preferences: { theme } } = user
const log = `Theme is ${theme ?? `Light`}`
console.log(log);

// 🔧 Challenge 2: Optional Chaining + Nullish Coalescing
const settings = {
  user: {
    name: "Lana"
    // no role
  }
};
// 🧩 Task:
// Safely access role.
// Fallback to "guest" if it's missing.
// Log: "Role: guest"

const log2 = settings.user?.role ?? "Role: guest"
console.log(log2);

// 🔧 Challenge 3: Ternary + Nullish + Optional Chaining

const product = {
  name: "Laptop",
  price: null
};

// 🧩 Task:
// If price is nullish, log "Price not set"
// Otherwise, log "Price is $<value>"


const conditionPrice = product.price ? `price is ${product.price}` : product?.price ?? "Price not set"
console.log(conditionPrice);

// 🔧 Challenge 4: Safe Access + Default Title in Array

const books = [
  { title: "JS Basics" },
  {},
  { title: null }
];
// Loop through books
// Safely access title
// Log "Untitled" if missing or null
// Expected:
// JS Basics
// Untitled
// Untitled

books.forEach((books) => {
  const realBooks = books.title ?? "Untitled"
  console.log(realBooks);
})








