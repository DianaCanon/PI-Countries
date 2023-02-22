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
        {/* <div>
          <video
            url="../../../imagen/mundo-5106.mp4"
            playing
            width="100%"
            height="100%"
          />
        </div> */}

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
