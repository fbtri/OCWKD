import React, { useState, useEffect } from 'react';
import './TheWeekend.css';
import view1 from '../../assets/TWK1.jpeg';
import view2 from '../../assets/TWK2.jpeg';
import view3 from '../../assets/TWK3.jpeg';
import view4 from '../../assets/TWK4.jpeg';
import view5 from '../../assets/TWK5.jpeg';
import view6 from '../../assets/TWK6.jpeg';
import view7 from '../../assets/TWK7.jpeg';
import view8 from '../../assets/TWK8.jpeg';
import view9 from '../../assets/TWK9.jpeg';
import view10 from '../../assets/TWK10.jpeg';
import view11 from '../../assets/TWK11.jpeg';
import view12 from '../../assets/TWK12.jpeg';
import view13 from '../../assets/TWK13.jpeg';
import view14 from '../../assets/TWK14.jpeg';
import view16 from '../../assets/TWK16.jpeg';
import view17 from '../../assets/TWK17.jpeg';
import view18 from '../../assets/TWK18.jpeg';
import view19 from '../../assets/TWK19.jpeg';
import view15 from '../../assets/TWK15.jpeg';


import Navbar from '../Navbar/Navbar';

const TheWeekend = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const images = [view1, view2, view3, view4, view5, view6, view7, view8, view9, view10, view11, view12, view13, view14, view15, view16, view17, view18, view19];

  const handleClick = (image) => {
    setSelectedImage(image === selectedImage ? null : image);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        navigate(-1);
      } else if (event.key === 'ArrowRight') {
        navigate(1);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage]);

  const navigate = (direction) => {
    const currentIndex = images.indexOf(selectedImage);
    let nextIndex = currentIndex + direction;

    if (nextIndex >= images.length) {
      nextIndex = 0;
    } else if (nextIndex < 0) {
      nextIndex = images.length - 1;
    }

    setSelectedImage(images[nextIndex]);
  };

  return (
    <div>
      <Navbar />
      <div className='theweekend'>
        {images.map((image, index) => (
          <div key={index} className={`image-container ${selectedImage === image ? 'selected' : ''}`} onClick={() => handleClick(image)}>
            <img src={image} alt={`View ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TheWeekend;
