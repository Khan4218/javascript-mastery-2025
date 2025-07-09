🔸 fetch() API (real HTTP requests)

✅ What is fetch()?
fetch() is a built-in JavaScript function used to make network requests (GET, POST, etc.) to servers.
You can use it to:
Get data from APIs (like weather, quotes, user profiles)
Send data to servers (form submissions, feedback)
Talk to REST APIs (like GitHub, OpenWeather, etc.)

🔹 Basic Syntax:
fetch("https://example.com/api")
  .then(response => response.json()) // Converts to usable JS object
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));

🧠 Key Concepts:
| Concept                    | Meaning                          |
| -------------------------- | -------------------------------- |
| `fetch(url)`               | Starts the network request       |
| `.then(res => res.json())` | Parses response body as JSON     |
| `.catch(err => ...)`       | Handles any network error        |
| `GET`                      | Default HTTP method to read data |

🔁 Real Example:
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error("Something went wrong:", err));
📦 This would fetch a fake blog post from a public testing API.
