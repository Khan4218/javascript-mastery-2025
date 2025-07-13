🧠 What is Event Delegation?
Event Delegation is a technique where a single parent element handles events for its child elements, using event bubbling.
Instead of attaching listeners to every child, you add one listener to the parent, and detect which child was clicked using .target.

🧩 Why use it?
✅ Fewer event listeners → better performance
✅ Useful for dynamic content (e.g., buttons added via JS)
✅ Clean & scalable structure

🔧 Basic Syntax:
document.getElementById("parent").addEventListener("click", (e) => {
  if (e.target.matches(".child")) {
    console.log("Child clicked:", e.target.textContent);
  }
});

e.target: The exact element that was clicked
matches(".child"): Filters by class, tag, or attribute

✅ Common Real-World Uses:
Clicking on items in a list
Handling menu selections
Deleting dynamic To-Do items
Toggling classes on dynamic buttons