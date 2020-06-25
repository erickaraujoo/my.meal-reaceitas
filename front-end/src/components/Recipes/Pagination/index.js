import React from "react";
import { useSelector } from 'react-redux';

import {
  createUltimatePagination,
  ITEM_TYPES,
} from "react-ultimate-pagination";

import { useCurrentPage } from "./../../../context/Recipes/Filters";

import { Container } from "./styles";

import ImageLastPage from "./../../../assets/recipes/arrow_lastPage.png";
import ImageFirstPage from "./../../../assets/recipes/arrow_firstPage.png";
import ImageArrowLeft from "./../../../assets/recipes/arrow_left.png";
import ImageArrowRight from "./../../../assets/recipes/arrow_right.png";

export default function Pagination() {
  const { currentPage, setCurrentPage } = useCurrentPage();

  const { loading, error } = useSelector((state) => state.recipes);
  const { totalPages = 0 } = useSelector((state) => state.recipes.data);
  
  const handlePage = (value) => setCurrentPage(value);

  const Button = ({ value }) => {
    return (
      <button
        className={currentPage === value ? "button_current" : null}
        value={value}
        onClick={(e) =>
          e.target.value === value.toString() ? handlePage(value) : null
        }
      >
        {value}
      </button>
    );
  };

  const EllipsisButton = ({ value }) => (
    <button className="button_ellipsis"> {value} </button>
  );

  const FirstPageButton = ({ setCurrentPage }) => (
    <button className="button_firstPage" onClick={() => setCurrentPage(1)}>
      <img src={ImageFirstPage} alt="first" />
    </button>
  );

  const PrevButton = ({ currentPage, setCurrentPage }) => (
    <button
      className="button_prev"
      onClick={() =>
        currentPage !== 1 ? setCurrentPage(currentPage - 1) : null
      }
    >
      <img className="arrow_image" src={ImageArrowLeft} alt="" />
    </button>
  );

  const NextButton = ({ currentPage, setCurrentPage, totalPages }) => (
    <button
      className="button_next"
      onClick={() =>
        currentPage !== totalPages ? setCurrentPage(currentPage + 1) : null
      }
    >
      <img className="arrow_image" src={ImageArrowRight} alt="" />
    </button>
  );
  const LastButton = ({ setCurrentPage, totalPages }) => (
    <button
      className="button_firstPage"
      onClick={() => setCurrentPage(totalPages)}
    >
      <img src={ImageLastPage} alt="last" />
    </button>
  );

  const PaginatedPage = createUltimatePagination({
    itemTypeToComponent: {
      [ITEM_TYPES.PAGE]: Button,
      [ITEM_TYPES.ELLIPSIS]: () => (
        <EllipsisButton setCurrentPage={setCurrentPage} value="..." />
      ),
      [ITEM_TYPES.FIRST_PAGE_LINK]: () => (
        <FirstPageButton setCurrentPage={setCurrentPage} value="First" />
      ),
      [ITEM_TYPES.PREVIOUS_PAGE_LINK]: () => (
        <PrevButton
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          value="Prev"
        />
      ),
      [ITEM_TYPES.NEXT_PAGE_LINK]: () => (
        <NextButton
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
          value="Next"
        />
      ),
      [ITEM_TYPES.LAST_PAGE_LINK]: () => (
        <LastButton
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
          value="Last"
        />
      ),
    },
  });

  if (error || loading || totalPages === 0) return <></>;

  return (
    <Container className="container_pagination">
      <PaginatedPage
        className="pagination"
        totalPages={totalPages}
        currentPage={currentPage}
        onChange={(page) => setCurrentPage(page)}
      />
    </Container>
  );
}
