🔹 Destructuring in JavaScript
📘 1. Explanation
Destructuring allows you to unpack values from arrays or properties from objects into separate variables — in a clean, readable way.

✅ Object Destructuring
Instead of:
const person = { name: "Akbar", age: 25 }
const name = person.name
const age = person.age

Use destructuring:
const { name, age } = person
console.log(name) // "Akbar"
console.log(age)  // 25

✅ Array Destructuring
Instead of:
const scores = [90, 85]
const first = scores[0]
const second = scores[1]

You can do:

const [first, second] = scores
console.log(first)  // 90
console.log(second) // 85

🔹 Destructuring — Deep Dive
Sometimes, objects contain other objects:
const user = {
  name: "Sara",
  address: {
    city: "Delhi",
    pincode: 110001
  }
}
To extract city, you need to go one level deeper
const {
  address: { city }
} = user

console.log(city) // "Delhi"
Note: This won’t give you address as a variable — just city.

📘 2. Renaming While Destructuring

const dev = {
  username: "akber",
  role: "frontend"
}

const { username: user } = dev

console.log(user) // "akber"
Here, we took username and stored it in a new variable called user.

📘 3. Default Values in Destructuring
If a property might be missing, you can set a default:
const config = {
  theme: "dark"
}

const { layout = "grid" } = config

console.log(layout) // "grid"
If layout exists, it will use it. If not, "grid" will be used.


📘 Destructuring — Additional Concepts Explained
🔹 1. Skipping Items in Array Destructuring
If you only want certain elements, you can skip others using commas:
const numbers = [10, 20, 30]

// Skip the first two
const [, , third] = numbers
console.log(third) // 30

🔹 2. Swapping Variables Using Destructuring
Normally to swap, we do:
let a = 5, b = 10
let temp = a
a = b
b = temp

With destructuring, it's 1 line:
let a = 5, b = 10
[a, b] = [b, a]
console.log(a, b) // 10, 5

🔹 3. Destructuring in Function Parameters
You can destructure directly in function parameters:
function greet({ name }) {
  console.log(`Hello, ${name}`)
}

greet({ name: "Akbar" }) // Hello, Akbar
Instead of accessing obj.name inside the function, we extract it right at the start.

🔹 4. Destructuring Nested Arrays Inside Objects

You can combine object + array destructuring:
const user = {
  name: "Mira",
  hobbies: ["reading", "chess", "coding"]
}

const { hobbies: [firstHobby] } = user

console.log(firstHobby) // "reading"

const user = {
  name: "Mira",
  hobbies: ["reading", "chess", "coding"]
}

const { hobbies: [firstHobby] } = user

console.log(firstHobby) // "reading"

We’re saying:

"From user, get the hobbies array, and from that array, get the first item."

                                       💀Advanced Destructuring 

✅ What You’ll Learn:

| Concept             | Description                               | Example                                          |
| ------------------- | ----------------------------------------- | ------------------------------------------------ |
| **Default Values**  | Provide fallback if value is missing      | `const { role = "user" } = person`               |
| **Renaming**        | Assign value to a different variable name | `const { name: fullName } = user`                |
| **Nested Defaults** | Defaults *inside* nested objects          | `const { profile: { bio = "N/A" } = {} } = user` |
| **Rest Operator**   | Collect remaining properties              | `const { name, ...rest } = user`                 |





























