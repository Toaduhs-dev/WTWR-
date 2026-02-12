import "./SideBar.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useContext } from "react";
import avatar from "../../images/avatarheader.svg";
function SideBar({ onProfileChange }) {
  const currentUser = useContext(CurrentUserContext);
  const name = currentUser?.name || "";
  const avatar = currentUser?.avatar || "";
  return (
    <div className="sidebar">
      <div className="sidebar__row">
        <img
          className="sidebar__avatar"
          src={avatar}
          alt="Daniel Kings Avatar"
        />
        <p className="sidebar__username">{name}</p>
      </div>
      <ul className="sidebar__nav">
        <li className="sidebar__nav-item">
          <span onClick={onProfileChange}>Change profile data</span>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
