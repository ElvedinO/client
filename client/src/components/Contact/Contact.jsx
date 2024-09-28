import React from 'react';
import './Contact.scss';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import MailIcon from '@mui/icons-material/Mail';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

const Contact = () => {
  return (
    <div className='contact'>
      <div className='top'>
        <h1 className='title'>Get In Touch</h1>
      </div>
      <div className='infos'>
        <img src='../images/basil-leaf.png' alt='' />
        <div className='info'>
          <PhoneEnabledIcon className='icon' />
          <p>+123 456 789</p>
          <p>+123 456 789</p>
        </div>
        <div className='info'>
          <MailIcon className='icon' />
          <p>info@example.com</p>
          <p>support@example.com</p>
        </div>
        <div className='info'>
          <FmdGoodIcon className='icon' />
          <p>1569 Ave, New York,</p>
          <p>NY 10028, USA</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
