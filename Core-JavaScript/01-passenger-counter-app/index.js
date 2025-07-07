// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count

let count = 0 //camelCase used in variable name
let countEl = document.getElementById("count-el") //pass in arguments
let saveEl = document.getElementById("save-el")
function increment () {
    count += 1
    countEl.textContent = count
 
}

// 1. Create a function, save(), which logs out the count when it's called

function save () {
let countStr = count + " - ";
 saveEl.textContent += countStr;
 countEl.textContent = 0;
 count = 0;
}














