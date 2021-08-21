function displayTemperature(response) {
    console.log(response.data);
    let cityElement = document.querySelector("#city");
    let temperatureElement = document.querySelector("#temperature");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    cityElement.innerHTML = response.data.name.toUpperCase();
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    descriptionElement.innerHTML = response.data.weather[0].description;
    humidityElement.innerHTML = response.data.main.humidity;
    windElement.innerHTML = Math.round(response.data.wind.speed);
}


let apiKey = "754ef6f31ce264860cfc37f3accd1fdf";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Los Angeles&units=imperial&appid=${apiKey}`

axios.get(apiUrl).then(displayTemperature);