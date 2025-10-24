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

export const extractedInputData = (rawData) => {
  return {
    location: rawData.address,
    current: {
      temp: rawData.currentConditions.temp,
      feelsLike: rawData.currentConditions.feelslike,
      humidity: rawData.currentConditions.humidity,
      wind: rawData.currentConditions.windspeed,
      sunset: rawData.currentConditions.sunset,
      sunrise: rawData.currentConditions.sunrise,
      icon: rawData.currentConditions.icon,
    },
    forecast: rawData.days.slice(1, 8).map((day) => {
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

export const extractedOtherCitiesData = (rawData) => {
  return {
    location: rawData.locations.map((location) => {
      return {
        address: location.address,
        temp: location.days[0].temp,
        condition: location.days[0].conditions,
        icon: location.days[0].icon,
      };
    }),
  };
};
