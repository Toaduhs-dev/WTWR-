const location = { latitude: "47.518863", longitude: "-121.877599" };
const apiKey = "33c54a948a245e844521dc407a49543e";

const weatherOptions = [
  {
    day: true,
    condition: "clear",
    url: new URL("../assets/day/clear.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "clouds",
    url: new URL("../assets/day/clouds.png", import.meta.url).href,
  },

  {
    day: true,
    condition: "fog",
    url: new URL("../assets/day/fog.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "rain",
    url: new URL("../assets/day/rain.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "snow",
    url: new URL("../assets/day/snow.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "thunderstorm",
    url: new URL("../assets/day/thunderstorm.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "clear",
    url: new URL("../assets/day/clear.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "clouds",
    url: new URL("../assets/day/clouds.png", import.meta.url).href,
  },

  {
    day: false,
    condition: "fog",
    url: new URL("../assets/day/fog.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "rain",
    url: new URL("../assets/day/rain.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "snow",
    url: new URL("../assets/day/snow.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "thunderstorm",
    url: new URL("../assets/day/thunderstorm.png", import.meta.url).href,
  },
];

const defaultWeatherOptions = {
  day: {
    url: new URL("../assets/day/default.png", import.meta.url).href,
  },
  night: {
    url: new URL("../assets/night/default.png", import.meta.url).href,
  },
};

export { location, apiKey, weatherOptions, defaultWeatherOptions };
