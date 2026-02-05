import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ClothesSection({
  clothingItems,
  onCardClick,
  weatherData,
  handleAddClick,
  handleLikeClick,
}) {
  const currentUser = useContext(CurrentUserContext);
  const userItems = clothingItems.filter(
    (card) => card.owner === currentUser?._id,
  );
  return (
    <section className="clothes-section">
      <div className="clothes-section__row">
        Your Items
        <button className="clothes-section__btn" onClick={handleAddClick}>
          + Add New
        </button>
      </div>
      <ul className="clothes-section__card-list">
        {userItems.map((card) => (
          <ItemCard
            key={card.id || card._id || card.name}
            card={card}
            onCardClick={onCardClick}
            onLikeClick={handleLikeClick}
          />
        ))}
      </ul>
    </section>
  );
}

export default ClothesSection;
