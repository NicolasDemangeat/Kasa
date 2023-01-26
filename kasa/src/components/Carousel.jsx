import React, { useState } from 'react';
import '../styles/carousel.css'

function Carousel(props){
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = props.pictures
    const [hover, setHover] = useState(false);
    
    let visible = images.length === 1 ? 'hidden' : null

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
            <div className={`arrow-contener ${visible}`} onClick={handlePrevClick} 
                onMouseEnter={() => setHover(true)} 
                onMouseLeave={() => setHover(false)} 
                style={{ cursor: hover ? 'pointer' : 'default' }}>
                <i className="arrow left"></i>
            </div>
            <div className={`counter ${visible}`}>
                {`${currentImageIndex + 1}/${images.length}`}
            </div>
            <div className={`arrow-contener ${visible}`} onClick={handleNextClick}
                onMouseEnter={() => setHover(true)} 
                onMouseLeave={() => setHover(false)} 
                style={{ cursor: hover ? 'pointer' : 'default' }}>
                <i className="arrow right"></i>
            </div>
        </div>
    );
}

export default Carousel;  


