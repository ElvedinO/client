import React, { useState, useEffect } from 'react';
import './Slider.scss';

function CustomCarousel({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDone, setSlideDone] = useState(true);
  const [timeID, setTimeID] = useState(null);

  useEffect(() => {
    if (slideDone) {
      setSlideDone(false);
      setTimeID(
        setTimeout(() => {
          slideNext();
          setSlideDone(true);
        }, 5000)
      );
    }

    return () => {
      if (timeID) clearTimeout(timeID);
    };
  }, [slideDone]);

  const slideNext = () => {
    setActiveIndex((val) => (val >= children.length - 1 ? 0 : val + 1));
  };

  const AutoPlayStop = () => {
    if (timeID) {
      clearTimeout(timeID);
      setSlideDone(false);
    }
  };

  const AutoPlayStart = () => {
    if (!slideDone) {
      setSlideDone(true);
    }
  };

  return (
    <div
      className='container__slider'
      onMouseEnter={AutoPlayStop}
      onMouseLeave={AutoPlayStart}
    >
      {children.map((item, index) => (
        <div
          className={`slider__item slider__item-active-${activeIndex + 1}`}
          key={index}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

export default CustomCarousel;
