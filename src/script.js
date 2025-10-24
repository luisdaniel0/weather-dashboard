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
  const extractedGeoLocationData = extractedData(rawdata);

  // Fetch the other cities data, then extract it
  const rawOtherCitiesData = await fetchOtherCities();
  const extractedOtherCities = extractedOtherCitiesData(rawOtherCitiesData);

  updateWeatherDisplay(extractedGeoLocationData, extractedOtherCities);
};
displayWeather();

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const userInput = e.target.elements.searchInput.value;
  const rawInputData = await fetchUserInputData(userInput);

  console.log(extractedInputData(rawInputData));
});
