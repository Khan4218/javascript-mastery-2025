let myLeads = `["www.awesomelead.com"]`

// 1. Turn the myLeads string into an array
myLeads = JSON.parse(myLeads)
// 2. Push a new value to the array
myLeads.push("www.lindein.com")
// 3. Turn the array into a string again
myLeads = JSON.stringify(myLeads)
// 4. Console.log the string using typeof to verify that it's a string
console.log(typeof myLeads);

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")


localStorage.setItem("myLeads", "www.linkedin.com")
console.log(localStorage.getItem("myLeads"));
localStorage.clear();



inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value)
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

