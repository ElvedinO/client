import React from 'react';
import './Card.scss';
import { Link } from 'react-router-dom';
import StarBorderIcon from '@mui/icons-material/StarBorder';
const Card = ({ item }) => {
  return (
    <div className='card'>
      <Link className='link' to={`/product/${item.id}`}>
        <div className='image'>
          {item?.attributes.isNew && <div className='sale'>Sale!</div>}
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              item.attributes?.img?.data?.attributes?.url
            }
            alt=''
            className='mainImg'
          ></img>
        </div>
      </Link>
      <h2 className='short-desc'>{item?.attributes.sdesc}</h2>
      <h2>{item?.attributes.title}</h2>
      <div className='stars'>
        <StarBorderIcon />
        <StarBorderIcon />
        <StarBorderIcon />
        <StarBorderIcon />
        <StarBorderIcon />
      </div>
      <div className='prices'>
        {item?.attributes.isNew ? (
          <h3 className='old-price'>${item?.attributes.price + 20}.00</h3>
        ) : (
          ''
        )}

        <h3>${item?.attributes.price}.00</h3>
      </div>
    </div>
  );
};
export default Card;
