import { Link } from "react-router-dom";
import { useContext } from "react";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import "./Header.css";
import "./Headerx.css";
import "./Navigation.css";
import logoPath from "../../images/Logo.png";
import avatarDefault from "../../images/avatarheader.svg";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const Header = ({
  weatherData,
  handleAddClick,
  handleRegisterClick,
  handleLoginClick,
  isLoggedIn,
  handleLogout,
}) => {
  const currentUser = useContext(CurrentUserContext);
  const name = currentUser?.name || "";
  const avatar = currentUser?.avatar || "";

  if (!weatherData) return null;
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/">
          <img src={logoPath} alt="WTWR Logo" className="header__logo" />
        </Link>
        <p className="header__date">
          {currentDate}, {weatherData.city}
        </p>
      </div>
      <nav className="navigation">
        {isLoggedIn ? (
          <ul className="navigation__container">
            <ToggleSwitch />
            <li>
              <button onClick={handleAddClick} className="navigation__button">
                + Add clothes
              </button>
            </li>
            <li>
              <Link to="/profile" className="navigation__link">
                {name}
                {avatar ? (
                  <img
                    className="navigation__user"
                    src={avatar}
                    alt="user avatar"
                  />
                ) : (
                  <span className="navigation__user navigation__user_placeholder">
                    {name ? name[0].toUpperCase() : "U"}
                  </span>
                )}
              </Link>
            </li>
            <li>
              <button onClick={handleLogout} className="navigation__button">
                Log Out
              </button>
            </li>
          </ul>
        ) : (
          <ul className="navigation__container">
            <ToggleSwitch />
            <li>
              <button
                onClick={handleRegisterClick}
                className="navigation__button"
              >
                Sign Up
              </button>
            </li>
            <li>
              <button className="navigation__button" onClick={handleLoginClick}>
                Log In
              </button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
