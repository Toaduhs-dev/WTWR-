import "./SideBar.css";
import avatar from "../../images/avatarheader.svg";
function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar__row">
        <p className="sidebar__username">Daniel King</p>
        <img
          className="sidebar__avatar"
          src={avatar}
          alt="Daniel Kings Avatar"
        />
      </div>
    </div>
  );
}

export default SideBar;
