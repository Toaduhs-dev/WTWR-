import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection({ clothingItems, onCardClick }) {
  return (
    <section className="clothes-section">
      <div className="clothes-section__row">
        Your Items
        <button className="clothes-section__btn">+ Add New</button>
      </div>
      <ul className="clothes-section__card-list">
        {cards
          .filter((card) => card.weather === weatherData.type)
          .map((card) => (
            <ItemCard key={card._id} card={card} onCardClick={onCardClick} />
          ))}
      </ul>
    </section>
  );
}

export default ClothesSection;
