/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Pagination.module.css";
import { setCurrentPage, movPage } from "../../redux/actions.js";

const Pagination = (props) => {
  const dispatch = useDispatch();
  const pages = useSelector((state) => state.pages);
  const currentPage = useSelector((state) => state.currentPage);
  const maxPageLimit = useSelector((state) => state.maxPageLimit);

  const handlerPageClick = (e) => {
    const id = +e.target.id;
    dispatch(setCurrentPage(id));
  };

  const handlerPrevClick = (e) => {
    const name = e.target.name;
    dispatch(movPage(currentPage, name, maxPageLimit));
  };

  const handlerNextClick = (e) => {
    const name = e.target.name;
    dispatch(movPage(currentPage, name, maxPageLimit));
  };

  return (
    <>
      {pages && (
        <div className={style.containerPag}>
          <button
            onClick={handlerPrevClick}
            disabled={currentPage === pages[0]}
            name="Prev"
          >
            Previus
          </button>

          {pages.map((page) => {
            return (
              <button
                key={page}
                id={page}
                onClick={handlerPageClick}
                className={currentPage === page ? style.active : null}
              >
                {page}
              </button>
            );
          })}

          <button
            onClick={handlerNextClick}
            disabled={currentPage === pages[pages.length - 1]}
            name="Next"
          >
            Next
          </button>
        </div>
      )}
    </>
  );
};

export default Pagination;
