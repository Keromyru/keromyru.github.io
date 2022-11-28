import React from "react";
import { usePagination, DOTS } from "./PagniationUtils";

const Pagination = (props) => {
  const{
    onPageChange,
    totalEntries,
    siblingCount = 1,
    currentPage,
    entriesPerPage,
    className
  } = props;

  const PageRange = usePagination({
    currentPage: currentPage,
    totalEntries: totalEntries,
    entriesPerPage: entriesPerPage,
    siblingCount: siblingCount
  });

   // If there are less than 2 times in pagination range we shall not render the component
   if (currentPage === 0 || PageRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1)
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = PageRange[PageRange.length - 1];

  return(
    <>
    <ul className={"pagination-container" + " " + className}>
      <li className="pagination-item"
        disabled={currentPage === 1}
        onClick={onPrevious}>
          <div className="arrow left"/>
      </li>

      {PageRange.map(pageNumber => {
        return pageNumber === DOTS ? 
          <li className="pagniation-item dots">{DOTS}</li> 
        : 
          <li className={"pagination-item"}
          selected={pageNumber === currentPage}
          onClick={() => {onPageChange(pageNumber)}}>
            {pageNumber}
          </li>;

      })}

      <li className="pagination-item"
        disabled={currentPage === lastPage}
        onClick={onNext}>
        <div className="arrow right"/>
      </li>
    </ul>
    </>
  )
}

export default Pagination;