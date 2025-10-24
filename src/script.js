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

const displayWeather = async () => {
  const rawdata = await getLocationWeather();

  console.log(extractedData(rawdata));
};
displayWeather();

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const userInput = e.target.elements.searchInput.value;
  const rawInputData = await fetchUserInputData(userInput);
  console.log(extractedInputData(rawInputData));
  const otherCitiesData = await fetchOtherCities();
  console.log(extractedOtherCitiesData(otherCitiesData));
});
