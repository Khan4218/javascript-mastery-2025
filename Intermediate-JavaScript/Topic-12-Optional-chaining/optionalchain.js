// 🔧 Challenge 1: Safe Nested Access
const user = {
  name: "Akbar",
  address: {
    city: "Hyderabad"
  }
};

// ✅ Log the city using optional chaining
// 👉 Expected Output: Hyderabad

console.log(user.address?.city);

// 🔧 Challenge 2: Missing Nested Property
const user1 = {
  name: "Sarah"
};

// ✅ Safely log the city (no crash!)
// 👉 Expected Output: undefined

console.log(user1?.city);

// 🔧 Challenge 3: Optional Method Call
const logger = {
  log: () => console.log("Logging...")
};

// ✅ Call logger.log() only if it exists using optional chaining
logger?.log()

// 🔧 Challenge 4: Optional Array Access
const users = [{ name: "Lana" }, { name: "John" }];

// ✅ Safely access the name of the third user
// 👉 Expected Output: undefined (without crashing)
console.log(users?.[2]);



