import "./Slider.css";
import { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { SliderImages } from "./SliderImage";

import React from "react";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const handleNextSlide = () => {
    // if it's the last image in the array, set it back to the first image or go to the next one
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const handlePrevSlide = () => {
    // if it's the first image in the array, set it back to the last image and keep substracting
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  // if we have no data
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={handlePrevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={handleNextSlide} />
      {SliderImages.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='travel' className='image' />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Slider;
