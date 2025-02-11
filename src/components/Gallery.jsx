import React, { useState } from 'react';

const Gallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div style={styles.gallery}>
      <button style={styles.button} onClick={goToPrevious}>
        Previous
      </button>
      <img
        src={images[currentIndex]}
        alt={`Gallery ${currentIndex + 1}`}
        style={styles.image}
      />
      <button style={styles.button} onClick={goToNext}>
        Next
      </button>
    </div>
  );
};

const styles = {
  gallery: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '20px',
  },
  image: {
    maxWidth: '100%',
    maxHeight: '400px',
    borderRadius: '8px',
    margin: '0 20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007BFF',
    color: '#FFF',
    cursor: 'pointer',
  },
};

export default Gallery;