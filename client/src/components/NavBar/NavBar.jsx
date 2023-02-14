import { Link } from "react-router-dom"
import style from "./NavBar.module.css"

const NavBar = () => {
    return(
        <div className={style.containerNavBar}>
           <Link to="/home">HOME</Link>
           <Link to="/create">CREATE ACTIVITY</Link>
        </div>
    )
}

export default NavBar