import { useContext } from "react";
import "../../components/Main/Main.css";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import ItemCard from "../ItemCard/ItemCard";
import WeatherCard from "../WeatherCard/WeatherCard";

const Main = ({ weatherData, clothingItems, onCardClick, handleLikeClick }) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  if (!weatherData) return null;

  const currentTemp =
    weatherData.temperature && typeof weatherData.temperature === "object"
      ? (weatherData.temperature[currentTemperatureUnit] ?? 0)
      : 0;

  return (
    <main className="main">
      <WeatherCard weatherData={weatherData} />

      <section className="main__clothes">
        <p className="main__description">
          Today is {weatherData.temperature}°{currentTemperatureUnit} / You
          might want to wear:
        </p>

        <ul className="main__items">
          {clothingItems.map((card) => (
            <ItemCard
              key={card._id}
              card={card}
              onCardClick={onCardClick}
              onLikeClick={handleLikeClick}
            />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Main;
