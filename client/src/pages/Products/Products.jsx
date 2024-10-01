import React, { useState } from 'react';
import './Products.scss';
import List from '../../components/List/List';
import { Link, useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

const Products = ({ item }) => {
  const catId = useParams().id;
  const [maxPrice, setMaxPrice] = useState(100);
  const [sort, setSort] = useState('asc'); // Set default sort to 'asc'
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  // const { data, loading, error } = useFetch(
  //   /sub-categories?[filters][categories][id][$eq]=${catId}
  // );

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };

  return (
    <div className='products'>
      <div className='wrapper'>
        <div className='left'>
          {/* <div className='filterItem'>
          <h2>Product Categories</h2>
          {data?.map((item) => (
            <div className='inputItem' key={item.id}>
            <input
            type='checkbox'
            id={item.id}
            value={item.id}
            onChange={handleChange}
            />
            <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
            ))}
            </div> */}

          <div className='filterItem'>
            <h2>Filter by price</h2>
            <div className='inputItem'>
              <span>15</span>
              <input
                className='range-slider'
                type='range'
                min={15}
                max={100}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
              <span>{maxPrice}</span>
            </div>
          </div>
          <div className='filterItem'>
            <h2>Sort by</h2>

            <div className='inputItem'>
              <input
                className='radio-input'
                type='radio'
                id='asc'
                value='asc'
                name='price'
                onChange={(e) => setSort('asc')}
                checked={sort === 'asc'} // Add this line
              />
              <label htmlFor='asc' className='radio'>
                Price (Lowest first)
              </label>
            </div>
            <div className='inputItem'>
              <input
                className='radio-input'
                type='radio'
                id='desc'
                value='desc'
                name='price'
                onChange={(e) => setSort('desc')}
                checked={sort === 'desc'} // Add this line
              />
              <label htmlFor='desc'>Price (Highest first)</label>
            </div>
          </div>
        </div>

        <div className='right'>
          <h3>
            <Link to='https://ve-comm.netlify.app/'>Home</Link> /
            {catId === 'everything'
              ? ' All Products'
              : catId === 'groceries'
              ? ' Groceries'
              : ' Juice'}
          </h3>
          <h1>
            {catId === 'everything'
              ? 'All Products'
              : catId === 'groceries'
              ? 'Groceries'
              : 'Juice'}
          </h1>
          <p>
            {' '}
            {catId === 'everything'
              ? 'Browse our full range of high-quality groceries, beverages, and household essentials. From fresh produce and pantry staples to refreshing juices, snacks, and daily necessities, we offer everything you need for convenient shopping in one place.'
              : catId === 'groceries'
              ? 'Explore a wide variety of fresh and packaged groceries, including staples like rice, grains, dairy, and snacks. Our high-quality products ensure your pantry is always stocked with the essentials for every meal. Shop conveniently for all your daily cooking and household needs.'
              : 'Quench your thirst with our selection of natural, refreshing juices. From classic flavors like orange and apple to exotic blends, we offer both fresh and packaged options to suit your preferences. Perfect for a healthy start to your day or an invigorating mid-day refreshment.'}
          </p>

          <List
            catId={catId}
            maxPrice={maxPrice}
            sort={sort}
            subCats={selectedSubCats}
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
