import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import Header from "../Header/Header";
//import Headerx from "../Header/HeaderImprovement";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";
import AddItemModal from "../AddItemModal/AddItemModal";
import Profile from "../Profile/Profile";
import { DeleteConfirmationModal } from "../DeleteConfirmationModal/DelConMod";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";

import { apiKey, location } from "../../utils/constant";
import {
  filterDataFromWeatherAPI,
  getForecastWeather,
} from "../../utils/weatherApi";
import * as auth from "../../utils/auth";

import api from "../../utils/api";
import { defaultClothingItems } from "../../utils/ClothingItems";

const App = () => {
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [weatherData, setWeatherData] = useState({
    temperature: 999,
    day: true,
    condition: "",
  });
  const [clothingItems, setClothingItems] = useState([]);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);
  const [cardToDelete, setCardToDelete] = useState(null);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const generateRandomId = () => {
    return Math.random().toString(36).substring(2, 6);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setActiveModal("preview");
  };

  const handleAddItemSubmit = (item, resetForm) => {
    const newItem = {
      ...item,
      id: Date.now(), // use id as the primary key for json-server
    };
    api
      .addItem(newItem)
      .then((createdItem) => {
        setClothingItems([createdItem, ...clothingItems]);
        closeAllModals();
        resetForm();
      })
      .catch(console.error);
  };

  const handleLoginSubmit = (user, resetForm) => {
    auth
      .login(user)
      .then((res) => {
        if (res.token) {
          localStorage.setItem("jwt", res.token);
          setIsLoggedIn(true);
          // Fetch user info after login
          return auth.getUserInfo(res.token);
        }
        throw new Error("No token returned");
      })
      .then((userInfo) => {
        setCurrentUser(userInfo);
        closeAllModals();
        resetForm();
      })
      .catch(console.error);
  };

  const handleRegisterSubmit = (user, resetForm) => {
    auth
      .register(user)
      .then((res) => {
        if (res.token) {
          localStorage.setItem("jwt", res.token);
          setIsLoggedIn(true);
          // Fetch user info after registration
          return auth.getUserInfo(res.token);
        }
        throw new Error("No token returned");
      })
      .then((userInfo) => {
        setCurrentUser(userInfo);
        closeAllModals();
        resetForm();
      })
      .catch(console.error);
  };

  const openDeleteConfirmationModal = (card) => {
    setActiveModal("delete-confirmation");
    setCardToDelete(card);
  };

  const openRegistrationModal = () => {
    setActiveModal("signup");
  };

  const openLoginModal = () => {
    setActiveModal("login");
  };

  const handleCardDelete = () => {
    if (!selectedCard || !selectedCard._id) return;
    api
      .removeItem(selectedCard._id)
      .then(() => {
        setClothingItems((cards) =>
          cards.filter((item) => item._id !== selectedCard._id),
        );
        setCardToDelete(null);
        closeAllModals();
      })
      .catch(console.error);
  };

  const closeAllModals = () => {
    setActiveModal("");
  };

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setCurrentUser(null);
    // Optionally, redirect to home or login
  };

  useEffect(() => {
    if (!location.latitude || !location.longitude) return;

    const fetchWeather = () => {
      getForecastWeather(location, apiKey)
        .then((data) => {
          const filteredData = filterDataFromWeatherAPI(data);
          //console.log("Fetched weather data:", filteredData);
          setWeatherData(filteredData);
        })
        .catch((err) => {
          console.error("Weather fetch error:", err);
        });
    };

    fetchWeather();

    const intervalId = setInterval(fetchWeather, 600000);
    return () => clearInterval(intervalId);
  }, [location, apiKey]);

  useEffect(() => {
    api
      .getItemList()
      .then((items) => {
        setClothingItems(items.reverse());
      })
      .catch(() => {
        // Fallback: map 'link' to 'url' for compatibility
        const fallback = defaultClothingItems.map((item) => ({
          ...item,
          url: item.url || item.link,
        }));
        setClothingItems(fallback);
      });
  }, []);

  useEffect(() => {
    if (!activeModal) return;

    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        closeAllModals();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);

  // Check token on mount
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      auth
        .getUserInfo(token)
        .then((userInfo) => {
          setCurrentUser(userInfo);
          setIsLoggedIn(true);
        })
        .catch(() => {
          setIsLoggedIn(false);
          setCurrentUser(null);
          localStorage.removeItem("jwt");
        });
    }
  }, []);

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <div className="page__wrapper">
            <Header
              weatherData={weatherData}
              handleAddClick={() => setActiveModal("create")}
              handleRegisterClick={openRegistrationModal}
              handleLoginClick={openLoginModal}
              isLoggedIn={isLoggedIn}
              handleLogout={handleLogout}
            />
            <Routes>
              <Route
                path="/"
                element={
                  weatherData.temperature ? (
                    <Main
                      weatherData={weatherData}
                      clothingItems={clothingItems}
                      onCardClick={handleCardClick}
                    />
                  ) : (
                    <p>Loading...</p>
                  )
                }
              />
              <Route
                path="/profile"
                element={
                  clothingItems.length !== 0 && (
                    <Profile
                      clothingItems={clothingItems}
                      weatherData={weatherData}
                      onCardClick={handleCardClick}
                      handleAddClick={() => setActiveModal("create")}
                    />
                  )
                }
              />
            </Routes>
            <Footer />
          </div>
          <AddItemModal
            activeModal={activeModal}
            closeAllModals={closeAllModals}
            handleItemSubmit={handleAddItemSubmit}
          />
          <LoginModal
            activeModal={activeModal}
            closeAllModals={closeAllModals}
            handleLoginSubmit={handleLoginSubmit}
          />
          <RegisterModal
            activeModal={activeModal}
            closeAllModals={closeAllModals}
            handleRegisterSubmit={handleRegisterSubmit}
          />
          <ItemModal
            card={selectedCard || {}}
            onClose={closeAllModals}
            activeModal={activeModal}
            isOpen={activeModal === "preview"}
            onCardDelete={openDeleteConfirmationModal}
          />
          <DeleteConfirmationModal
            onClose={closeAllModals}
            onCardDelete={handleCardDelete}
            isOpen={activeModal === "delete-confirmation"}
          />
        </CurrentTemperatureUnitContext.Provider>
      </CurrentUserContext.Provider>
    </div>
  );
};

export default App;
