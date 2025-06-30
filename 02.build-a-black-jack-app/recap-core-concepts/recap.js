//Objects Recap challenge

// Create a person object that contains three keys: name, age, and county.
// Use yourself as an example to set the values for name, age, and country

// Create a function, logData(), that uses the person object to create a
// string in the following format: 
// "Per is 35 years old and lives in Norway"

// Call the logData() function to verify that it works


let person = {
  name: "Akbar",
  age: 23,
  country: "India"
}

function logData() {
  let personDesc = person.name + " is " + person.age + " years old and lives in " + person.country
  return personDesc
}

console.log(logData());


// if else recap and practice
let age = 28

// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable

if (age < 6) {
  console.log("free");

} else if (age < 18) {
  console.log("child discount");

} else if (age < 27) {
  console.log("student discount");

} else if (age < 67) {
  console.log("full price");

} else {
  console.log("senior citizen discount");

}

//for loops recap and practice

// let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]

/* Use a for loop to log the following to the console:

The 5 largest countries in the world:
- China
- India
- United States
- Indinesia
- Pakistan
*/
// let title = "The 5 largest countries in the world:"
// console.log(title);
// for (let i = 0; i < largeCountries.length; i++) {
//   console.log(" - " + largeCountries[i]);

// }

// array methods push,pop,unshift,shift

let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]

// You need to help me fixup the largeCountries array so that
// China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()

largeCountries.pop();//removes last index
largeCountries.push("Pakistan");//adds last index
largeCountries.shift(); //removes index 0 
largeCountries.unshift("China") // adds index 0

console.log(largeCountries);
