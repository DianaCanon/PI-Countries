import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import { getDetailCountry } from "../../redux/actions";
import style from "./Detail.module.css";

const Detail = (props) => {
  let { IdCountry } = useParams();
  const countryDetail = useSelector((state) => state.countryDetail);
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    countryDetail && setLoaded(true);
  }, [countryDetail]);

  useEffect(() => {
    dispatch(getDetailCountry(IdCountry));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <div className={style.containerDetail}>
      {!loaded ? (
        <Loading />
      ) : (
        <div className={style.containerCard}>
          <div>
            <NavLink to="/home" className={style.containerBack}>
              <button> Volver</button>
            </NavLink>
          </div>
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
                <h2> - {countryDetail.IdCountry} - </h2>
                <p>Continente: {countryDetail.continent}</p>
                <p>Subregion: {countryDetail.subregion}</p>
                <p>Capital: {countryDetail.capital}</p>
                <p>Área: {countryDetail.area}</p>
                <p>Población: {countryDetail.population}</p>
              </div>
              <div>
                <h3>Tourist Activities:</h3>
                {countryDetail.Activities?.map((act, i) => {
                  return (
                    <ul key={`activity${i}`} style={{ textAlign: "left" }}>
                      <li>Name: {act.name}</li>
                      <p>Duration: {act.duration}</p>
                      <p>Difficulty: {act.difficulty}</p>
                      <p>Season: {act.season}</p>
                    </ul>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
