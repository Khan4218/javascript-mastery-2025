// Log out "Button clicked!" when the user clicks the "SAVE INPUT" button

function saveLead() {
  console.log("button clicked");

}


let inputBtn = document.getElementById("input-btn")
inputBtn.addEventListener("click", function () {
  console.log("button clicked from Event Listener");

})