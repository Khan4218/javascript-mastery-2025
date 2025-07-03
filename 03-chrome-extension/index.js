let myLeads = []

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteEl = document.getElementById("delete-btn")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `
    <li> 
     <a href="${leads[i]}" target = "_blank"> 
        ${leads[i]}
     </a>
    </li>
    `

  }
  ulEl.innerHTML = listItems
}

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage
  render(myLeads);
}

deleteEl.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  render(myLeads);

})


inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value)
  render(myLeads);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads))

})



