import React, { useState, useEffect } from 'react';
import './Hero.scss';
import ShoppingCartOutliedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Popup from '../Popup/Popup';

const Hero = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (window.location.href.includes('success=true')) {
      setShowPopup(true);
    }
    if (window.location.href.includes('success=false')) {
      setShowPopup(true);
    }
  }, []);

  const handleShowPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className='slider'>
      <img className='hero-leaves' src='./images/hero-leaves.png' alt='' />
      <div className='container'>
        <div className='left'>
          <img
            fetchpriority='high'
            className='hero-img'
            src='./images/hero.webp'
            alt='hero-img'
          />
        </div>
        <div className='right'>
          <img src='./images/hero-leaf.png' alt='' className='leaf-icon' />
          <h2>Best Quality Products</h2>
          <h1>Join The Organic Movement!</h1>
          <p>
            Discover the true essence of organic living with our pure,
            sustainably sourced food and drinks, crafted for your well-being.
          </p>
          <div className='hero-btn'>
            <button>
              <ShoppingCartOutliedIcon />
              SHOP NOW
            </button>
          </div>
        </div>
      </div>

      {showPopup && (
        <Popup
          message={`Your payment ${
            window.location.href.includes('success=true')
              ? 'has been successfully processed. Your order will be on its way soon! If you have any questions, feel free to reach out.'
              : 'failed! Please check your payment details and try again. If you need assistance, let us know.'
          } `}
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
};

export default Hero;
