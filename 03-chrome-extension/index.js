let myleads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function () {
  myleads.push(inputEl.value)
  console.log(myleads);

})


let listItems = "";

for (let i = 0; i < myleads.length; i++) {
  listItems += "<li>" + myleads[i] + "</li>"

}
ulEl.innerHTML += listItems
