//when we want to get a value from input field we use DOM to get the html by id and then use a property called value
//const inputEl = document.getElementById("input-el").value
//if we want to push that into an array we use array.push("inputEl")

//innerHtml we use innerHtml to render HTML tags inside javaScript
//example documnet.getElementById("tag").innerHTML = "<tag> </tag>"
//we can use event listeners in the DOM tag like "<tag onclick='tag()'> </tag>"

//instead of innerHTML we can use createElement() and append
//const li = document.createElement("li") //creates element
//li.textContent = content  // display text content
//tag.append(li) // append to DOM by id


//to clear a input field we genrally set the value to a empty string .value = ""

//template literals `` are used for Multi lines and we can use variables or func using ${}

// we use localStorage to store the data the data should get stored in a localStorage
//we set it with localStorage.setItem("key", "value")
//we get it with localStorage.getItem("key")
//if we want to cleat the localStorage we use localStorage.clear();

//to store a string into localStorage we first convert it into a string using let array = []
// array = JSON.stringify(array)
// if we then want to convert it into a array we use
// array = JSON.parse(array)