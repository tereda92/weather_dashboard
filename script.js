document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.search__form');
    form.addEventListener('submit', handleSubmit);

    const refreshButton = document.querySelector('.weather-dashboard__refresh-button');
    refreshButton.addEventListener('click', openSearchModal);

    const closeButton = document.querySelector('.close-button');
    closeButton.addEventListener('click', closeModal);

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

    function openSearchModal() {
        document.getElementById('searchModal').style.display = 'block';
    }

    function closeModal() {
        document.getElementById('searchModal').style.display = 'none';
    }

    function fetchHourlyForecast() {}
    function fetchDailyForecast() {}
    function fetchMapData() {}
    function fetchAttireRecommendation() {}
    function fetchCurrentTemperature() {}
    function fetchWindData() {}
    function fetchUVIndex() {}
    function fetchRainfallData() {}
    function fetchPressureData() {}

    function updateDashboard() {
        fetchHourlyForecast();
        fetchDailyForecast();
    }

    updateDashboard(); 
});
