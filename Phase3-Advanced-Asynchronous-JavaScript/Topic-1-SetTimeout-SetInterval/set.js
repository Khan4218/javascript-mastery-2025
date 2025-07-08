// 🔨 Coding Challenges: Timers
// 1. Delay Message

// // Use setTimeout to log "3 seconds passed!" after 3 seconds

// console.log("start");

// const delayTime = setTimeout(() => {
//   console.log(" 3 seconds passed");

// }, 3000)

// // 2. Repeating Reminder
// // Use setInterval to log "Time to hydrate!" every 5 seconds
// console.log("Drink water");

// const reminder = setInterval(() => {
//   console.log("Time to hydrate");

// }, 5000)



// 3. Stop the Repetition
// Use setInterval to log a number every second, but stop after 5 seconds
// Expected: 1, 2, 3, 4, 5 (then stops)
// let count = 0
// const logNumber = setInterval(() => {
//   console.log(count += 1);
//   if (count >= 5) {
//     clearInterval(logNumber)
//   }
// }, 1000)

// 🔹 Challenge 1: Countdown Timer
// Log numbers from 5 to 1, one per second, then log "Done!"
// let counter = 6
// const countDown = setInterval(() => {
//   console.log(counter -= 1);
//   if (counter === 0) {
//     clearInterval(countDown)
//     console.log("Done");
//   }

// }, 1000)

// 🔹 Challenge 2: Typing Effect
// Given a string, log one character every 300ms
// Input: "Akber"
// Output:
// A
// k
// b
// e
// r
// let character = "Akber"
// for (let i = 0; i < character.length; i++) {
//   setTimeout(() => console.log(character[i]), i * 300)

// }

// 🔹 Challenge 3: Auto Stop Reminder
// Log "Drink water" every 2 seconds, but stop automatically after 3 times
// let count = 0
// const reminder = setInterval(() => {
//   const msge = "Drink Water"
//   count++
//   console.log(msge);
//   if (count === 3) {
//     clearInterval(reminder)
//   }

// }, 2000)

// 🔹 Challenge 4: Digital Clock
// Log current time (HH:MM:SS) every second (like a live clock)

// const currentTime = setInterval(() => {
//   const now = new Date
//   console.log(now.toLocaleTimeString());

// }, 1000)










