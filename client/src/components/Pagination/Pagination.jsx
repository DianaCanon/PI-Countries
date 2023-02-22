/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useSelector } from "react-redux";
import style from "./Pagination.modules.css";

const Pagination = (props) => {
  const { handlerNextClick, handlerPageClick, handlerPrevClick } = props;

  const pages = useSelector((state) => state.pages);
  const currentPage = useSelector((state) => state.currentPage);

  return (
    <>
      {pages && (
        <div className="style.containerPag">
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
                className={currentPage === page ? "active" : null}
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
