import style from "./Landing.module.css";
import { NavLink } from "react-router-dom";
import { Component } from "react";

class Landing extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={style.containerLanding}>
        <h1>Bienvenidos a la App de Countries</h1>
        <br />
        <NavLink to="./home">
          <button>HOME</button>
        </NavLink>
      </div>
    );
  }
}

export default Landing