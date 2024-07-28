import React, { useState, useEffect } from 'react';

const SlideshowComponent = ({ interval = 3000 }) => {
  const images = [
    'images/stocksmall1.jpg',
    'images/stocksmall2.jpg',
    'images/stocksmall3.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images, interval]);

  return (
    <div className="relative w-full max-w-xl mx-auto overflow-hidden">
      <img src={images[currentIndex]} alt={`slide-${currentIndex}`} className="w-full block" />
      <div className="absolute bottom-2 w-full flex justify-center">
        {images.map((_, index) => (
          <span
            key={index}
            className={`h-4 w-4 mx-1 rounded-full cursor-pointer ${index === currentIndex ? 'bg-gray-700' : 'bg-gray-300'}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default SlideshowComponent;
