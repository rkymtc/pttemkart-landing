// components/Slider.tsx
import React, { useState } from 'react';

type Slide = {
  id: number;
  title?: string;
  image: string;
  link?: string;
};

type SliderProps = {
  slides: Slide[];
};

const Banner: React.FC<SliderProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const currentSlide = slides[currentIndex];

  return (
    <div className="slider relative w-full flex items-center justify-center overflow-hidden bg-gray-50">
      {/* Left Button */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 h-12 w-12 bg-gray-300 bg-opacity-60 flex items-center justify-center hover:bg-gray-400 transition-all duration-300 z-10"
        onClick={goToPrevious}
        aria-label="Previous Slide"
      >
        <span className="inline-block w-5 h-5 border-l-2 border-t-2 border-gray-600 transform -rotate-45"></span>
      </button>

      {/* Slide */}
      <div className="relative w-full h-full flex items-center justify-center">
        <img
          src={currentSlide.image}
          alt={currentSlide.title || 'Slide'}
          className="w-full h-full object-cover"
        />
        {currentSlide.link && (
          <a
            href={currentSlide.link}
            className="apply-btn absolute left-10 bottom-10 px-4 py-2 border border-gray-600 text-gray-700 font-semibold bg-white hover:bg-gray-100 transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hemen Başvur
          </a>
        )}
      </div>

      {/* Right Button */}
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 h-12 w-12 bg-gray-300 bg-opacity-60 flex items-center justify-center hover:bg-gray-400 transition-all duration-300 z-10"
        onClick={goToNext}
        aria-label="Next Slide"
      >
        <span className="inline-block w-5 h-5 border-r-2 border-t-2 border-gray-600 transform rotate-45"></span>
      </button>
    </div>
  );
};

export default Banner;
