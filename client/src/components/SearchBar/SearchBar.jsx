import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountryByName } from "../../redux/actions";
import style from "./SearchBar.module.css";
import imgSearch from "../../assets/lupa.jpg";

const SearchBar = (props) => {
  const dispatch = useDispatch();

  const [input, setInput] = useState({});
  const [visibility, setvisibility] = useState(false);

  const handlerChange = (e) => {
    const value = e.target.value;
    setInput(value);
    dispatch(getCountryByName(value));
  };

  const handlerClick = () => {
    setvisibility(!visibility);
  };

  return (
    <div className={visibility ? style.containerSearch : style.containerHidden}>
      <label htmlFor="search">Buscar</label>

      <input
        id="search"
        name="search"
        type="search"
        value={input.name}
        onChange={handlerChange}
      />
      <img src={imgSearch} alt="lupa" onClick={handlerClick} />
    </div>
  );
};

export default SearchBar;
