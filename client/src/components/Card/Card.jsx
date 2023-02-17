import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { Link} from "react-router-dom";
import style from "./Card.module.css";

export class Card extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={style.containerCard}>
        <Link to={`/detail/${this.props.id}`}>
          <h2>Nombre: {this.props.name} {`(${this.props.id})`}</h2>
        </Link>
        <div className={style.containerFlag}>
          <img
            src={this.props.img_flag}
            alt="imagen bandera"
            className={style.imagenFlags}
          />
        </div>
        <h2>Continente: {this.props.continent}</h2>
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return { ...state };
};

export default connect(mapStateToProps, null)(Card);
