import React from 'react';
import './Categories.scss';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ShoppingCartOutliedIcon from '@mui/icons-material/ShoppingCartOutlined';
const Categories = () => {
  return (
    <>
      <div className='categories'>
        <img className='leaf' src='./images/basil-leaf.png' alt='' />
        <div className='container'>
          <div className='fresh-cat'>
            <div className='item'>
              <h1>Farm Frest Fruits</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum,
                alias!
              </p>
              <button className='cat-btn'>
                <ArrowForwardIcon /> SHOP NOW
              </button>
              <img src='./images/product1.jpg' alt='' />
            </div>
            <div className='item'>
              <h1>Fresh Vegetables</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum,
                alias!
              </p>
              <button className='cat-btn'>
                <ArrowForwardIcon /> SHOP NOW
              </button>
              <img src='./images/product2.jpg' alt='' />
            </div>
            <div className='item'>
              <h1>Organic Legume</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum,
                alias!
              </p>
              <button className='cat-btn'>
                <ArrowForwardIcon /> SHOP NOW
              </button>

              <img src='./images/product3.jpg' alt='' />
            </div>
          </div>
        </div>
      </div>
      <div className='cat-bottom'>
        <div className='bott-con'>
          <h1>Get 25% Off On Your First Purchase!</h1>
          <button>
            <ShoppingCartOutliedIcon />
            SHOP NOW
          </button>
        </div>
        <div className='arrow'></div>
        <p className='try'>Try It For Free. No Registration Needed.</p>
      </div>
    </>
  );
};

export default Categories;
