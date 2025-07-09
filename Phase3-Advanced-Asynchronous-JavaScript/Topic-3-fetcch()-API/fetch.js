// 🔹 Challenge 1: Fetch a Random Quote
// ✅ Task:
// Use the fetch() API to get a random quote from this public API:
// 📎 API Endpoint: https://api.quotable.io/random

// fetch("https://dummyjson.com/quotes/random")
//   .then(response => { return response.json() })
//   .then(data => { return console.log(`${data.quote} - ${data.author}`) })
//   .catch(err => { return console.log("fetch failed:", err) })

//code explanation 
//used a fetch js inbuilt func to get the random quotes https://dummyjson.com/quotes/random
//then used .then chains without forgetting to return each one of them 
//in first .then response converted to json object using response.json()
//then other .then i used to log data and another .then is to log err msges


// 🔹 Challenge 2: Show a Loading Message While Fetching
// You're going to:
// Log: "Fetching quote..." immediately
// Then fetch from https://dummyjson.com/quotes/random
// After the quote arrives, replace the message with:
// "Some inspirational quote" — Author Name

// fetch("https://dummyjson.com/quotes/random")
//   .then(msge => { return console.log("Fetching quote..."), msge })
//   .then(response => { return response.json() })
//   .then(data => {
//     console.clear();
//     console.log(`${data.quote} - ${data.author}`)
//   })

// so with fetch i fetched the API
//then i used a .then chain first to log fetching quote instead of writing in a variable
//then i used response and converted it into JSON
//then logged the data with there properties

// 🔹 Challenge 3: Pick a Random Quote Yourself
// Instead of relying on an endpoint that gives you one quote, this time:
// ✅ Task:
// Fetch all quotes from:
// https://dummyjson.com/quotes
// The response contains an array of quotes (data.quotes)
// From that array, select a random quote
// Log it like: "Quote text" — Author

fetch("https://dummyjson.com/quotes")
  .then(res => { return res.json() })
  .then((data) => {
    const randomIndex = Math.floor(Math.random() * data.quotes.length)
    const quote = data.quotes[randomIndex]
    console.log(`${quote.quote} - ${quote.author}`)
  }).catch(err => console.log("can't get API:", err))

  //code explanation 
  //here i used a fetch to get a API with a quotes
  //i used .then to convert response into json 
  //then to generate random nuumber to use as index i used Math.random to array.length 
  //then used rabdomIndex to get radom quotes and logged in .then 






