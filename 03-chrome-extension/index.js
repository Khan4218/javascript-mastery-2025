let myleads = [];
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function () {
  myleads.push(inputEl.value)
  renderLeads();
  inputEl.value = "";
})

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myleads.length; i++) {
    // Wrap the lead in an anchor tag (<a>) inside the <li>
    // Can you make the link open in a new tab?
    listItems += `
    <li> 
     <a href="${myleads[i]}" target = "_blank"> 
        ${myleads[i]}
     </a>
    </li>
    `

  }
  ulEl.innerHTML = listItems
}

