document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'a95f542405aaa2cf91ffc213f2efa40c';
    const form = document.querySelector('.search__form');
    form.addEventListener('submit', handleSubmit);

    const refreshButton = document.querySelector('.weather-dashboard__refresh-button');
    refreshButton.addEventListener('click', openSearchModal);

    const closeButton = document.querySelector('.close-button');
    closeButton.addEventListener('click', closeModal);

    function fetchWeatherData(query) {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?${query}&appid=${apiKey}&units=metric`;
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                updateDashboard(data);
            })
            .catch(error => console.error('Failed to fetch weather data:', error));
    }

    function handleSubmit(event) {
        event.preventDefault();
        const input = document.querySelector('#locationInput');
        const inputValue = input.value.trim();
        const query = isNaN(inputValue) ? `q=${inputValue}` : `zip=${inputValue}`;
        if (inputValue) {
            fetchWeatherData(query);
            closeModal();
        } else {
            console.log("Please enter a city name or zip code");
        }
    }

    function openSearchModal() {
        document.getElementById('searchModal').style.display = 'block';
    }

    function closeModal() {
        document.getElementById('searchModal').style.display = 'none';
    }

    function updateDashboard(data) {
        document.querySelector('.weather-dashboard__title').textContent = `${data.name}, ${data.sys.country}`;
        document.querySelector('.forecast__block--temperature').innerHTML = `Today's Temperature: ${data.main.temp}°C`;
        document.querySelector('.forecast__block--wind').innerHTML = `Wind: ${data.wind.speed} m/s`;
        document.querySelector('.forecast__block--uv').innerHTML = `UV Index: Placeholder`;
    }
});
