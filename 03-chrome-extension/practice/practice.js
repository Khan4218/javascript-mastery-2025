// If possible, use const. If not, use let.

// Which variables below should be changed from let to const?

// The customer wants to order some stuff. Here are the details:
const basePrice = 520
const discount = 120
let shippingCost = 12
let shippingTime = "5-12 days"

// Whops! Turns out the shipping will be a bit more complex
shippingCost = 15
shippingTime = "7-14 days"

// Calculating the full price
const fullPrice = basePrice - discount + shippingCost

// Finally, notifying the customer
console.log("Total cost: " + fullPrice + ". It will arrive in " + shippingTime)

//innerHtml practice

// Use .innerHTML to render a Buy! button inside the div container

const containerEl = document.getElementById("container")
console.log(containerEl);

containerEl.innerHTML = "<button onclick='buy()'> Buy! </button>"

// When clicked, render a paragraph under the button (in the container)
// that says "Thank you for buying!"

function buy() {
  containerEl.innerHTML += "<p> Thank You For Buying!</p>"
}


// 1. Turn the myLeads string into an array
myLeads = JSON.parse(myLeads)
// 2. Push a new value to the array
myLeads.push("www.lindein.com")
// 3. Turn the array into a string again
myLeads = JSON.stringify(myLeads)
// 4. Console.log the string using typeof to verify that it's a string
console.log(typeof myLeads);
