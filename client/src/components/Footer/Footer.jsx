import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='wrapper'>
        <div className='left'>
          <img src='./images/logo-white.png' alt='' />
          <p>
            Maecenas mi justo, interdum at consectetur vel, tristique et arcu.
            Ut quis eros blandit, ultrices diam in, elementum ex. Suspendisse
            quis faucibus urna. Suspendisse pellentesque.
          </p>
        </div>
        <div className='right'>
          <div className='r-right'>
            <div>
              <h2>Quick Links</h2>
              <a href='#'>About</a>
              <a href='#'>Cart</a>
              <a href='#'>Checkout</a>
              <a href='#'>Contact</a>
              <a href='#'>Home</a>
              <a href='#'>My account</a>
              <a href='#'>Shop</a>
            </div>
            <div>
              <h2>Site Links</h2>
              <a href='#'>Privacy policy</a>
              <a href='#'>Shipping Details</a>
              <a href='#'>Offers Coupons</a>
              <a href='#'>Terms & Conditions</a>
            </div>
          </div>
          <div className='r-left'>
            <div>
              <h2>Download Our Mobile App</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                aliquam gravida sollicitudin. Praesent porta enim mi, non
                tincidunt libero interdum sit amet.
              </p>
            </div>
            <div>
              <h2>Quick Links</h2>
              <a href='#'>Know More About Us</a>
              <a href='#'>Visit Store</a>
              <a href='#'>Let's Connect</a>
              <a href='#'>Locate Stores</a>
              <div className='f-img'>
                <img src='./images/app-store.png' alt='' />
                <img src='./images/play-store.png' alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
