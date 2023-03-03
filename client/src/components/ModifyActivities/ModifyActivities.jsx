import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MySelectMultiple from "../MySelectMultiple/MySelectMultiple";
import {
  addCountriesInActivities,
  getAllActivities,
} from "../../redux/actions";
import style from "./ModifyActivities.module.css";

const ModifyActivities = () => {
  const activities = useSelector((state) => state.activities);
  const countries = useSelector((state) => state.countries);

  const dispatch = useDispatch();

  const [selectedCountries, setSelectedCountries] = useState([]);
  const [selectedActivity, setSelectedActivity] = useState();
  const [optionsActivities, setOptionsActivities] = useState();
  const [optionsCountries, setOptionsContries] = useState();

  const handlerChange = (event) => {
    const value = event.target.value;
    setSelectedActivity(value);
  };

  useEffect(() => {
    dispatch(getAllActivities());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setOptionsContries(
      countries
        ?.map((c) => {
          return { id: c.IdCountry, value: c.name, checked: false };
        })
        .sort((a, b) => (a.value > b.value ? 1 : -1))
    );

    setOptionsActivities(
      activities?.map((a) => {
        return { id: a.idActivity, value: a.name };
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countries, activities]);

  const handlerSubmit = (event) => {
    event.preventDefault();

    if (!selectedActivity || !selectedCountries.length)
      alert("no hay datos para actualizar");

    activities.idCountry = selectedCountries;
    dispatch(
      addCountriesInActivities(+selectedActivity, selectedCountries, activities)
    );

    setOptionsContries(
      countries
        .map((c) => {
          return { id: c.IdCountry, value: c.name, checked: false };
        })
        .sort((a, b) => (a.value > b.value ? 1 : -1))
    );
  };

  return (
    <div>
      <form onSubmit={handlerSubmit} className={style.boxForm}>
        <select id="activity" name="activity" onClick={handlerChange}>
          <option value={null} label="Actividad a agregar en el pais"></option>
          {optionsActivities &&
            optionsActivities?.map((o, i) => {
              return (
                <option
                  label={o.value}
                  value={o.id}
                  key={`${i}${o.id}`}
                ></option>
              );
            })}
        </select>

        <label htmlFor="countries">Pais a agregar</label>
        <MySelectMultiple
          options={optionsCountries}
          onSelectedOptions={setSelectedCountries}
        />
        <button>Agregar Actividades a Paises</button>
      </form>
    </div>
  );
};

export default ModifyActivities;
