import {
  getLocationWeather,
  fetchUserInputData,
  fetchOtherCities,
} from "./apiCalls.js";

import {
  extractedData,
  extractedInputData,
  extractedOtherCitiesData,
} from "./extractedData.js";

import { updateWeatherDisplay } from "./ui.js";

const form = document.querySelector("#form");

const displayWeather = async () => {
  const rawdata = await getLocationWeather();

  console.log(extractedData(rawdata));
  const extractedGeoLocationData = extractedData(rawdata);
  updateWeatherDisplay(extractedGeoLocationData);
};
displayWeather();
fetchOtherCities();
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const userInput = e.target.elements.searchInput.value;
  const rawInputData = await fetchUserInputData(userInput);

  console.log(extractedInputData(rawInputData));

  // const otherCitiesData = await fetchOtherCities();
});
