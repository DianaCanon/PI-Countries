import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import style from "./Card.module.css";

export class Card extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={style.containerCard}>
        <div className={style.containerFlag}>
          <img
            src={this.props.img_flag}
            alt="imagen bandera"
            className={style.imagenFlags}
          />
        </div>
        <div className={style.containerFlag}>
          <NavLink
            to={`/detail/${this.props.id}`}
            className={style.containerText}
          >
            <h1>
              {this.props.name} {`(${this.props.id})`}
            </h1>
          </NavLink>
          <h3>{this.props.continent.toUpperCase()}</h3>
          <p>Population: {`${this.props.population}`}</p>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return { ...state };
};

export default connect(mapStateToProps, null)(Card);
