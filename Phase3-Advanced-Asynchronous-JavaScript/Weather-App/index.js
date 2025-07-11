const button = document.getElementById("get-weather-btn");
const weatherBox = document.getElementById("weather-box");
const cityInput = document.getElementById("city-input");

button.addEventListener("click", async () => {
  const city = cityInput.value.trim();

  if (!city) {
    weatherBox.innerText = "⚠️ Please enter a city name.";
    return;
  }

  weatherBox.innerText = "Loading...";

  try {
    const apiKey = "942b37328457405f835faf552413ab57";
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    if (!response.ok) throw new Error("City not found");

    const data = await response.json();

    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const name = data.name;

    weatherBox.innerHTML = `
      🌍 City: ${name}<br>
      🌡️ Temperature: ${temperature}°C<br>
      ☁️ Condition: ${description}
    `;
  } catch (err) {
    weatherBox.innerText = `❌ ${err.message}`;
  }
});

