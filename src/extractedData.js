// import {} from "./apiCalls.js";
export const extractedData = (rawData) => {
  return {
    location: rawData.address,
    current: {
      temp: rawData.weather.currentConditions.temp,
      feelsLike: rawData.weather.currentConditions.feelslike,
      humidity: rawData.weather.currentConditions.humidity,
      wind: rawData.weather.currentConditions.windspeed,
      sunset: rawData.weather.currentConditions.sunset,
      sunrise: rawData.weather.currentConditions.sunrise,
      icon: rawData.weather.currentConditions.icon,
    },
    forecast: rawData.weather.days.slice(1, 8).map((day) => {
      return {
        temp: day.temp,
        feelsLike: day.feelslike,
        humidity: day.humidity,
        wind: day.windspeed,
        sunset: day.sunset,
        sunrise: day.sunrise,
        icon: day.icon,
      };
    }),
  };
};
