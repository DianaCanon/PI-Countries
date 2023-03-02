/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Cards from "../../components/Cards/Cards";
import FilterBar from "../../components/FilterBar/FilterBar";
import SortBar from "../../components/SortBar/SortBar";
import Pagination from "../../components/Pagination/Pagination";
import SearchBar from "../../components/SearchBar/SearchBar";
import Loading from "../../components/Loading/Loading";
import {
  getAllCountries,
  getCountriesPage,
  countPage,
  numberPage,
} from "../../redux/actions.js";
import style from "./Home.module.css";

const Home = (props) => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.currentPage);
  const limit = useSelector((state) => state.limit);
  const countries = useSelector((state) => state.countries);
  const maxPageLimit = useSelector((state) => state.maxPageLimit);
  const [loaded, setLoaded] = useState(false);

  const handlerClick = () => {
    dispatch(getAllCountries());
  };

  useEffect(() => {
    countries.length && setLoaded(true);
  }, [countries]);

  useEffect(() => {
    dispatch(getAllCountries());
  }, []);

  useEffect(() => {
    if (countries) {
      dispatch(countPage(countries, limit));
      dispatch(getCountriesPage(currentPage, limit, countries));
    }
  }, [countries, currentPage]);

  useEffect(() => {
    maxPageLimit && dispatch(numberPage(maxPageLimit));
  }, [maxPageLimit]);

  return (
    <div className={style.containerHome}>
      {!loaded ? (
        <Loading />
      ) : (
        <>
          <div className={style.containerSearchFilter}>
            <SearchBar />
            <FilterBar />
            <SortBar />
            <p className={style.containerShowAll} onClick={handlerClick}>
              Mostrar todos
            </p>
          </div>

          <div>
            <Pagination />
            <div className={style.containerButton}>
              <NavLink to="/">
                <button className={style.containerBack}>Volver </button>
              </NavLink>
            </div>
            <Cards />
          </div>
          <div className={style.containerButton}>
            <NavLink to="/">
              <button className={style.containerBack}>Volver </button>
            </NavLink>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
