import React, { useState, useRef, useEffect } from 'react';

const SwipeableSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const sliderRef = useRef(null);

  // Handle swipe start
  const handleSwipeStart = (e) => {
    setStartX(e.touches ? e.touches[0].clientX : e.clientX);
    setIsSwiping(true);
  };

  // Handle swipe move
  const handleSwipeMove = (e) => {
    if (!isSwiping) return;
    const currentX = e.touches ? e.touches[0].clientX : e.clientX;
    const diff = currentX - startX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goToPrevious();
      } else {
        goToNext();
      }
      setIsSwiping(false);
    }
  };

  // Handle swipe end
  const handleSwipeEnd = () => {
    setIsSwiping(false);
  };

  // Go to the previous photo
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Go to the next photo
  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Auto-loop effect
  useEffect(() => {
    const interval = setInterval(goToNext, 5000); // Change photo every 5 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div
      style={styles.sliderContainer}
      onTouchStart={handleSwipeStart}
      onTouchMove={handleSwipeMove}
      onTouchEnd={handleSwipeEnd}
      onMouseDown={handleSwipeStart}
      onMouseMove={handleSwipeMove}
      onMouseUp={handleSwipeEnd}
      onMouseLeave={handleSwipeEnd}
      ref={sliderRef}
    >
      <div
        style={{
          ...styles.slider,
          transform: `translateX(${-currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div key={index} style={styles.slide}>
            <img src={image} alt={`Slide ${index + 1}`} style={styles.image} className="slider__image" />
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  sliderContainer: {
    position: 'relative',
    width: '100%',
    maxWidth: '600px', // Adjust based on your desired width
    margin: '0 auto',
    overflow: 'hidden',
    borderRadius: '8px',
  },
  slider: {
    display: 'flex',
    transition: 'transform 0.5s ease-in-out',
  },
  slide: {
    minWidth: '100%',
    boxSizing: 'border-box',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 'auto',
    display: 'block',
  },
};

export default SwipeableSlider;