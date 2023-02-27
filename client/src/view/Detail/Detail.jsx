import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
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
        <div>
          <h1> {countryDetail.name?.toUpperCase()}</h1>
          <img
            src={countryDetail.img_flag}
            alt="bandera"
            className={style.containerImg}
          />
        </div>

        <div className={style.containerData}>
          <div>
            <h3> - {countryDetail.IdCountry} - </h3>
            <p>Continente: {countryDetail.continent}</p>
            <p>Subregion: {countryDetail.subregion}</p>
            <p>Capital: {countryDetail.capital}</p>
            <p>Área: {countryDetail.area}</p>
            <p>Población: {countryDetail.population}</p>
            <p>Tourist Activities:</p>
            {countryDetail.Activities?.map((act, i) => {
              return (
                <ul key={`activity${i}`} style={{ textAlign: "left" }}>
                  <li>Name: {act.name}</li>
                  <li>Duration: {act.duration}</li>
                  <li>Difficulty: {act.difficulty}</li>
                  <li>Season: {act.season}</li>
                </ul>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
