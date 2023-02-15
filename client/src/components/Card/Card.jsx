import { Component } from "react";
import { connect } from "react-redux";
import style from "./Card.module.css";

export class Card extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={style.containerCard}>
        <h2>Nombre: {this.props.name}</h2>
        <div className={style.containerFlag}>
          <img src={this.props.img_flag} alt="imagen bandera" className={style.imagenFlags}/>
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
