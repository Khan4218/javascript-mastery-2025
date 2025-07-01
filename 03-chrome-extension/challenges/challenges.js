// 1. Grab the box from the DOM and store it in a variable
// 2. Add a click event listener to the box
// 3. Log out "I want to open the box!" when it's clicked

let boxEl = document.getElementById("box")
boxEl.addEventListener("click", function () {
  console.log("boxed opened");

})


// template strings/literals

const recipient = "James"

// Refactor the email string to use template strings
// Create a new variable, sender, and set its value to your name
const sender = "Akbar"
// Use your sender variable instead of "Per"
// Break the email string into multiple lines
const email = `
Hey ${recipient}! 
How is it going? Cheers
${sender}
 `

console.log(email)