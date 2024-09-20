import React, { useState } from 'react';
import PersonOutlineIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutliedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [clickedLink, setClickedLink] = useState('');
  const products = useSelector((state) => state.cart.products);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const handleLinkClick = (linkName) => {
    setClickedLink(linkName);
  };

  return (
    <>
      <div
        className='navbar'
        style={
          window.location.href.split('/').includes('about')
            ? { backgroundColor: '#F8F6F3' }
            : null
        }
      >
        <div className='wrapper'>
          <div className='left'>
            <Link to='http://localhost:3000/'>
              <img className='logo ' src='./images/logo.svg' alt='' />
            </Link>

            <div className='item'>
              <Link
                className={`link ${
                  clickedLink === 'everything' ? 'clicked' : ''
                }`}
                to='products/1'
                onClick={() => handleLinkClick('everything')}
              >
                Everything
              </Link>
            </div>
            <div className='item'>
              <Link
                className={`link ${
                  clickedLink === 'groceries' ? 'clicked' : ''
                }`}
                to='products/2'
                onClick={() => handleLinkClick('groceries')}
              >
                Groceries
              </Link>
            </div>
            <div className='item'>
              <Link
                className={`link ${clickedLink === 'juice' ? 'clicked' : ''}`}
                to='products/3'
                onClick={() => handleLinkClick('juice')}
              >
                Juice
              </Link>
            </div>
          </div>

          <div className='right'>
            <div className='item'>
              <Link
                className={`link ${clickedLink === 'about' ? 'clicked' : ''}`}
                to='/about' // Change this to the correct path for your About page
                onClick={() => handleLinkClick('about')}
              >
                About
              </Link>
            </div>

            <div className='item'>
              <Link
                className={`link ${clickedLink === 'contact' ? 'clicked' : ''}`}
                to='/'
                onClick={() => handleLinkClick('contact')}
              >
                Contact
              </Link>
            </div>

            <div className='icons'>
              <div className='cartIcon' onClick={openCart}>
                <ShoppingCartOutliedIcon />
                <span>{products.length}</span>
              </div>
              <PersonOutlineIcon />
            </div>
          </div>
        </div>

        <Cart isOpen={isCartOpen} onClose={closeCart} />
      </div>
    </>
  );
};

export default Navbar;
