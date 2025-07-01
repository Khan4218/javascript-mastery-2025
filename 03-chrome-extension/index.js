let myleads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function () {
  myleads.push(inputEl.value)
  console.log(myleads);

})

// Log out the items in the myLeads array using a for loop 

for (let i = 0; i < myleads.length; i++) {
  // ulEl.innerHTML += "<li>" + myleads[i] + "</li>"
  // create element
  // set text content
  // append to ul
  const li = document.createElement("li")
  li.textContent = myleads[i]
  ulEl.append(li)

}

