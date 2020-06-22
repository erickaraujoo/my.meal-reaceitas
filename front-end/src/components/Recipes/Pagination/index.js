import React, { useState } from "react";

import { createUltimatePagination } from "react-ultimate-pagination";

import { Container } from './styles';

import ImageLastPage from './../../../assets/recipes/arrow_lastPage.png';
import ImageFirstPage from './../../../assets/recipes/arrow_firstPage.png';
import ImageArrowLeft from './../../../assets/recipes/arrow_left.png';
import ImageArrowRight from './../../../assets/recipes/arrow_right.png';


const Button = ({ value, isActive, disabled, onClick }) => (
  <button
    className={isActive ? 'button_current' : null}
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

const FirstPageButton = ({ value }) => (
  <button className="button_firstPage">
    <img src={ImageFirstPage} alt=""/>
  </button>
);

const PrevButton = ({ value }) => (
  <button className="button_prev">
    <img src={ImageArrowLeft} alt=""/>
  </button>
);

const NextButton = ({ value }) => (
  <button className="button_next">
    <img src={ImageArrowRight} alt=""/>
  </button>
);

const LastButton = ({ value }) => (
  <button className="button_last">
    <img src={ImageLastPage} alt=""/>
  </button>
);

const PaginatedPage = createUltimatePagination({
  itemTypeToComponent: {
    PAGE: Button,
    ELLIPSIS: () => <EllipsisButton value="..." />,
    FIRST_PAGE_LINK: () => <FirstPageButton value="First" />,
    PREVIOUS_PAGE_LINK: () => <PrevButton value="Prev" />,
    NEXT_PAGE_LINK: () => <NextButton value="Next" />,
    LAST_PAGE_LINK: () => <LastButton value="Last" />,
  },
});

export default function Pagination() {
  const [page, setPage] = useState(1);
  
  return (
    <Container className="container_pagination">
      <PaginatedPage
        className="pagination"
        totalPages={15}
        currentPage={page}
        onChange={page => setPage( page )}
      />
    </Container>
  );
}