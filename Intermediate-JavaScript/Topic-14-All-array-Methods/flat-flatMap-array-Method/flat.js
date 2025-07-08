// 💪 Challenges: flat() & flatMap()
// 🧩 Challenge 1: Flatten One Level
// Task: Use .flat() to flatten the array into a single-level array.

const arr = [1, [2, 3], [4, 5]];
// Expected: [1, 2, 3, 4, 5]

const flatArr = arr.flat(1)
console.log(flatArr);

// 🧩 Challenge 2: Deep Flattening
// Task: Use .flat() to fully flatten this deeply nested array.

const deep = [1, [2, [3, [4, 5]]]];
// Expected: [1, 2, 3, 4, 5]
const deepFlatArray = deep.flat(Infinity)
console.log(deepFlatArray);


// 🧩 Challenge 3: Duplicate Letters with flatMap()
// Task: Use.flatMap() to return an array with each character duplicated from the word list.

const words = ["hi", "ok"];
// Expected: ['h', 'h', 'i', 'i', 'o', 'o', 'k', 'k']

const duplicate = words.flatMap(word => word.split("").flatMap(char => [char, char]))
console.log(duplicate);

