import React from "react";

import {
  createUltimatePagination,
  ITEM_TYPES,
} from "react-ultimate-pagination";

import {
  useCurrentPage,
  useTotalPage,
} from "./../../../context/Recipes/Filters";

import { Container } from "./styles";

import ImageLastPage from "./../../../assets/recipes/arrow_lastPage.png";
import ImageFirstPage from "./../../../assets/recipes/arrow_firstPage.png";
import ImageArrowLeft from "./../../../assets/recipes/arrow_left.png";
import ImageArrowRight from "./../../../assets/recipes/arrow_right.png";

const Button = ({ value, isActive, disabled, onClick }) => (
  <button
    className={isActive ? "button_current" : null}
    style={isActive ? { fontWeight: "bold" } : null}
    onClick={onClick}
    disabled={disabled}
  >
    {value}
  </button>
);

const EllipsisButton = ({ value }) => (
  <button className="button_ellipsis"> {value} </button>
);

const FirstPageButton = ({ value }) => {
  const { setCurrentPage } = useCurrentPage();

  return (
    <button className="button_firstPage" onClick={() => setCurrentPage(1)}>
      <img src={ImageFirstPage} alt="" />
    </button>
  );
};

const PrevButton = ({ value }) => {
  const { currentPage, setCurrentPage } = useCurrentPage();

  return (
    <button
      className="button_prev"
      onClick={() =>
        currentPage !== 1 ? setCurrentPage(currentPage - 1) : null
      }
    >
      <img src={ImageArrowLeft} alt="" />
    </button>
  );
};

const NextButton = () => {
  const { currentPage, setCurrentPage } = useCurrentPage();
  const { totalPage } = useTotalPage();
  return (
    <button
      className="button_next"
      onClick={() =>
        currentPage !== totalPage ? setCurrentPage(currentPage + 1) : null
      }
    >
      <img src={ImageArrowRight} alt="" />
    </button>
  );
};

const LastButton = () => {
  const { setCurrentPage } = useCurrentPage();
  const { totalPage } = useTotalPage();
  return (
    <button
      className="button_firstPage"
      onClick={() => setCurrentPage(totalPage)}
    >
      <img src={ImageLastPage} alt="" />
    </button>
  );
};

const PaginatedPage = createUltimatePagination({
  itemTypeToComponent: {
    PAGE: Button,
    ELLIPSIS: () => <EllipsisButton value="..." />,
    FIRST_PAGE_LINK: () => <FirstPageButton value="First" />,
    [ITEM_TYPES.PREVIOUS_PAGE_LINK]: () => <PrevButton value="Prev" />,
    [ITEM_TYPES.NEXT_PAGE_LINK]: () => <NextButton value="Next" />,
    LAST_PAGE_LINK: () => <LastButton value="Last" />,
  },
});

export default function Pagination({ totalPages, loading, error }) {
  const { currentPage, setCurrentPage } = useCurrentPage();
  const { totalPage } = useTotalPage();

  if (error || loading) return <></>;

  return (
    <Container className="container_pagination">
      <PaginatedPage
        className="pagination"
        totalPages={totalPage}
        currentPage={currentPage}
        onChange={(page) => setCurrentPage(page)}
      />
    </Container>
  );
}
