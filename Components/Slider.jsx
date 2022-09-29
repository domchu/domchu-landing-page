import React, { useState } from "react";
import Image from "next/image";
import { sliderData } from "./SliderData";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const PrevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  if (!Array.isArray(slides) || length <= 0) {
    return null;
  }
  return (
    <div id="gallery">
      <h1>Gallery</h1>
      <div className="slider">
        <BsArrowRightSquareFill size={40} />
        {sliderData.map((slide, index) => {
          return (
            <div
              key={index}
              className={
                index === current
                  ? "opacity-[0] ease-in duration-1000"
                  : "opacity-0"
              }
            >
              <BsArrowLeftSquareFill size={40} />
              {index === current && (
                <Image
                  src={slide.image}
                  alt="/"
                  width="1440"
                  height="600"
                  objectFit="cover"
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
