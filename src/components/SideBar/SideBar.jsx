import "./SideBar.css";
import avatar from "../../images/avatarheader.svg";
function SideBar() {
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
    </div>
  );
}

export default SideBar;
//
