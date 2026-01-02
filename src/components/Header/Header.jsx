import { useState } from "react";

import "../Header/Header.css";

import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import logoPath from "../assets/HeaderItems/Logo.png";
import avatarDefault from "../assets/HeaderItems/avatarheader.svg";

const Header = ({ weatherData, handleAddClick }) => {
  if (!weatherData) return null;

  // Mobile implementation is optional
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

  // The Header component calculates the current date.
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  const username = "Daniel King";
  const avatar = "";

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpened(!isMobileMenuOpened);
  };

  return (
    <header className="header">
      <div className="header__container">
        <img src={logoPath} alt="WTWR logo" className="header__logo" />
        <p className="header__date">
          {currentDate}, {weatherData.city}
        </p>
      </div>
      <div
        className={`header__nav ${
          isMobileMenuOpened ? "header__nav_opened" : ""
        }`}
      >
        <ToggleSwitch />
        <button onClick={handleAddClick} className="header__add-button">
          + Add clothes
        </button>
        <div className="header__profile">
          <div className="header__user-name">{username}</div>
          {avatar ? (
            <img
              className="header__avatar"
              src={avatar || avatarDefault}
              alt="user avatar"
            />
          ) : (
            <span className="header__avatar header__avatar_none">
              {username?.toUpperCase().charAt(0) || ""}
            </span>
          )}
        </div>
        {isMobileMenuOpened && (
          <button
            className="header__mobile-close"
            onClick={handleMobileMenuClick}
          />
        )}
      </div>
      {!isMobileMenuOpened && (
        <button
          className="header__mobile-menu"
          onClick={handleMobileMenuClick}
        />
      )}
    </header>
  );
};

export default Header;
