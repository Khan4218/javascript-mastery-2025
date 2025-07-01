let myleads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
let inputEl = document.getElementById("input-el")
let inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function () {
  myleads.push(inputEl.value)
  console.log(myleads);

})

// Log out the items in the myLeads array using a for loop 

for (let i = 0; i < myleads.length; i++) {
  console.log(myleads[i]);

}

