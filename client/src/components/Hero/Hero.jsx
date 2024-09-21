import React, { useState } from 'react';

import './Hero.scss';

import ShoppingCartOutliedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // const data = [
  //   'https://websitedemos.net/skin-cleanser-store-02/wp-content/uploads/sites/933/2021/08/skin-cleanser-template-hero-img-bg.jpg',
  //   'https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto-compress&cs=tinys rgb&w=1600',
  //   'https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto-compress&cs-tinys rgb&w=1600',
  // ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className='slider'>
      <img className='hero-leaves' src='./images/hero-leaves.png' alt='' />
      <div
        className='container'
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <div className='left'>
          <img className='hero-img' src='./images/hero.png' alt='' />
        </div>
        <div className='right'>
          <img src='./images/hero-leaf.png' alt='' />

          <h2>Best Quality Products</h2>
          <h1>Join The Organic Movement!</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <div className='hero-btn'></div>

          <button>
            <ShoppingCartOutliedIcon />
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
