// 🔹 1. Method Call (obj.method())

const user = {
  name: "Akbar",
  greet() {
    console.log(this.name)
  }
}

user.greet() // 👉 "Akbar"

// Here, this = user

// ✅ Because it's called like user.greet()


//  🔹 2. Regular Function Call

function sayHi() {
  console.log(this.name)
}
sayHi()


// ❌ Not called by an object

// 🔒 In strict mode, this = undefined

// In non-strict mode, this = window (global object)

//🔹 3. Detached Method (Losing this)

const person = {
  name: "Akbar",
  getName() {
    return this.name
  }
}

const fn = person.getName
fn() // 👉 undefined ❌

// Function is detached from object

// So this is lost

//🔹 4. Fix with .bind()

const fb = person.getName.bind(person)
fn() // 👉 "Akbar"

// .bind(obj) fixes this permanently to the object


// 🔹 5. Arrow Functions (=>) and this

const dev = {
  name: "Akbar",
  greet() {
    const speak = () => {
      console.log(this.name)
    }
    speak()
  }
}

dev.greet() // 👉 "Akbar"

// 🔥 Arrow functions don’t have their own this

// They inherit this from their parent scope (called lexical binding)

// ❌ Never Use Arrow Functions as Object Methods

const wrong = {
  name: "Akbar",
  greet: () => {
    console.log(this.name)
  }
}

wrong.greet() // 👉 undefined ❌

// Here, this does not point to wrong, but to global or undefined.

// 🔹 6. this in Event Listeners

btn.addEventListener("click", function () {
  console.log(this) // 👉 the button element
})

// Regular functions: this = the element that triggered the event


btn.addEventListener("click", () => {
  console.log(this) // 👉 undefined / global ❌
})

// Arrow functions: this is inherited, not the element.

// 🔄 Real-World Fix Pattern

const users = {
  name: "Akbar",
  greet() {
    console.log("Hi " + this.name)
  }
}

const g = users.greet
g()             // ❌ undefined
g.bind(users)()  // ✅ "Hi Akbar"
