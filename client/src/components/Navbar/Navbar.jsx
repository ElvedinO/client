import React, { useState } from 'react';
import PersonOutlineIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutliedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [clickedLink, setClickedLink] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const handleLinkClick = (linkName) => {
    setClickedLink(linkName);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div
        className='navbar'
        style={
          window.location.href.split('/').includes('about') ||
          window.location.href.split('/').includes('contact')
            ? { backgroundColor: '#F8F6F3' }
            : null
        }
      >
        <div className='wrapper'>
          <div className='left'>
            <Link to='https://ve-comm.netlify.app/'>
              <img className='logo' src='./images/logo.svg' alt='' />
            </Link>
            <div className='nav-links'>
              <Link
                className={`link ${
                  clickedLink === 'everything' ? 'clicked' : ''
                }`}
                to='products/everything'
                onClick={() => handleLinkClick('everything')}
              >
                Everything
              </Link>
              <Link
                className={`link ${
                  clickedLink === 'groceries' ? 'clicked' : ''
                }`}
                to='products/groceries'
                onClick={() => handleLinkClick('groceries')}
              >
                Groceries
              </Link>
              <Link
                className={`link ${clickedLink === 'juice' ? 'clicked' : ''}`}
                to='products/juice'
                onClick={() => handleLinkClick('juice')}
              >
                Juice
              </Link>
            </div>
          </div>

          <div className='right'>
            <div className='nav-links'>
              <Link
                className={`link ${clickedLink === 'about' ? 'clicked' : ''}`}
                to='/about'
                onClick={() => handleLinkClick('about')}
              >
                About
              </Link>
              <Link
                className={`link ${clickedLink === 'contact' ? 'clicked' : ''}`}
                to='/contact'
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
            </div>
            <div className='hamburger-menu'>
              <button className='menu-toggle' onClick={toggleMenu}>
                {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>

        <div
          className={`menu-overlay ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
        ></div>

        <div className={`menu-content ${isMenuOpen ? 'open' : ''}`}>
          <nav>
            <CloseIcon
              className={`close ${isMenuOpen ? 'open' : ''}`}
              onClick={toggleMenu}
            />
            <ul>
              <li>
                <Link
                  className={`link ${
                    clickedLink === 'everything' ? 'clicked' : ''
                  }`}
                  to='products/everything'
                  onClick={() => handleLinkClick('everything')}
                >
                  Everything
                </Link>
              </li>
              <li>
                <Link
                  className={`link ${
                    clickedLink === 'groceries' ? 'clicked' : ''
                  }`}
                  to='products/groceries'
                  onClick={() => handleLinkClick('groceries')}
                >
                  Groceries
                </Link>
              </li>
              <li>
                <Link
                  className={`link ${clickedLink === 'juice' ? 'clicked' : ''}`}
                  to='products/juice'
                  onClick={() => handleLinkClick('juice')}
                >
                  Juice
                </Link>
              </li>
              <li>
                <Link
                  className={`link ${clickedLink === 'about' ? 'clicked' : ''}`}
                  to='/about'
                  onClick={() => handleLinkClick('about')}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className={`link ${
                    clickedLink === 'contact' ? 'clicked' : ''
                  }`}
                  to='/contact'
                  onClick={() => handleLinkClick('contact')}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <Cart isOpen={isCartOpen} onClose={closeCart} />
      </div>
    </>
  );
};

export default Navbar;
