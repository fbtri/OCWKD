import React from 'react';
import './Hero.css';
import btn_image from '../../assets/TWK9.jpeg'

// <button className='btn2'> Explore more <img src={btn_image} alt="" /></button>

const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
        <h1>Ironman Oceanside 70.3</h1>
        <p>A race weekend with friends and family</p>
       
        </div>
    </div>
  );
};

export default Hero;
