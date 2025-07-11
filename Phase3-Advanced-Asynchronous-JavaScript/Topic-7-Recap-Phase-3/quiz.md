🔁 Phase 3 Recap Quiz (10 Questions – MCQ)

1. What does setTimeout() return?
A. Nothing
B. The delayed result
C. A timer ID
D. A Promise
Ans:C The set timeout returns a timer id which we can use to clear the time 

2. How can you stop a setInterval() loop?
A. clearTimeout()
B. stopInterval()
C. return false
D. clearInterval()
Ans : D we use a clearInterval() to clear or stop the setInterval() loop

3. What’s the output order?
console.log("A");
setTimeout(() => console.log("B"), 0);
console.log("C");
A. A B C
B. B A C
C. A C B
D. C A B
Ans: C the code runs in synchornos fomrat from top to bottom so first A then c becuase of a asynchronous func
it runs after even if the timer is 0

4. What does fetch() return immediately?
A. JSON
B. Promise
C. Response object
D. DOM Node
Ans: B fetch returns a promise with fetch we can get the Api 

5. Which statement is true about .then() and .catch()?
A. .catch() must come before .then()
B. Both are optional
C. .then() can only be used once
D. Only .catch() returns a Promise
Ans: B both are optional

6. What happens if an error occurs inside an async function but there is no try/catch?
A. It throws a syntax error
B. It silently fails
C. It returns a rejected Promise
D. It always retries
Ans: C 

7. Choose the correct chaining:
A. fetch().then().await().catch()
B. fetch().then().then().catch()
C. await fetch().then().catch()
D. fetch().await().then().catch()
Ans: B

8. What will this output?
Promise.reject("Oops")
  .then(res => console.log(res))
  .catch(err => console.log(err));
A. nothing
B. Oops
C. res
D. Uncaught Error
Ans: B it returns oops because we are rejecting a promise which goes to catch

9. In async/await, what does await pause?
A. All future code
B. The entire program
C. Only the enclosing async function
D. Nothing – it's just syntax sugar

Ans: it only pauses the enclosing async func if we run anything outside the aysnc it gets display first 

10. What is required to use await?
A. Only inside a .then()
B. Inside a function
C. Inside a Promise
D. Inside an async function
Ans : D we use await inside a async func
