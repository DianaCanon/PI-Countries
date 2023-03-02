/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Filter.module.css";
import {
  filterByContinentActivity,
  OptionsByActivities,
  OptionsByContinents,
} from "../../redux/actions";

const FilterBar = (props) => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const optionsByContinent = useSelector((state) => state.optionsByContinent);
  const optionsByActivities = useSelector((state) => state.optionsByActivities);

  const [selectedContinent, setSelectedContinent] = useState();
  const [selectedActivity, setSelectedActivity] = useState();
  const [visibility, setVisibility] = useState(false);

  const handlerChangeContinent = (e) => {
    let value = e.target.value;
    setSelectedContinent(value);
  };

  const handlerChangeActivity = (e) => {
    let value = e.target.value;
    setSelectedActivity(value);
  };

  const handlerClick = () => {
    setVisibility(!visibility);
  };

  useEffect(() => {
    if (countries) {
      dispatch(OptionsByContinents(countries));
      dispatch(OptionsByActivities(countries));
    }
  }, [countries]);

  useEffect(() => {
    dispatch(
      filterByContinentActivity(countries, selectedContinent, selectedActivity)
    );
  }, [selectedContinent, selectedActivity]);

  return (
    <div>
      <p
        className={style.containerFilterBar}
        name="filter"
        onClick={handlerClick}
      >
        Filtrar
      </p>
      <div
        className={
          visibility ? style.containerVisibility : style.containerHidden
        }
      >
        <div className={style.containerFilter}>
          <label htmlFor="filterC">Continent</label>
          <select id="filterC" name="filterC" onChange={handlerChangeContinent}>
            <option
              value={null}
              defaultValue={null}
              label="Selecciona un continente"
            />
            {optionsByContinent?.map((continent) => {
              return (
                <option key={continent} value={continent} label={continent} />
              );
            })}
          </select>
        </div>
        <div className={style.containerFilter}>
          <label htmlFor="filterActivity">Actividad Turistica </label>
          <select
            id="filterActivity"
            name="filterActivity"
            onChange={handlerChangeActivity}
          >
            <option value={null} defaultValue={null}>
              Selecciona una actividad
            </option>
            {optionsByActivities?.map((o) => {
              return (
                <option value={o} label={o} key={o}>
                  {o}
                </option>
              );
            })}
          </select>
        </div>
        <button onClick={handlerClick}> cerrar </button>
      </div>
    </div>
  );
};

export default FilterBar;
