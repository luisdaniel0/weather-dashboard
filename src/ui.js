export const updateWeatherDisplay = (processedData) => {
  const userLocation = document.querySelector(".currentLocation");
  const currentTemp = document.querySelector(".temp");
  const feelsLike = document.querySelector(".feelsLike");
  const wind = document.querySelector(".wind");
  const humidity = document.querySelector(".humidity");
  const sunrise = document.querySelector(".sunrise");
  const sunset = document.querySelector(".sunset");
  const upcomingWeather = document.querySelector(".upcoming-weather");
  const otherCities = document.querySelector(".other-cities");

  userLocation.textContent = processedData.location;
  currentTemp.textContent = processedData.current.temp;
  feelsLike.textContent = processedData.current.feelsLike;
  wind.textContent = processedData.current.wind;
  humidity.textContent = processedData.current.humidity;
  sunrise.textContent = processedData.current.sunrise;
  sunset.textContent = processedData.current.sunset;

  upcomingWeather.innerHTML = "";
  processedData.forecast.forEach((day) => {
    const forecastTemp = document.createElement("div");
    forecastTemp.classList.add("forecast-temp");
    const forecastFeelsLike = document.createElement("div");
    forecastFeelsLike.classList.add("forecast-feelsLike");
    const forecastHumidity = document.createElement("div");
    forecastHumidity.classList.add("forecast-humidity");
    const forecastWind = document.createElement("div");
    forecastWind.classList.add("forecast-wind");
    const forecastSunrise = document.createElement("div");
    forecastSunrise.classList.add("forecast-sunrise");
    const forecastSunset = document.createElement("div");
    forecastSunset.classList.add("forecast-sunset");
    const forecastIcon = document.createElement("div");
    forecastIcon.classList.add("forecast-icon");

    const forecast = document.createElement("div");
    forecast.classList.add("forecast-cards");

    forecastTemp.textContent = day.temp;
    forecast.appendChild(forecastTemp);

    forecastFeelsLike.textContent = day.feelsLike;
    forecast.appendChild(forecastFeelsLike);

    forecastHumidity.textContent = day.humidity;
    forecast.appendChild(forecastHumidity);

    forecastWind.textContent = day.wind;
    forecast.appendChild(forecastWind);

    forecastSunrise.textContent = day.sunrise;
    forecast.appendChild(forecastSunrise);

    forecastSunset.textContent = day.sunset;
    forecast.appendChild(forecastSunset);

    forecastIcon.textContent = day.icon;
    forecast.appendChild(forecastIcon);

    upcomingWeather.appendChild(forecast);
  });
};
