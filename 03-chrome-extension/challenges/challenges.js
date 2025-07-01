// 1. Grab the box from the DOM and store it in a variable
// 2. Add a click event listener to the box
// 3. Log out "I want to open the box!" when it's clicked

let boxEl = document.getElementById("box")
boxEl.addEventListener("click", function () {
  console.log("boxed opened");

})