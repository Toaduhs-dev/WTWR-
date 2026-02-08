import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
function Profile({
  clothingItems,
  onCardClick,
  weatherData,
  handleAddClick,
  handleLikeClick,
  onProfileChange,
}) {
  return (
    <main className="profile">
      <section className="profile-sidebar">
        <SideBar onProfileChange={onProfileChange} />
      </section>
      <section className="profile-clothes">
        <ClothesSection
          clothingItems={clothingItems}
          onCardClick={onCardClick}
          weatherData={weatherData}
          handleAddClick={handleAddClick}
          handleLikeClick={handleLikeClick}
        />
      </section>
    </main>
  );
}

export default Profile;
