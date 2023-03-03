import style from "./Landing.module.css";
import { NavLink } from "react-router-dom";
import { Component } from "react";
import videoCountry from "../../assets/mundo-5106.mp4";

class Landing extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={style.containerLanding}>
        <div>
          <video autoPlay="autoplay" loop="loop">
            <source src={videoCountry} type="video/mp4" />
          </video>
        </div>
        <div className={style.containerBox}>
          <h1>Bienvenidos a la App de Countries</h1>

          <NavLink to="./home" className={style.containerHome}>
            <h1>Home</h1>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Landing;
