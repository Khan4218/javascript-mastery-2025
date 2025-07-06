// 🔧 Challenge 1: Merge Arrays
const frontend = ["HTML", "CSS"];
const backend = ["Node", "Express"];

// 👉 Expected Output:
["HTML", "CSS", "Node", "Express"]
// 👉 Your Task: Merge both arrays using the spread operator.

const merge = [...frontend, ...backend]
console.log(merge);

// 🔧 Challenge 2: Copy and Modify Object
const user = {
  name: "Akbar",
  age: 22
};

// 👉 Expected Output:
// {
//   name: "Akbar",
//     age: 22,
//       role: "developer"
// }
// 👉 Your Task: Create a new object using spread that adds role: "developer" without changing the original.

const addRole = { ...user, role: "developer" }
console.log(addRole);

// 🔧 Challenge 3: Remove First Element from Array (immutably)
const items = [10, 20, 30];

// 👉 Expected Output:
// [20, 30]
// 👉 Your Task: Use spread to create a new array without the first element.

const newItem = items.slice(1)
const result = [...newItem]
console.log(result);

//advance 
// 🔧 Challenge 1: Update One Property Without Changing Others
// You have a user profile:
const profile = {
  name: "Akbar",
  age: 22,
  location: "Hyderabad"
};
// ✅ Create a new object that updates only the age to 23, using the spread operator.
// ➡️ Don’t modify the original profile.

const newProfile = { ...profile }
const updateAge = { ...newProfile, age: 23 }
console.log(updateAge);

// 🔧 Challenge 2: Insert in Middle of Array
const skills = ["HTML", "CSS", "React"];
// ✅ Insert "JavaScript" between "CSS" and "React" using spread.
// ➡️ Final output: ["HTML", "CSS", "JavaScript", "React"]
// ➡️ Do not use .splice().

const addTech = [
  ...skills.slice(0, 2),
  "JavaScript",
  ...skills.slice(2)
]
console.log(addTech);

// 🔧 Challenge 3: Combine Two Arrays into Objects

const names = ["Akbar", "Sarah"];
const roles = ["Frontend", "Backend"];

// ✅ Use .map() + spread (optionally) to return:
// [
//   { name: "Akbar", role: "Frontend" },
//   { name: "Sarah", role: "Backend" }
// ]

const combine = names.map((m, index) => {
  return {
    name: m,
    role: roles[index]
  }
})
console.log(combine);

//🔧 Challenge 1: Insert at the Beginning and End
// You have:
const fruits = ["Apple", "Banana"];
// ✅ Add "Mango" to the start and "Orange" to the end using the spread operator.
// Expected Output:
// ["Mango", "Apple", "Banana", "Orange"]

const addFruits = [
  "Mango",
  ...fruits,
  "Orange"
]
console.log(addFruits);

// 🔧 Challenge 2: Merge Multiple User Profiles

const baseProfile = { name: "Akbar", age: 22 };
const extraInfo = { location: "Hyderabad", role: "Developer" };
// ✅ Create a single object that contains all the properties.
// Expected Output:
// {
//   name: "Akbar",
//     age: 22,
//     location: "Hyderabad",
//     role: "Developer"
// }

const allprop = {
  ...baseProfile,
  ...extraInfo
}

console.log(allprop);

// 🔧 Challenge 3: Overwrite Values
const settings = {
  theme: "light",
  notifications: true,
  layout: "grid"
};
// ✅ Create a new object that changes only theme to "dark" and layout to "list" without mutating the original.

const newSetting = {
  ...settings,
  theme: "dark",
  layout: "List"
}

console.log(newSetting);

//🔧 Challenge 4: Clone and Add
const scores = [10, 20, 30];
// ✅ Create a new array that includes all the scores plus 40 at the end.
const newScores = [
  ...scores,
  40
]
console.log(newScores);


// 🧩 Nested Object Merge Challenge
// You’re given two nested objects. Your task is to merge them, but make sure the nested properties also combine correctly — not get overwritten entirely.
const userSettings = {
  theme: "light",
  notifications: {
    email: true,
    sms: false
  }
}

const overrideSettings = {
  notifications: {
    sms: true
  }
}

// ✅ Goal:
// Create a new object finalSettings where:

// theme remains "light"

// notifications.email stays true

// notifications.sms is updated to true

const finalSettings = {
  ...userSettings,
  notifications: {
    ...userSettings.notifications,
    ...overrideSettings.notifications

  }
}

console.log(finalSettings);

