import React from 'react';
import './Cart.scss';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, resetCart } from '../../redux/cartReducer';
import { loadStripe } from '@stripe/stripe-js';
import { makeRequest } from '../../makeRequest';

const Cart = ({ isOpen, onClose }) => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => (total += item.quantity * item.price));
    return total.toFixed(2);
  };

  const stripePromise = loadStripe(
    'pk_test_51Pw5o4Ds8mgCb63kFcDjeihNp5FzCSNAgeqnW1o7madb82qgCF43Ii7f9dLrvTA5xIFahz9BZLRlOub1FibACyyY00YnSxg4ro'
  );

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;

      const res = await makeRequest.post('/orders', { products });

      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {isOpen && <div className='cart-overlay' onClick={onClose}></div>}
      <div className={`cart ${isOpen ? 'open' : ''}`}>
        <div className='cart-header'>
          <h1>Products in your cart</h1>
          <CloseIcon className='close-icon' onClick={onClose} />
        </div>
        <div className='items'>
          {products?.map((item) => (
            <div className='item' key={item.id}>
              <div className='prod-container'>
                <img src={item.img} alt='' />
                <div className='details'>
                  <h1>{item.title}</h1>
                  <p className='item-desc'>{item.desc?.substring(0, 100)}...</p>
                  <div className='price'>
                    {item.quantity} x ${item.price}.00
                  </div>
                </div>
              </div>
              <CancelOutlinedIcon
                className='delete'
                onClick={() => dispatch(removeItem(item.id))}
              />
            </div>
          ))}
        </div>
        <div className='cart-bottom'>
          <div className='total'>
            <span>SUBTOTAL</span>
            <span>{totalPrice()}$</span>
          </div>
          <div className='checkout'>
            <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
            <span className='reset' onClick={() => dispatch(resetCart())}>
              Reset cart
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
