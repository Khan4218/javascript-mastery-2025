let myleads = [];
let inputEl = document.getElementById("input-el")
let inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function () {
  myleads.push(inputEl.value)
  console.log(myleads);

})


