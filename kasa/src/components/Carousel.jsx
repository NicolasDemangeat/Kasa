import React, { useState } from 'react';
import '../styles/carousel.css'

function Carousel(props){
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = props.pictures

    const [hover, setHover] = useState(false);
    
  const handleNextClick = () => {
    const nextIndex = currentImageIndex + 1;
    if (nextIndex === images.length) {
      setCurrentImageIndex(0);
    } else {
      setCurrentImageIndex(nextIndex);
    }
  }

  const handlePrevClick = () => {
    const prevIndex = currentImageIndex - 1;
    if (prevIndex < 0) {
      setCurrentImageIndex(images.length - 1);
    } else {
      setCurrentImageIndex(prevIndex);
    }
  }

    return (
        <div className='carousel' style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>            
            <div className='arrow-contener' onClick={handlePrevClick} 
                onMouseEnter={() => setHover(true)} 
                onMouseLeave={() => setHover(false)} 
                style={{ cursor: hover ? 'pointer' : 'default' }}>
                <i class="arrow left"></i>
            </div>
            <div className='arrow-contener' onClick={handleNextClick}
                onMouseEnter={() => setHover(true)} 
                onMouseLeave={() => setHover(false)} 
                style={{ cursor: hover ? 'pointer' : 'default' }}>
                <i class="arrow right"></i>
            </div>
        </div>
    );
}

export default Carousel;  


