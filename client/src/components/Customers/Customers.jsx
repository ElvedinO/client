import React from 'react';
import './Customers.scss';
import StarIcon from '@mui/icons-material/Star';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const Customers = () => {
  return (
    <div className='customers'>
      <img className='cust-leaves' src='./images/cust-leaves.png' alt='' />
      <div className='wrapper'>
        <h1>Customer Reviews</h1>
        <img src='./images/hero-leaf.png' alt='' />
        <div className='cust-wrap'>
          <div className='review'>
            <div className='stars'>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
            <p>
              I've been shopping here for months, and the quality of the organic
              products is unmatched. The fruits and vegetables are always fresh,
              and I love knowing everything is sustainably sourced. It's
              comforting to trust where my food comes from, and it’s making a
              real difference in my health.
            </p>
            <div className='cust-img'>
              <img src='./images/client1.png' alt='' />
              <p>Mila Kuris</p>
            </div>
          </div>
          <div className='deal'>
            <img src='./images/vegetables.jpg' alt='' />
            <h1>Deal Of The Day 15% Off On All Vegetables!</h1>
            <p>Get 15% off your first purchase and enjoy organic goodness!</p>
            <button>
              <ArrowForwardIcon /> SHOP NOW
            </button>
          </div>
          <div className='review'>
            <div className='stars'>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
            <p>
              This store has completely changed the way I eat. The organic
              legumes and fresh produce are always top-notch, and I feel great
              knowing I'm nourishing my family with clean, natural foods. The
              staff is knowledgeable and friendly, making shopping here a
              wonderful experience every time!
            </p>
            <div className='cust-img'>
              <img src='./images/client2.png' alt='' />
              <p>Mike Sendler</p>
            </div>
          </div>
        </div>
        <div className='brands'>
          <h1>Featured Brands:</h1>
          <img src='./images/logo-1.svg' alt='' />
          <img src='./images/logo-2.svg' alt='' />
          <img src='./images/logo-3.svg' alt='' />
          <img src='./images/logo-4.svg' alt='' />
          <img src='./images/logo-5.svg' alt='' />
        </div>
      </div>
    </div>
  );
};

export default Customers;
