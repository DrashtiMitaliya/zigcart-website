// import from packages
import React, { useState, useEffect } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import { useSelector, useDispatch } from 'react-redux';

// import from files
import { fetchProducts } from '../../Redux/Reducers/ProductSlice';

// pagination 
export const PageNav = () => {
  const [activePage, setActivePage] = useState(0)
  const dispatch = useDispatch();
  const totalProduct = useSelector((state) => state.products.totalProduct)
  const handleChange = (number) => { setActivePage(number) }
  let active = activePage;
  let items = [];


  useEffect(() => {
    dispatch(fetchProducts((activePage) * 8))
  }, [activePage, dispatch])

  for (let number = 0; number <= (totalProduct) / 8; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active} onClick={() => handleChange(number)}>
        {number + 1}
      </Pagination.Item>
    );
  }

  return (
    <>
      <Pagination className='d-flex justify-content-center'>{items}</Pagination>
    </>
  );
};
