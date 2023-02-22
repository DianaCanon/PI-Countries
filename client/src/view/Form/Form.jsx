import { useEffect, useState } from "react";
import { ValidateActivity } from "../../components/Validate/validate";
import style from "./Form.module.css";
import { useDispatch, useSelector } from "react-redux";
import { createActivity, getAllCountries } from "../../redux/actions";
import Select from "react-select";

const Form = () => {
  const [selectedCountries, setSelectedCountries] = useState([]);

  const [activity, setActivity] = useState({
    name: "",
    difficulty: 3,
    duration: "",
    season: "",
    idCountry: [],
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

  const countries = useSelector((state) => state.countries);
  const [options, setOptions] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    if (countries.length === 0) {
      dispatch(getAllCountries());
    }
    setOptions(
      ...options,
      countries.map((c) => {
        return { label: c.name, value: c.IdCountry };
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countries]);

  const handlerSubmit = (event) => {
    event.preventDefault();
    activity.idCountry = selectedCountries.map((c) => c.value);
    dispatch(createActivity(activity));
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
        <select
          id="season"
          name="season"
          onClick={handlerChange}
          options={activity.season}
        >
          <option value={null} label="Elige una temporada"></option>
          <option label="Verano" value="Verano"></option>
          <option label="Otoño" value="Otoño"></option>
          <option label="Invierno" value="Invierno"></option>
          <option value="Primavera">Primavera</option>
        </select>
        {errors.season ? (
          <span className={style.danger}>{errors.season}</span>
        ) : (
          ""
        )}
        <br />

        <label htmlFor="countries">Pais(es) en que se practica: </label>
        <Select
          defaultValue={selectedCountries}
          onChange={setSelectedCountries}
          isMulti
          isSearchable
          name="countries"
          options={options}
        />
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
