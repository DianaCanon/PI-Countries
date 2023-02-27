import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortByCountriesPopulation } from "../../redux/actions";
import style from "./SortBar.module.css";

const SortBar = (props) => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const [sortOrder, setSortOrder] = useState();

  const handlerChangeSort = (e) => {
    let value = e.target.value;
    setSortOrder(value);
  };

  useEffect(() => {
    if (countries) {
      dispatch(sortByCountriesPopulation(countries, sortOrder));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortOrder]);

  return (
    <div className={style.containerSort}>
      <label htmlFor="sort">Ordenar </label>
      <select name="sort" id="sort" onChange={handlerChangeSort}>
        <option
          value={null}
          defaultValue={null}
          label="Selecciona una opcion"
        />
        <option value="ascendingByCountry" label="Ascendente por Pais" />
        <option value="descendingByCountry" label="Descendente por Pais" />
        <option
          value="ascendingByPopulation"
          label="Ascendente por poblacion"
        />
        <option
          value="descendingByPopulation"
          label="Descendente por poblacion"
        />
      </select>
    </div>
  );
};

export default SortBar;
