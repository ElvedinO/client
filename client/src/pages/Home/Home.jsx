import React from 'react';
import Hero from '../../components/Hero/Hero';
import Services from '../../components/Services/Services';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import './Home.scss';
import Categories from '../../components/Categories/Categories';
import Customers from '../../components/Contact/Customers';

const Home = () => {
  return (
    <div className='home'>
      <Hero />
      <Services />
      <FeaturedProducts type='featured' />
      <Categories />
      <FeaturedProducts type='trending' />
      <Customers />
    </div>
  );
};

export default Home;
