import style from "./Landing.module.css";
import { NavLink } from "react-router-dom";
import { Component } from "react";
//import ReactPlayer from "react-player";

class Landing extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={style.containerLanding}>
        <div>
          <video
            className={style.containerLanding}
            id="myVideo"
            control-preload="none"
            playing="true"
            /*  width="100%"
            height="100%" */
          />
          <source src="../../../imagen/mundo-5106.mp4" type="video/mp" />
        </div>

        <h1>Bienvenidos a la App de Countries</h1>
        <br />
        <NavLink to="./home">
          <button>HOME</button>
        </NavLink>
      </div>
    );
  }
}

export default Landing;
