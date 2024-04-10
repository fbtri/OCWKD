import React from 'react';
import './Contact.css';
import Navbar from '../Navbar/Navbar';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className='centered-text'>
        <a href="https://www.instagram.com/felipes_training/" target="_blank" rel="noopener noreferrer">@felipes_training</a>
        <p>fbragga@gmail.com</p>
      </div>
    </div>
  );
};

export default Contact;

