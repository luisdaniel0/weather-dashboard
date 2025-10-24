const handleSuccess = async (position) => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const address = await fetchAddress(latitude, longitude);
  const weather = await fetchWeather(latitude, longitude);
  return { weather, address, latitude, longitude };
};

const handleError = (error) => {
  console.error("Geolocation error:", error.message);
  throw error;
};

// main function. wraps everything in a promise so I can use .then() or await
export const getLocationWeather = () => {
  return new Promise((resolve, reject) => {
    //check if geolocation api is supported in browser, if NO reject the promise with an error
    if (!navigator.geolocation) {
      reject(new Error("Geolocation is not supported"));
      return;
    }

    //broswer api asks user for permission of current location and takes two callbacks
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        //returns obj with latitude and longitude
        try {
          const result = await handleSuccess(position); //process the api call
          resolve(result); //send data back to app
        } catch (err) {
          reject(err); //send error back to app
        }
      },
      (err) => {
        handleError(err);
        reject(err);
      }
    );
  });
};

//gets weather data. takes lat and long coordinates
export const fetchWeather = async (latitude, longitude) => {
  const apiKey = "FNQB4HDGXF3W4ELCDM7QU94BX";
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${latitude},${longitude}?key=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("City not found!");
    }
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.error("API call not working", error.message);
    return null;
  }
};

//get city name, takes lat and long coodinates, calls openstreetmap API to convert coordinates to city name
//return just the city name
const fetchAddress = async (latitude, longitude) => {
  const api = await fetch(
    `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
  );
  const response = await api.json();
  // console.log(response.address.city);

  const data = response.address.city;
  // console.log(data);
  return data;
};

//userInput weather api call

export const fetchUserInputData = async (location) => {
  const apiKey = "FNQB4HDGXF3W4ELCDM7QU94BX";
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("City not found!");
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error in APi call", error.message);
    return null;
  }
};

export const fetchOtherCities = async () => {
  const apiKey = "FNQB4HDGXF3W4ELCDM7QU94BX";
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timelinemulti?key=${apiKey}&locations=${encodeURIComponent(
    "los angeles|miami|las vegas"
  )}`;
  const otherCities = ["Los Angeles", "Las Vegas", "Miami"];

  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  console.log(response);
};
