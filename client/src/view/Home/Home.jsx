/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Cards from "../../components/Cards/Cards";
import Pagination from "../../components/Pagination/Pagination";
import SearchBar from "../../components/SearchBar/SearchBar";
import {
  getAllCountries,
  getCountriesPage,
  setCurrentPage,
  countPage,
  numberPage,
  movPage,
} from "../../redux/actions.js";
import style from "./Home.module.css";

const Home = (props) => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.currentPage);
  const limit = useSelector((state) => state.limit);
  const countries = useSelector((state) => state.countries);
  const maxPageLimit = useSelector((state) => state.maxPageLimit);

  useEffect(() => {
    dispatch(getAllCountries());
  }, []);

  const handlerPageClick = (e) => {
    const id = e.target.id;
    dispatch(setCurrentPage(id));
  };

  useEffect(() => {
    countries && dispatch(getCountriesPage(currentPage, limit, countries));
  }, [currentPage]);

  useEffect(() => {
    if (countries) {
      dispatch(countPage(countries, limit));
      dispatch(getCountriesPage(currentPage, limit, countries));
    }
  }, [countries]);

  useEffect(() => {
    maxPageLimit && dispatch(numberPage(maxPageLimit));
  }, [maxPageLimit]);

  const handlerPrevClick = (e) => {
    const { name } = e.target.name;
    console.log(7, currentPage, 8, e.target.name);
    dispatch(movPage(currentPage, name, maxPageLimit));
  };

  /*  const handlerNextClick = () => {
    if (currentPage <= maxPageLimit) setCurrentPage(currentPage + 1);
  }; */

  return (
    <div className={style.containerHome}>
      <NavLink to="/" className={style.containerBack}>
        <button>Volver</button>
      </NavLink>
      <SearchBar />
      <Pagination
        handlerPageClick={handlerPageClick}
        handlerPrevClick={handlerPrevClick}
      />
      <Cards />
    </div>
  );
};

export default Home;
