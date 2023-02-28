import { NavLink } from "react-router-dom";
import style from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={style.containerNavBar}>
      <div>
        <NavLink to="/home" className={style.containerNavLink}>
          HOME
        </NavLink>
        <NavLink to="/create" className={style.containerNavLink}>
          CREATE ACTIVITY
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
