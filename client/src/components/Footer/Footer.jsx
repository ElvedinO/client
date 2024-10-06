import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='wrapper'>
        <div className='left'>
          <img src='./images/logo-white.png' alt='Logo' className='logo' />
          <p>
            Stay connected with us for the latest updates, promotions, and
            exclusive offers. Follow us on social media or subscribe to our
            newsletter. Your health and satisfaction are our top priorities, and
            we appreciate your support in choosing organic.
          </p>
        </div>
        <div className='right'>
          <div className='column'>
            <h2>Quick Links</h2>
            <a href='#'>Home</a>
            <a href='#'>About</a>
            <a href='#'>Shop</a>
            <a href='#'>Cart</a>
            <a href='#'>Contact</a>
            <a href='#'>Checkout</a>
            <a href='#'>My account</a>
          </div>
          <div className='column'>
            <h2>Site Links</h2>
            <a href='#'>Privacy policy</a>
            <a href='#'>Shipping Details</a>
            <a href='#'>Offers Coupons</a>
            <a href='#'>Terms & Conditions</a>
          </div>
          <div className='column'>
            <h2>Download Our Mobile App</h2>
            <p>
              Download our app for easy access to fresh, organic products. Shop
              conveniently, track orders, and enjoy exclusive offers anytime!
            </p>
          </div>
          <div className='column'>
            <h2>Quick Links</h2>
            <a href='#'>Know More About Us</a>
            <a href='#'>Visit Store</a>
            <a href='#'>Let's Connect</a>
            <a href='#'>Locate Stores</a>
            <div className='f-img'>
              <img src='./images/app-store.png' alt='App Store' />
              <img src='./images/play-store.png' alt='Play Store' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
