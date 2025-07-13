let array = [1, 2, 3]
const numbers = array.reduce((acc, cur) => {
  acc.push(cur * 2)
  return acc
}, [])

console.log(numbers);



