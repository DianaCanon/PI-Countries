import { NavLink } from "react-router-dom";
import style from "./NavBar.module.css";
import earth from "../../assets/homeTierra.gif";

const NavBar = () => {
  return (
    <div className={style.containerNavBar}>
      <div className={style.containerrBox}>
        <NavLink to="/home" className={style.containerNavLink}>
          HOME
        </NavLink>
        <NavLink to="/create" className={style.containerNavLink}>
          CREATE ACTIVITY
        </NavLink>
      </div>
      <div className={style.containerImag}>
        <NavLink to="/home">
          <img src={earth} alt="home" />
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
