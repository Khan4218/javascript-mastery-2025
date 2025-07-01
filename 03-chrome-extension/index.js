let myleads = [];
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function () {
  myleads.push(inputEl.value)
  renderLeads();
})

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myleads.length; i++) {
    listItems += "<li>" + myleads[i] + "</li>"

  }
  ulEl.innerHTML = listItems
}

