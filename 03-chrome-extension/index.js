let myLeads = []

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteEl = document.getElementById("delete-btn")
const tabBTn = document.getElementById("tab-btn")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

const tabs = [
  { url: "https://www.linkedin.com/in/per-harald-borgen/" }
]

// 2. Listen for clicks on tabBtn. Log Per's LinkedIn URL to the console
tabBTn.addEventListener("click", function () {
  console.log(tabs[0].url);

})


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



