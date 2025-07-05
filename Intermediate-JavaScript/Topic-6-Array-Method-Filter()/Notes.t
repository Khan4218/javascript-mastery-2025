🔹 .filter() — Introduction
.filter() is another array method like .map(), but instead of transforming every item, it removes items that don’t meet a certain condition.

📦 Syntax:

const result = array.filter(callback)
The callback should return:

true → to keep the item

false → to remove it

✅ Example:

const numbers = [1, 2, 3, 4, 5];
const even = numbers.filter(num => num % 2 === 0);
console.log(even); // [2, 4]

⚙️ Behind the scenes:
.map() = transforms → keeps all items

.filter() = removes unwanted items