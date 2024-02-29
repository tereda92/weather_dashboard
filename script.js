function fetchWeatherData(city) {
    console.log("Fetching weather data for", city);
}

function handleSubmit(event) {
    event.preventDefault();
    const input = document.querySelector('.search__input');
    const city = input.value.trim();
    if (city) {
        fetchWeatherData(city);
    } else {
        console.log("Please enter a city name");
    }
}

const form = document.querySelector('.search__form');
form.addEventListener('submit', handleSubmit);
