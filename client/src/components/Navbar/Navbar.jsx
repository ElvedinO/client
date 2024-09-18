import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutliedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  return (
    <>
      <div className='navbar'>
        <div className='wrapper'>
          <div className='left'>
            <img className='logo ' src='./images/logo.svg' alt='' />
            {/* <KeyboardArrowDownIcon /> */}

            <div className='item'>
              <Link className='link ' to='products/1'>
                Everything
              </Link>
            </div>
            <div className='item'>
              <Link className='link' to='products/2'>
                Groceries
              </Link>
            </div>
            <div className='item'>
              <Link className='link' to='products/3'>
                Juice
              </Link>
            </div>
          </div>

          <div className='right'>
            <div className='item'>
              <Link className='link' to='/'>
                About
              </Link>
            </div>
            <div className='item'>
              <Link className='link' to='/'>
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
