🔥 Final JavaScript Mastery Questions
🧠 Phase 1: Core Recap

Q1.What is the difference between let, const, and var in terms of scope and reassignment?
Ans: 
1.let and const is a block scoped variable whereas Var is a functional scoped variable
2.we cannot access let and const outside the blockscope
3.var can be access in the function scope and it is also a global scope variable

//improved Ans
1. `let` and `const` are block-scoped, meaning they're only accessible inside the block they are declared in. `var` is function-scoped.
2. `let` can be reassigned, `const` cannot be reassigned once declared, and `var` can be both redeclared and reassigned.
3. All three are hoisted, but `let` and `const` are in the **temporal dead zone**, meaning they can't be accessed before declaration. `var` can, though it will be `undefined`.


Q2.Explain how addEventListener works with anonymous vs. named functions.
Ans: 
1.first we have to get the  element using DOM 
2.Then we can assign the addEventListener("click",() => {})here the first param takes what we want to listen to 
and the 2nd param takes a call back func which we want to run when button is clicked

Correct Answer Should Include:
// Named function:
function handleClick() {
  console.log("Clicked!");
}
btn.addEventListener("click", handleClick);

// Anonymous function:
btn.addEventListener("click", function () {
  console.log("Clicked!");
});
Key Difference:
Named functions can be removed later using removeEventListener().
Anonymous functions cannot be removed, since you have no reference to them.

Q3.How would you dynamically create a <div> element, set its text to “Hello”, and append it to the body?
1.const divEl = document.createElement("div");
divEl.textContent = "Hello";
document.body.appendChild(divEl);


Q4. How is a callback different from a higher-order function?
1.callback function is a function that is passed into another function example(HOF)
2.HOF is a function which receives another function or returns another function

Q5. Without using .map(), transform [1, 2, 3] into [2, 4, 6] using .reduce().
Ans: 
let array = [1, 2, 3]
const numbers = array.reduce((acc, cur) => {
  acc.push(cur * 2)
  return acc
}, [])

console.log(numbers);
Q6. What does this return and why?
const obj = { name: "JS", greet() { return `Hi ${this.name}`; } };
const greetFn = obj.greet;
console.log(greetFn());
Ans: // Output:
"Hi undefined"
You're detaching the method from obj, so this becomes undefined (or window in non-strict mode). Therefore, this.name becomes undefined.

Q7. Explain the difference between ?? and || with an example.
// Nullish Coalescing (??)
const age = null;
console.log(age ?? 18); // 18

// Logical OR (||)
const age2 = 0;
console.log(age2 || 18); // 18 (because 0 is falsy)
console.log(age2 ?? 18); // 0 (because 0 is NOT null/undefined)
✅ ?? only checks for null or undefined
❌ || checks for any falsy value (0, '', false, etc.)


