import Pagination from 'react-bootstrap/Pagination';
import React from 'react';

export const PageNav = () => {

  let active = 2;
  let items = [];
  for (let number = 1; number <= 12; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
  }

  return (
    <>
      <Pagination>{items}</Pagination>
    </>
  );
};
