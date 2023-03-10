import Card from "../Card/Card";
import { useSelector } from "react-redux";
import style from "./Cards.module.css";

const Cards = (props) => {
  const currentCountries = useSelector((state) => state.currentCountries);

  return (
    <div className={style.containerCard}>
      {!currentCountries.length ? (
        <div className={style.container404}>No se encontraron resultados</div>
      ) : (
        currentCountries.map((c) => {
          return (
            <Card
              id={c.IdCountry}
              name={c.name}
              img_flag={c.img_flag}
              continent={c.continent}
              population={c.population}
              key={c.IdCountry}
            />
          );
        })
      )}
    </div>
  );
};

export default Cards;
