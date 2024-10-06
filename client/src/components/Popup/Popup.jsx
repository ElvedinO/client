// Popup.js
import React from 'react';
import './Popup.scss'; // Create a separate CSS file for styling

const Popup = ({ message, onClose }) => {
  return (
    <div className='popup-overlay'>
      <div className='popup-content'>
        <p>{message}</p>
        <button className='popup-btn' onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
