import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getDetailCountry } from "../../redux/actions";
import style from "./Detail.module.css";

const Detail = (props) => {
  let { IdCountry } = useParams();
  const countryDetail = useSelector((state) => state.countryDetail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetailCountry(IdCountry));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <div className={style.containerDetail}>
      <div className={style.containerBox}>
        <h2>Nombre: {countryDetail.name}</h2>
        <div className={style.containerData}>
          <div>
            <img src={countryDetail.img_flag} alt="bandera" />
          </div>
          <div>
            <p>Cod: {countryDetail.IdCountry}</p>
            <p>Continente: {countryDetail.continent}</p>
            <p>Subregion: {countryDetail.subregion}</p>
            <p>Capital: {countryDetail.capital}</p>
            <p>Área: {countryDetail.area}</p>
            <p>Población: {countryDetail.population}</p>
            <ul>
              Actividades Turísticas:
              {countryDetail.Activities?.map((act) => {
                return <li>{act}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
