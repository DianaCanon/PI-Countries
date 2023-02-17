import { NavLink } from "react-router-dom"
import style from "./NavBar.module.css"

const NavBar = () => {
    return(
        <div className={style.containerNavBar}>
           <NavLink to="/home">HOME</NavLink>
           <NavLink to="/create">CREATE ACTIVITY</NavLink>
        </div>
    )
}

export default NavBar