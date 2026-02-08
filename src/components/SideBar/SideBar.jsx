import "./SideBar.css";
import avatar from "../../images/avatarheader.svg";
function SideBar({ onProfileChange }) {
  return (
    <div className="sidebar">
      <div className="sidebar__row">
        <img
          className="sidebar__avatar"
          src={avatar}
          alt="Daniel Kings Avatar"
        />
        <p className="sidebar__username">Daniel King</p>
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
//
