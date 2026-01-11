import { useState } from "react";
import {
  isRouteErrorResponse,
  Link,
  redirect,
  useNavigate,
} from "react-router-dom";

import "../Header/Header.css";

import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import logoPath from "../../images/Logo.png";
import avatarDefault from "../../images/avatarheader.svg";

const Header = ({ weatherData, handleAddClick }) => {
  if (!weatherData) return null;

  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);
  const navigate = useNavigate(); // Call the hook here at the top level

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  const username = "Daniel King";
  const avatar = "";

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpened(!isMobileMenuOpened);
  };

  const headerClick = () => {
    navigate("/"); // Use the returned navigate function
  };

  return (
    <header className="header">
      <div className="header__container">
        <img
          src={logoPath}
          alt="WTWR logo"
          className="header__logo"
          onClick={headerClick}
        />
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
        <Link className="header__link" to="/profile">
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
        </Link>
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
