import React from 'react';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import RecyclingIcon from '@mui/icons-material/Recycling';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import './Services.scss';
const Services = () => {
  return (
    <div className='services'>
      <div className='container'>
        <div className='service'>
          <LocalShippingIcon className='ser-icon' />
          <div className='ser-info'>
            <h1>Free Shipping</h1>
            <p>Above $5 Only</p>
          </div>
        </div>
        <div className='service'>
          <WorkspacePremiumIcon className='ser-icon' />

          <div>
            <h1>Certified Organic</h1>
            <p>100% Guarantee</p>
          </div>
        </div>
        <div className='service'>
          <LocalAtmIcon className='ser-icon' />

          <div>
            <h1>Huge Savings</h1>
            <p>At Lowest Price</p>
          </div>
        </div>
        <div className='service'>
          <RecyclingIcon className='ser-icon' />

          <div>
            <h1>Easy Returns</h1>
            <p>No Questions Asked</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
