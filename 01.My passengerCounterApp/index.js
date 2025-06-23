// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count

let count = 0 
//camelCase used in variable name
let countEl = document.getElementById("count-el") //pass in arguments

function increment () {
    count = count + 1
    countEl.innerText = count
 
}

// 1. Create a function, save(), which logs out the count when it's called


function save () {
    console.log(count);
    
}
















