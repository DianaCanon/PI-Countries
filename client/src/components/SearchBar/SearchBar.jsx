import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountryByName } from "../../redux/actions";
import Card from "../Card/Card";

const SearchBar = (props) => {
  const [input, setInput] = useState({});
  const dispatch = useDispatch();
  const countriesByName = useSelector((state) => state.countriesByName);

  const handlerChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
    dispatch(getCountryByName(value));
  };

  return (
    <div>
      <label htmlFor="search">Search </label>
      <input
        id="search"
        name="search"
        type="search"
        value={input.name}
        onChange={handlerChange}
      ></input>
      <div>
        {countriesByName &&
          countriesByName.map((c) => {
            return (
              <Card
                id={c.IdCountry}
                name={c.name}
                img_flag={c.img_flag}
                continent={c.continent}
                key={c.IdCountry}
              />
            );
          })}
      </div>
    </div>
  );
};

export default SearchBar;
