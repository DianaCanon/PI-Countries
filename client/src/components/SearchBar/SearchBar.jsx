import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountryByName } from "../../redux/actions";
import style from "./SearchBar.module.css";

const SearchBar = (props) => {
  const dispatch = useDispatch();

  const [input, setInput] = useState({});
  const handlerChange = (e) => {
    const value = e.target.value;
    setInput(value);
    dispatch(getCountryByName(value));
  };

  return (
    <div className={style.containerSearch}>
      <label htmlFor="search">Buscar </label>
      <input
        id="search"
        name="search"
        type="search"
        value={input.name}
        onChange={handlerChange}
      ></input>
    </div>
  );
};

export default SearchBar;
