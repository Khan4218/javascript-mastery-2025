//if we log before before intilizing it will give a reference error
//example
// console.log(myName)
// let myName = "khan";



let lap1 = 34
let lap2 = 33
let lap3 = 36

// Create a function that logs out the sum of all the lap times

function totalLapTime() {
    let totalTime = lap1 + lap2 + lap3
   console.log(totalTime);                
    
}

totalLapTime();   

console.log(totalTime); //reference error totalTime is not defined
// we cant use the let variable outside the block scope because let variables are block scoped 
