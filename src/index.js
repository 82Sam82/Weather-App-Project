let currentTime = new Date();
let dateTime = document.querySelector("#date-time");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
let currentYear = currentTime.getFullYear();
let currentDay = days[currentTime.getDay()];
let currentMonth = months[currentTime.getMonth()];
let currentDate = currentTime.getDate();
let timeHours = currentTime.getHours();
if (timeHours < 10) {
  timeHours = `0${timeHours}`;
}
let timeMinutes = currentTime.getMinutes();
if (timeMinutes < 10) {
  timeMinutes = `0${timeMinutes}`;
}
dateTime.innerHTML = `${currentDay}, ${currentDate} ${currentMonth}, ${currentYear} <br> ${timeHours}:${timeMinutes}`;

function cityInputting(event) {
  event.preventDefault();

  let cityHeader = document.querySelector("#current-city");
  let citySearch = document.querySelector("#city-form");
  citySearch = citySearch.value;
  citySearch = citySearch.toLowerCase();
  citySearch = citySearch.trim();
  citySearch = citySearch.charAt(0).toUpperCase() + citySearch.slice(1);
  cityHeader.innerHTML = citySearch;

  searchCity(citySearch);
}
function searchCity(city) {
  let apiKey = "21de8f6fa0970f1e591a2f7adc448d14";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=21de8f6fa0970f1e591a2f7adc448d14&units=metric`;
  axios.get(apiUrl).then(getWeather);
}
function getWeather(response) {
  document.querySelector("#current-city").innerHTML = response.data.name;
  document.querySelector("#current-temp").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#weather-descript").innerHTML =
    response.data.weather[0].main;
}

let form = document.querySelector("#enter-city");
form.addEventListener("submit", cityInputting);
