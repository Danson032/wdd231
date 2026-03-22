const tempEl = document.getElementById("temp");
const descEl = document.getElementById("description");
const forecastEl = document.getElementById("forecast");

const API_KEY = "157655abc39ff1eceb041114945dbbdb"; 

const lat = -1.2944357789391776;
const lon = 36.82059988823218;


const currentURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;

async function getWeather() {
    try {
        const currentResponse = await fetch(currentURL);
        if (!currentResponse.ok) throw new Error("Failed current weather");

        const currentData = await currentResponse.json();

        tempEl.textContent = Math.round(currentData.main.temp);
        descEl.textContent = capitalizeWords(currentData.weather[0].description);

        const forecastResponse = await fetch(forecastURL);
        if (!forecastResponse.ok) throw new Error("Failed forecast");

        const forecastData = await forecastResponse.json();

        displayForecast(forecastData.list);

    } catch (error) {
        console.error("Weather error:", error);
        tempEl.textContent = "--";
        descEl.textContent = "Weather unavailable";
        forecastEl.innerHTML = "<li>Forecast unavailable</li>";
    }
}

function displayForecast(data) {
    forecastEl.innerHTML = "";

    let daysAdded = 0;

    data.forEach(item => {
        if (item.dt_txt.includes("12:00:00") && daysAdded < 3) {
            const li = document.createElement("li");

            const date = new Date(item.dt_txt);
            const dayName = date.toLocaleDateString(undefined, { weekday: "long" });

            const temp = Math.round(item.main.temp);
            const desc = capitalizeWords(item.weather[0].description);

            li.textContent = `${dayName}: ${temp}°C - ${desc}`;
            forecastEl.appendChild(li);

            daysAdded++;
        }
    });
}

function capitalizeWords(text) {
    return text.replace(/\b\w/g, letter => letter.toUpperCase());
}

getWeather();