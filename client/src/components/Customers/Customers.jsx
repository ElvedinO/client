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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
              vero quasi dolores quibusdam saepe praesentium, laudantium
              doloremque consequatur minima accusamus nobis, voluptatibus, alias
              beatae dolorum soluta et? Facere, repudiandae suscipit?
            </p>
            <div className='cust-img'>
              <img src='./images/client1.png' alt='' />
              <p>Mila Kuris</p>
            </div>
          </div>
          <div className='deal'>
            <img src='./images/vegetables.jpg' alt='' />
            <h1>Deal Of The Day 15% Off On All Vegetables!</h1>
            <p>I am text block. Click edit button to change this tex em ips.</p>
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
              vero quasi dolores quibusdam saepe praesentium, laudantium
              doloremque consequatur minima accusamus nobis, voluptatibus, alias
              beatae dolorum soluta et? Facere, repudiandae suscipit?
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
