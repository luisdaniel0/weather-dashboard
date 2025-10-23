import { getLocationWeather } from "./apiCalls.js";
import { extractedData } from "./extractedData.js";

const displayWeather = async () => {
  const rawdata = await getLocationWeather();
  console.log(rawdata);
  console.log(extractedData(rawdata));
};
displayWeather();
