import React from 'react';
import './FeaturedProducts.scss';
import Card from '../Card/Card';

import useFetch from '../../hooks/useFetch';

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <>
      <div className='featuredProducts'>
        <div className='top'>
          <h1>{type === 'featured' ? 'Best selling' : 'Trending'} Products</h1>
          <img src='./images/hero-leaf.png' alt='' />
        </div>

        <div className='bottom'>
          {error
            ? 'Something went wrong'
            : loading
            ? 'loading'
            : data?.map((item) => <Card item={item} key={item.id} />)}
        </div>
      </div>
    </>
  );
};

export default FeaturedProducts;
