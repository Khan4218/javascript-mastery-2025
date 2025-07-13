// 💻 Challenge 1: Dynamic List Item Click Logger
// 🎯 Objective:
// Create a list where clicking any <li> logs its text content using event delegation.
// ✅ Requirements:
// You have a <ul id="fruit-list"> in your HTML.
// Add multiple <li> items like Apple, Mango, Banana, etc.
// Attach only one event listener to the <ul> element.
// When any <li> is clicked, log its text (e.g., You clicked: Mango).

const listEl = document.getElementById("fruit-list")
listEl.addEventListener("click", (e) => {
  if (e.target.matches(".child")) {
    console.log("Child Clicked:", e.target.textContent);

  }
})

// 💻 Challenge 2: Delegated Delete Action

// 🎯 Objective:
// Build a list of items with Delete buttons, where clicking “Delete” removes the item — using event delegation.
// ✅ Requirements:
// Each item should be inside a <li> inside a <ul id="task-list">.
// Each <li> should contain a task name and a button: <button class="delete-btn">Delete</button>.
// Add only one event listener on the parent <ul>.
// When a Delete button is clicked, remove the corresponding <li> from the DOM

const taskListEl = document.getElementById("task-list")

taskListEl.addEventListener("click", (e) => {
  if (e.target.matches(".delete-btn")) {
    const li = e.target.closest("li")
    li.remove()
    console.log(`removed: ${li.textContent.trim()}`);
  }
})
