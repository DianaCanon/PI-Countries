import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getDetailCountry } from "../../redux/actions";

const Detail = (props) => {
  let { IdCountry } = useParams();
  const countryDetail = useSelector((state) => state.countryDetail);
  const dispatch = useDispatch();
  console.log(IdCountry);


  useEffect(() => {
    dispatch(getDetailCountry(IdCountry));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <div>
      <NavLink to="/home">
        <button>Home</button>
      </NavLink>
      <h1>Nombre: {countryDetail.name}</h1>
      <img src={countryDetail.img_flag} alt="bandera" />
      <p>Cod: {countryDetail.IdCountry}</p>
      <p>Continente: {countryDetail.continent}</p>
      <p>Subregion: {countryDetail.subregion}</p>
      <p>Capital: {countryDetail.capital}</p>
      <p>Área: {countryDetail.area}</p>
      <p>Población: {countryDetail.population}</p>
      {/* <ul>
        Actividades Turísticas:{props.Activities.map((act) => {
          return <li>{act}</li>;
        })}
      </ul> */}
    </div>
  );
};

export default Detail;
