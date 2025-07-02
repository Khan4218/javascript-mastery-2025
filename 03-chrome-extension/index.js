let myLeads = []

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteEl = document.getElementById("delete-btn")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage
  renderLeads();
}

deleteEl.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  renderLeads();

})


inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value)
  renderLeads();
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads))

})

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
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

