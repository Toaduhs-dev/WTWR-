import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection({
  clothingItems,
  onCardClick,
  weatherData,
  handleAddClick,
}) {
  console.log(onCardClick);
  return (
    <section className="clothes-section">
      <div className="clothes-section__row">
        Your Items
        <button className="clothes-section__btn" onClick={handleAddClick}>
          + Add New
        </button>
      </div>
      <ul className="clothes-section__card-list">
        {clothingItems
          .filter((card) => card.weather === weatherData.type)
          .map((card) => (
            <ItemCard key={card._id} card={card} onCardClick={onCardClick} />
          ))}
      </ul>
    </section>
  );
}

export default ClothesSection;
