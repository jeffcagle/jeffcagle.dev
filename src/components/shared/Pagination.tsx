import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

interface PaginationProps {
  currentPage: number;
  numberOfPages: number;
}

const Pagination = ({ currentPage, numberOfPages }: PaginationProps) => {
  const isFirstPage = currentPage === 1;
  const isNextToFirstPage = currentPage === 2;
  const isLastPage = currentPage === numberOfPages;
  const isNextToLastPage = currentPage === numberOfPages - 1;
  const previousPage =
    currentPage - 1 === 1 ? '/blog' : `/blog/${(currentPage - 1).toString()}`;
  const nextPage = `/blog/${(currentPage + 1).toString()}`;
  const firstPage = `/blog`;
  const lastPage = `/blog/${numberOfPages.toString()}`;

  if (numberOfPages === 1) {
    return null;
  }

  return (
    <PageLinks>
      {!isFirstPage && (
        <>
          <PageLink to={previousPage} rel="prev">
            Previous
          </PageLink>

          {!isNextToFirstPage && (
            <>
              <PageLink to={firstPage}>&laquo;</PageLink>
              <Dots>. . .</Dots>
            </>
          )}
          <PageLink to={previousPage} rel="prev">
            {currentPage - 1}
          </PageLink>
        </>
      )}
      <CurrentLink>{currentPage}</CurrentLink>
      {!isLastPage && (
        <>
          <PageLink to={nextPage} rel="next">
            {currentPage + 1}
          </PageLink>

          {!isNextToLastPage && (
            <>
              <Dots>. . .</Dots>
              <PageLink to={lastPage}>&raquo;</PageLink>
            </>
          )}

          <PageLink to={nextPage} rel="next">
            Next
          </PageLink>
        </>
      )}
    </PageLinks>
  );
};

const PageLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  margin-top: 3rem;
`;

const PageLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.neutral600};
  color: ${props => props.theme.colors.neutral300};
  transition: 0.2s ease-in-out;
  padding: 0 1.1rem;
  border-radius: 5px;
  margin: 0 0.5rem;
  height: 40px;
  /* width: 40px; */

  &:hover {
    background-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.neutral100};
  }
`;

const CurrentLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.neutral750};
  color: ${props => props.theme.colors.neutral500};
  font-weight: bold;
  padding: 0 1.3rem;
  border-radius: 5px;
  margin: 0 0.5rem;
  height: 100%;
  height: 40px;
  width: 40px;
`;

const Dots = styled.div`
  color: ${props => props.theme.colors.neutral500};
  height: 100%;
  display: flex;
  align-items: flex-end;
  position: relative;
  top: 7px;
`;

export default Pagination;
