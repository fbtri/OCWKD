import React, { useState, useEffect } from 'react';
import './RaceCourse.css';
import view1 from '../../assets/RC1.png';
import view2 from '../../assets/RC2.png';
import view3 from '../../assets/RC3.png';
import view4 from '../../assets/RC4.png';
import view5 from '../../assets/RC5.png';

import Navbar from '../Navbar/Navbar';

const RaceCourse = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const images = [view1, view2, view3, view4, view5];

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
      <div className='racecourse'>
        {images.map((image, index) => (
          <div key={index} className={`image-container ${selectedImage === image ? 'selected' : ''}`} onClick={() => handleClick(image)}>
            <img src={image} alt={`View ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RaceCourse;
