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

  const handlerChangeContinent = (e) => {
    let value = e.target.value;
    console.log(e.target);
    setSelectedContinent(value);
  };

  const handlerChangeActivity = (e) => {
    let value = e.target.value;
    setSelectedActivity(value);
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
    <div className={style.containerFilterBar}>
      <div>
        <span>Filtrar</span>
      </div>
      <div>
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
      <div>
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
    </div>
  );
};

export default FilterBar;
