// 💪 Challenges: sort() & reverse()

// 🧩 Challenge 1: Sort Numbers Ascending
// Task: Sort the array of scores from lowest to highest.

const scores = [80, 95, 60, 100, 70];
// Expected: [60, 70, 80, 95, 100]
const smallToLarge = scores.sort((a, b) => a - b)

console.log(smallToLarge);

// 🧩 Challenge 2: Reverse an Array
// Task: Reverse the order of letters.
const letters = ["a", "b", "c", "d"];
// Expected: ["d", "c", "b", "a"]

const reversed = letters.reverse()
console.log(reversed);

// 🧩 Challenge 3: Sort Strings Alphabetically and Then Reverse
// Task: Sort the names alphabetically, then reverse the result.

const names = ["Zara", "Aman", "Isha", "David"];
// Expected: ["Zara", "Isha", "David", "Aman"]

const sortNamesAndReverse = names.sort().reverse() //because this is a string i am not using a compare func
console.log(sortNamesAndReverse);

// 💡 Note:
// All three of these operations mutate the original array (i.e., they change the original scores, letters, or names), so if you ever need the original unchanged, clone it first using .slice() or spread [...].
