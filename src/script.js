import {
  getLocationWeather,
  fetchUserInputData,
  fetchOtherCities,
} from "./apiCalls.js";
import { extractedData } from "./extractedData.js";

const displayWeather = async () => {
  const rawdata = await getLocationWeather();
  console.log(rawdata);
  console.log(extractedData(rawdata));
};
displayWeather();

const form = document.querySelector("#form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userInput = e.target.elements.searchInput.value;

  fetchUserInputData(userInput);
  fetchOtherCities();
});
