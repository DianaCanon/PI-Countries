import { useState } from "react";
import { ValidateActivity } from "../../components/Validate/validate";
import style from "./Form.module.css";
import axios from "axios";


const Form = () => {
  const [activity, setActivity] = useState({
    name: "",
    difficulty: 3,
    duration: "",
    season: ["Verano", "Otoño", "Invierno", "Primavera"],
    country: [],
  });

  const [errors, setErrors] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    country: "",
  });

  const handlerChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setActivity({ ...activity, [property]: value });
    setErrors(ValidateActivity({ ...activity, [property]: value }));
  };

  const handlerClick = (event) => {
    const { name, value } = event.target;
    setActivity({ ...activity, [name]: value });
    setErrors(ValidateActivity({ ...activity, [name]: value }));
  };

  const handlerSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/activities", activity)
      .then((res) => alert(res))
      .catch((err) => alert(err));
  };

  return (
    <div className={style.containerForm}>
      <form onSubmit={handlerSubmit}>
        <label htmlFor="name">Nombre de la actividad Turistica: </label>
        <input
          type="text"
          id="name"
          value={activity.name}
          name="name"
          placeholder="escribe nombre de la actividad..."
          onChange={handlerChange}
        ></input>
        {errors.name ? <span className={style.danger}>{errors.name}</span> : ""}

        <br />

        <label htmlFor="difficulty">Dificultad: </label>
        <input
          type="text"
          id="difficulty"
          value={activity.difficulty}
          name="difficulty"
          placeholder="Escala de 1 a 5"
          onChange={handlerChange}
        ></input>
        {errors.difficulty ? (
          <span className={style.danger}>{errors.difficulty}</span>
        ) : (
          ""
        )}
        <br />

        <label htmlFor="duration">Duración: </label>
        <input
          type="text"
          id="duration"
          value={activity.duration}
          name="duration"
          placeholder="Escribir numero de horas..."
          onChange={handlerChange}
        ></input>
        {errors.duration ? (
          <span className={style.danger}>{errors.duration}</span>
        ) : (
          ""
        )}
        <br />

        <label htmlFor="season">Temporada: </label>
        <select id="season" name="season" onClick={handlerClick}>
          <option value="Verano">Verano</option>
          <option value="Otoño">Otoño</option>
          <option value="Invierno">Invierno</option>
          <option value="Primavera">Primavera</option>
        </select>
        {errors.season ? (
          <span className={style.danger}>{errors.season}</span>
        ) : (
          ""
        )}
        <br />

        <label htmlFor="country">Pais(es) en que se practica: </label>
        <input
          type="text"
          id="country"
          value={activity.country}
          name="country"
          onChange={handlerChange}
        ></input>
        <br />
        {errors.country ? <span>{errors.country}</span> : ""}

        <button
          type="submit"
          variant="primary"
          disabled={
            errors.name ||
            errors.difficulty ||
            errors.duration ||
            errors.season ||
            errors.country
          }
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Form;
