export const fetchWeather = async () => {
  const apiKey = "FNQB4HDGXF3W4ELCDM7QU94BX";
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/london?key=${apiKey}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("City not found!");
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("API call not working", error.message);
    return null;
  }
};

export const fetchLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  } else {
    console.error("geolocation is not supported");
  }
};

const success = (position) => {
  console.log("latitude: ", position.coords.latitude);
  console.log("longtitude: ", position.coords.longitude);
};

const error = () => {
  console.error("No position available");
};
