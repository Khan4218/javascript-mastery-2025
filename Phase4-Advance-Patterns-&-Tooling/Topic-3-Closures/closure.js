// 💻 Challenges – JavaScript Closures
// 🔹 Challenge 1: Create a Counter
// Write a function that returns another function.
// Each time the returned function is called, it should increment and return a count value starting from 1.

function count() {
  let count = 0;
  return function () {
    count++
    return count
  }

}

const counterA = count()
console.log(counterA());
console.log(counterA());

// 🔹 Challenge 2: Private Message
// Write a function that accepts a string (a message).
// It should return a function that, when called, returns that message.
// The original message variable should be inaccessible directly from outside

function message(str) {
  return function () {
    return str

  }
}

const diplayMessage = message("Akbar")
console.log(diplayMessage());

// 🔹 Challenge 3: Create a Bank Account
// Write a function that creates a “bank account” with:
// a private balance,
// and returned functions to deposit(amount), withdraw(amount), and getBalance().
// The balance should only be changed through these inner functions

function bankAccount() {
  let balance = 0

  function deposit(amount) {
    balance += amount
    return balance
  }
  function withdraw(amount) {
    if (amount > balance) {
      return "Insufficient Funds"
    }
    balance -= amount
    return balance
  }

  function getBalance() {
    return balance

  }

  return {
    deposit,
    withdraw,
    getBalance
  }

}


const acc = bankAccount()
console.log(acc.deposit(10000));
console.log(acc.withdraw(1000));
console.log(acc.getBalance());

//code explanation
//  i have cretaed a func bank acoount and assigned a balance variable to 0
// inside the banAccount func i returned three func which will deposit the amount
//withdraw the amount and finally a get balance func logic is applied accordingly
//i have returned that func as a object
//when calling the bankAccount func i used method with which i can call mini func
//i passed my deposut withdraw numbers or amount as a parameter
//here let balance is a variable which is safe and not displayed to user the return func gets diplayed 

// 🎯 Task:
// Build a createCart() function that returns an object with methods to manage a private cart.
// 📋 Requirements:
// A private array items inside createCart (not accessible directly).
// The returned object should include:
// addItem(itemName, price) — adds an item to the cart.
// removeItem(itemName) — removes item by name.
// getTotal() — returns the total price of all items.
// getItems() — returns the list of item names (just names).

function createCart() {
  let cartItems = []
  let total = 0;
  function addItem(itemName, price) {
    const addingItems = cartItems.push({ name: itemName, price })
    total += price
    return addingItems

  }


  function removeItem(itemName) {
    const index = cartItems.findIndex(item => item.name === itemName)
    if (index !== -1) {
      total -= cartItems[index].price
      let removedItem = cartItems.splice(index, 1)
      return removedItem

    }


  }
  function getTotal() {
    return total
  }

  function getItems() {
    return cartItems.map(p => p.name)
  }
  return {
    addItem,
    removeItem,
    getTotal,
    getItems
  }
}

const cart = createCart()
cart.addItem("PineApple", 18)
cart.addItem("Banana", 5)
cart.removeItem("Banana")
console.log(cart.getItems());
console.log(cart.getTotal());








