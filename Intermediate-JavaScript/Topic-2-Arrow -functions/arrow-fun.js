// ✏️ Practice Task for You
// Write an arrow function that:

// Takes a name as a parameter

// Returns Welcome back, [name]! using template strings

// Try both one-liner and multi-line forms

//Multi liner code 
const user = (name) => {
  let sen = `Welcome back, ${name}!`
  return sen
}

console.log(user("Akbar"));

//one liner 

const userOne = name => `Welcome back, ${name}!`
console.log(userOne("Khan"));

// ✅ Q1:
// Rewrite this regular function as a one-liner arrow function:

function double(x) {
  return x * 2
}
//rewriting 
const double = (x) => x * 2
console.log(double(1));

// ✅ Q2:
// What’s the output?

const greet = name => `Hi, ${name}!`
console.log(greet()) // Hi, Undefined

// ✅ Q3:
// Fix this arrow function to return the sum:

const add = (a, b) => {
  return a + b
}
console.log(add(3, 4)) // should print 7

// ✅ Q4:
// What will this log ?

const person = {
  name: "Akbar",
  sayHi: () => {
    console.log("Hello " + this.name)
  }
}
person.sayHi()  //Hello, Undefined

// ✅ Q5:
// Which is better for using as a method in an object — arrow function or regular function? Why?
//the regular function is better to use as a method because this doesnt rely on another fun whereas arrow func relys on another func and gives undefined 



