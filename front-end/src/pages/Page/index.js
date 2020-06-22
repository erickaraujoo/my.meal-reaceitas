import React, { useState } from "react";

import { createUltimatePagination } from "react-ultimate-pagination";

const Button = ({ value, isActive, disabled, onClick }) => (
  <button
    style={isActive ? { fontWeight: "bold" } : null}
    onClick={onClick}
    disabled={disabled}
  >
    {value}
  </button>
);

const PaginatedPage = createUltimatePagination({
  itemTypeToComponent: {
    PAGE: Button,
    ELLIPSIS: () => <Button value="..." />,
    FIRST_PAGE_LINK: () => <Button value="First" />,
    PREVIOUS_PAGE_LINK: () => <Button value="Prev" />,
    NEXT_PAGE_LINK: () => <Button value="Next" />,
    LAST_PAGE_LINK: () => <Button value="Last" />
  }
});

export default function Page() {

  const [page, setPage] = useState(1);

  return (
    <PaginatedPage
      className="pagination"
      totalPages={10}
      currentPage={page}
      onChange={page => setPage(page)}
    />
  )
}