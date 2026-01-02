//Fix//
import { useContext } from "react";
import "./WeatherCard.css";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import { weatherOptions, defaultWeatherOptions } from "../../utils/constant";

const WeatherCard = ({ weatherData }) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  const { temperature, day = true, condition = "clear" } = weatherData || {};

  const tempValue =
    temperature &&
    typeof temperature === "object" &&
    temperature[currentTemperatureUnit] !== undefined
      ? temperature[currentTemperatureUnit]
      : 0;

  const weatherOption = weatherOptions.find((option) => {
    return (
      option.day === day &&
      option.condition.toLowerCase() === condition.toLowerCase()
    );
  });

  const fallbackOption = defaultWeatherOptions[day ? "day" : "night"];
  const weatherOptionUrl = weatherOption?.url || fallbackOption.url;

  return (
    <section className="weather-card">
      <div className="weather-card__info">
        {weatherData.temperature}°{currentTemperatureUnit}
      </div>
      <img
        src={weatherOptionUrl}
        alt={`Weather background showing ${
          day ? "day" : "night"
        }time ${condition} conditions`}
        className="weather-card__image"
      />
    </section>
  );
};

export default WeatherCard;
