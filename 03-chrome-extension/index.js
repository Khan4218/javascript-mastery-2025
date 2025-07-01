let myLeads = [];
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")


// 1. Save a key-value pair in localStorage
localStorage.setItem("myLeads", "www.linkedin.com")

// 2. Refresh the page. Get the value and log it to the console

console.log(localStorage.getItem("myLeads"));

// 3. Clear localStorage
localStorage.clear();
// HINTS:
// localStorage.setItem(key, value)
// localStorage.getItem(key)
// localStorage.clear()
// PS: both key and value need to be strings


inputBtn.addEventListener("click", function () {
  myleads.push(inputEl.value)
  renderLeads();
  inputEl.value = "";
})

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    // Wrap the lead in an anchor tag (<a>) inside the <li>
    // Can you make the link open in a new tab?
    listItems += `
    <li> 
     <a href="${myLeads[i]}" target = "_blank"> 
        ${myLeads[i]}
     </a>
    </li>
    `

  }
  ulEl.innerHTML = listItems
}

