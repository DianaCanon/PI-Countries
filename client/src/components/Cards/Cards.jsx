import Card from "../Card/Card";
import { useSelector } from "react-redux";
import style from './Cards.module.css'

const Cards = (props) => {
  const countries = useSelector((state) => state.countries);

  return (
    <div className={style.containerCard}>
      {countries.map((c) => {
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
  );
};

export default Cards;
